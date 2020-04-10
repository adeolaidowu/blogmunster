import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { addPost } from "../actions/posts";

const AddPost = (props) => {
  const onSubmit = (post) => {
    console.log(post);
    props.dispatch(addPost(post));
    props.history.push("/");
  };
  return (
    <div>
      <PostForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect()(AddPost);
