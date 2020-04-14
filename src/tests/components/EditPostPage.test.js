import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { EditPostPage } from "../../components/EditPostPage";
import posts from "../fixtures/posts";

let editPostSpy, deletePostSpy, historySpy, wrapper;

beforeEach(() => {
  editPostSpy = jest.fn();
  deletePostSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditPostPage
      editPost={editPostSpy}
      deletePost={deletePostSpy}
      history={historySpy}
      post={posts[2]}
    />
  );
});

test("should correctly render EditPostPage component", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should correctly handle editPost", () => {
  const newPost = { title: "new title" };
  wrapper.find("PostForm").prop("onSubmit")(newPost);
  expect(editPostSpy).toHaveBeenLastCalledWith(posts[2].id, newPost);
  expect(historySpy.push).toHaveBeenLastCalledWith("/");
});

test("should correctly handle deletePost", () => {
  wrapper.find("button").simulate("click");
  expect(deletePostSpy).toHaveBeenLastCalledWith({ id: posts[2].id });
  expect(historySpy.push).toHaveBeenLastCalledWith("/");
});
