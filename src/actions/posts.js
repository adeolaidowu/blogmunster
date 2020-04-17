import database from "../firebase/firebase";

//ADD_POST
export const addPost = (post) => ({
  type: "ADD_POST",
  post,
});

export const startAddPost = (postData = {}) => {
  return (dispatch) => {
    const {
      title = "",
      content = "",
      imageLink = "",
      createdAt = 0,
    } = postData;
    const post = { title, content, imageLink, createdAt };
    return database
      .ref("posts")
      .push(post)
      .then((ref) => {
        dispatch(
          addPost({
            id: ref.key,
            ...post,
          })
        );
      });
  };
};

//EDIT_POST
export const editPost = (id, updates) => ({
  type: "EDIT_POST",
  id,
  updates,
});

//DELETE_POST
export const deletePost = ({ id } = {}) => ({
  type: "DELETE_POST",
  id,
});

//SET_POSTS
export const setPosts = (posts) => ({
  type: "SET_POSTS",
  posts,
});

export const startSetPosts = () => {
  return (dispatch) => {
    return database
      .ref("posts")
      .once("value")
      .then((snapshot) => {
        const posts = [];
        snapshot.forEach((childSnapshot) => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setPosts(posts));
      });
  };
};
