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

export const startEditPost = (id, updates) => {
  return (dispatch) => {
    dispatch(editPost(id, updates));
    database.ref(`posts/${id}`).update(updates);
  };
};

//DELETE_POST
export const deletePost = ({ id } = {}) => ({
  type: "DELETE_POST",
  id,
});

export const startDeletePost = ({ id } = {}) => {
  return (dispatch) => {
    database
      .ref(`posts/${id}`)
      .remove()
      .then(() => {
        dispatch(deletePost({ id }));
      });
  };
};

//SET_POSTS -- This action fetches data from db to display when page is visited
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
