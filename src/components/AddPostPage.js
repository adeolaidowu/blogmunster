import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { addPost } from "../actions/posts";

export const AddPostPage = (props) => {
  const onSubmit = (post) => {
    props.addPost(post);
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
  addPost: (post) => dispatch(addPost(post)),
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
