import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PostItemPage = (props) => {
  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <small>{props.post.createdAt}</small>
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id),
});
export default connect(mapStateToProps)(PostItemPage);
