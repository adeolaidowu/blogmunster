import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { editPost, deletePost } from "../actions/posts";

const EditPost = (props) => {
  const onSubmit = (post) => {
    props.dispatch(editPost(props.post.id, post));
    props.history.push("/");
  };
  const onDelete = () => {
    props.dispatch(deletePost({ id: props.post.id }));
    props.history.push("/");
  };
  return (
    <div>
      <PostForm post={props.post} onSubmit={onSubmit} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => props.match.params.id === post.id),
});

export default connect(mapStateToProps)(EditPost);
