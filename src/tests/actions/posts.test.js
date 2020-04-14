import { addPost, editPost, deletePost } from "../../actions/posts";

test("should set up delete post action object", () => {
  const action = deletePost({ id: "abcd" });
  expect(action).toEqual({
    type: "DELETE_POST",
    id: "abcd",
  });
});

test("should set up edit post action object", () => {
  const action = editPost("zaraki123", { content: "i am zaraki kenpachi" });
  expect(action).toEqual({
    type: "EDIT_POST",
    id: "zaraki123",
    updates: {
      content: "i am zaraki kenpachi",
    },
  });
});

test("should set up add post action object with values", () => {
  const postItem = {
    title: "bleach",
    content: "this is about kurosaki ichigo",
    imageLink: "https://unsplash.com/random",
    createdAt: 45000,
  };
  const action = addPost(postItem);
  expect(action).toEqual({
    type: "ADD_POST",
    post: {
      ...postItem,
      id: expect.any(String),
    },
  });
});

test("should set up add post action object with default values", () => {
  const action = addPost();
  expect(action).toEqual({
    type: "ADD_POST",
    post: {
      title: "",
      content: "",
      imageLink: "",
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
