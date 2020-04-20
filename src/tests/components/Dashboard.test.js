import React from "react";
import { Dashboard } from "../../components/Dashboard";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

test("should correctly render component", () => {
  const wrapper = shallow(<Dashboard startLogout={() => {}} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should call startLogout when clicked", () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Dashboard startLogout={startLogoutSpy} />);
  wrapper.find("button").simulate("click");
  expect(startLogoutSpy).toHaveBeenCalled();
});
