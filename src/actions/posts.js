import database from "../firebase/firebase";

//ADD_POST
export const addPost = (post) => ({
  type: "ADD_POST",
  post,
});

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = "",
      content = "",
      imageLink = "",
      createdAt = 0,
    } = postData;
    const post = { title, content, imageLink, createdAt };
    return database
      .ref(`posts`)
      .push({
        ...post,
        uid,
      })
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
  return (dispatch, getState) => {
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
  return (dispatch, getState) => {
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

// get all posts to display on homepage
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

//get all posts by a single user to display on user dashboard
export const startSetUserPosts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`posts`)
      .once("value")
      .then((snapshot) => {
        const posts = [];
        snapshot.forEach((childSnapshot) => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        const userPosts = [];
        for (let post of posts) {
          post.uid === uid && userPosts.push(post);
        }
        dispatch(setPosts(userPosts));
      });
  };
};
