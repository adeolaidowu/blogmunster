import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostForm from "./PostForm";
import { startEditPost, startDeletePost } from "../actions/posts";

export const EditPostPage = (props) => {
  const onSubmit = (post) => {
    props.startEditPost(props.post.id, post);
    props.history.push("/dashboard");
  };
  const onDelete = () => {
    props.startDeletePost({ id: props.post.id });
    props.history.push("/dashboard");
  };
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/dashboard" className="button">
          Dashboard
        </Link>
        <button className="button btn-danger" onClick={onDelete}>
          Delete Post
        </button>
      </div>
      <h1>Edit Blog Post</h1>
      <PostForm post={props.post} onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => props.match.params.id === post.id),
});

const mapDispatchToProps = (dispatch) => ({
  startEditPost: (id, updates) => dispatch(startEditPost(id, updates)),
  startDeletePost: (data) => dispatch(startDeletePost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
