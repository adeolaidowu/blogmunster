import React from "react";
import PostForm from "../../components/PostForm";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import posts from "../fixtures/posts";

test("should render correctly with no post prop", () => {
  const wrapper = shallow(<PostForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render component with post prop", () => {
  const wrapper = shallow(<PostForm post={posts[1]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should update state on title change", () => {
  const title = "express";
  const wrapper = shallow(<PostForm />);
  wrapper.find("input").simulate("change", {
    target: { value: title },
  });
  expect(wrapper.state("title")).toBe(title);
});

test("should render error on submit of empty form", () => {
  const wrapper = shallow(<PostForm />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error")).toBeTruthy();
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should update state on content change", () => {
  const content = "about programming";
  const wrapper = shallow(<PostForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value: content },
  });
  expect(wrapper.state("content")).toBe(content);
});

test("should call onsubmit prop with valid form data", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<PostForm post={posts[2]} onSubmit={onSubmitSpy} />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: posts[2].title,
    content: posts[2].content,
    createdAt: posts[2].createdAt,
  });
});
