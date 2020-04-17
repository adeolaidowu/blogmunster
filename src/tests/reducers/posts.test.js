import postsReducer from "../../reducers/postsReducer";
import moment from "moment";
import posts from "../fixtures/posts";

test("should set up default state", () => {
  const state = postsReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add post to current state", () => {
  const post = {
    id: "1023ab",
    title: "random post",
    content: "this is just for testing purposes",
    imageLink: "https://pixabay.com/random",
    createdAt: moment().valueOf(),
  };
  const action = {
    type: "ADD_POST",
    post,
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual([...posts, post]);
});

test("should delete post from state", () => {
  const action = {
    type: "DELETE_POST",
    id: posts[2].id,
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual([posts[0], posts[1]]);
});

test("should edit post in state", () => {
  const title = "learning react testing";
  const action = {
    type: "EDIT_POST",
    id: posts[1].id,
    updates: {
      title,
    },
  };
  const state = postsReducer(posts, action);
  expect(state[1].title).toBe(title);
});

test("should set posts to state", () => {
  const action = {
    type: "SET_POSTS",
    posts: posts[0],
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual(posts[0]);
});
