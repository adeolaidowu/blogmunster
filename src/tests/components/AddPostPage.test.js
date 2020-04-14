import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { AddPostPage } from "../../components/AddPostPage";
import posts from "../fixtures/posts";

let addPost, history, wrapper;
beforeEach(() => {
  addPost = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddPostPage addPost={addPost} history={history} />);
});

test("should render add post page correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should correctly handle submit", () => {
  wrapper.find("PostForm").prop("onSubmit")(posts[1]);
  expect(addPost).toHaveBeenLastCalledWith(posts[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});
