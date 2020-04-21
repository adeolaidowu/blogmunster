import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostForm from "./PostForm";
import { startAddPost } from "../actions/posts";

export const AddPostPage = (props) => {
  const onSubmit = (post) => {
    props.startAddPost(post);
    props.history.push("/dashboard");
  };
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/dashboard" className="button">
          Dashboard
        </Link>
      </div>
      <h1>Create Blog Post</h1>
      <PostForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post)),
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
