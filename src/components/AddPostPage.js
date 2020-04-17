import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { startAddPost } from "../actions/posts";

export const AddPostPage = (props) => {
  const onSubmit = (post) => {
    props.startAddPost(post);
    props.history.push("/");
  };
  return (
    <div>
      <h1>Create Blog Post</h1>
      <PostForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post)),
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
