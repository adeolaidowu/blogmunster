import { addPost, editPost, deletePost, setPosts } from "../../actions/posts";
import configureMockStore from "redux-mock-store";
//import database from "../../firebase/firebase";
import thunk from "redux-thunk";
import posts from "../fixtures/posts";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

test("should set up add post action object with provided values", () => {
  const action = addPost(posts[1]);
  expect(action).toEqual({
    type: "ADD_POST",
    post: posts[1],
  });
});

test("should set up posts action object", () => {
  const action = setPosts(posts);
  expect(action).toEqual({
    type: "SET_POSTS",
    posts,
  });
});
// testing async actions
// commented out because test cases write directly to db
// test("should add post to database and store", (done) => {
//   const store = mockStore({});
//   const postData = {
//     title: "i hate writing tests",
//     content:
//       "writing tests for async actions is especially complex and annoying",
//     imageLink: "https://unsplash.com/random",
//     createdAt: 1459800237,
//   };
//   store.dispatch(startAddPost(postData)).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: "ADD_POST",
//       post: {
//         id: expect.any(String),
//         ...postData,
//       },
//     });
//     done();
//     //return database.ref(`posts/${actions[0].post.id}`).once("value");
//   });
//   // .then((snapshot) => {
//   //   expect(snapshot.val()).toEqual(postData);
//   //   done();
//   // });
// });

// test("should add post with default data to database and store", (done) => {
//   const store = mockStore({});
//   const postDefaults = {
//     title: "",
//     content: "",
//     imageLink: "",
//     createdAt: 0,
//   };
//   store.dispatch(startAddPost({})).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: "ADD_POST",
//       post: {
//         id: expect.any(String),
//         ...postDefaults,
//       },
//     });
//     done();
//     //return database.ref(`posts/${actions[0].post.id}`).once("value");
//   });
//   // .then((snapshot) => {
//   //   expect(snapshot.val()).toEqual(postDefaults);
//   //   done();
//   // });
// });

// test("should set up add post action object with default values", () => {
//   const action = addPost();
//   expect(action).toEqual({
//     type: "ADD_POST",
//     post: {
//       title: "",
//       content: "",
//       imageLink: "",
//       createdAt: 0,
//       id: expect.any(String),
//     },
//   });
// });
