import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { PostList } from "../../components/PostList";
import posts from "../fixtures/posts";

test("should correctly render component", () => {
  const wrapper = shallow(<PostList posts={posts} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
