import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { PostItemPage } from "../../components/PostItemPage";
import posts from "../fixtures/posts";

test("should correctly render component", () => {
  const wrapper = shallow(<PostItemPage post={posts[0]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
