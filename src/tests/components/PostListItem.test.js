import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import PostListItem from "../../components/PostListItem";
import posts from "../fixtures/posts";

test("should correctly render component", () => {
  const wrapper = shallow(<PostListItem {...posts[1]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
