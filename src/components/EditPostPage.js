import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { editPost, deletePost } from "../actions/posts";

export const EditPostPage = (props) => {
  const onSubmit = (post) => {
    props.editPost(props.post.id, post);
    props.history.push("/");
  };
  const onDelete = () => {
    props.deletePost({ id: props.post.id });
    props.history.push("/");
  };
  return (
    <div>
      <h1>Edit Blog Post</h1>
      <PostForm post={props.post} onSubmit={onSubmit} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => props.match.params.id === post.id),
});

const mapDispatchToProps = (dispatch) => ({
  editPost: (id, updates) => dispatch(editPost(id, updates)),
  deletePost: (data) => dispatch(deletePost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
