import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { PostFilters } from "../../components/PostFilters";
import { filters, altFilters } from "../fixtures/filters";
import { DateRangePicker } from "react-dates";
import moment from "moment";

let setTextFilterSpy, setStartDateSpy, setEndDateSpy, wrapper;
beforeEach(() => {
  setTextFilterSpy = jest.fn();
  setStartDateSpy = jest.fn();
  setEndDateSpy = jest.fn();
  wrapper = shallow(
    <PostFilters
      filters={filters}
      setStartDate={setStartDateSpy}
      setEndDate={setEndDateSpy}
      setTextFilter={setTextFilterSpy}
    />
  );
});
test("should correctly render component with default filters", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should correctly render component with alt filters", () => {
  wrapper.setProps({ filters: altFilters });
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle text change correctly", () => {
  const value = "testing is complex";
  wrapper.find("input").simulate("change", {
    target: { value },
  });
  expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
});

test("should handle onFocusChange for datepicker", () => {
  const calendarFocused = "startDate";
  wrapper.find(DateRangePicker).prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});

test("should correctly handle onDatesChange", () => {
  const startDate = moment();
  const endDate = moment().add(2, "years");
  wrapper.find(DateRangePicker).prop("onDatesChange")({ startDate, endDate });
  expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
  expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});
