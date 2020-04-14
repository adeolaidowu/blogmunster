import { setTextFilter, setStartDate, setEndDate } from "../../actions/filters";

test("should set up setTextFilter action object with provided value", () => {
  const text = "kimetsu no yaiba";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("should set up setTextFilter action object with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should set up start date action object", () => {
  const startDate = 150000;
  const action = setStartDate(startDate);
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate,
  });
});

test("should set up end date action object", () => {
  const endDate = 230000;
  const action = setEndDate(endDate);
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate,
  });
});
