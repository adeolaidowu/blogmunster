import React from "react";
import Homepage from "../../components/Homepage";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

test("should render homepage correctly", () => {
  const wrapper = shallow(<Homepage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
