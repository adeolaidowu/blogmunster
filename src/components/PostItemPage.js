import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

export const PostItemPage = (props) => {
  return (
    <div className="item-page-container">
      <Link className="button button--alt" to="/">
        Back to Homepage
      </Link>
      <h1 className="text-center">{props.post.title}</h1>
      {props.post.imageLink && (
        <img src={props.post.imageLink} alt="blog-img" />
      )}
      <p>{props.post.content}</p>
      <small>
        Posted on {moment(props.post.createdAt).format("Do MMMM, YYYY")}
      </small>
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id),
});
export default connect(mapStateToProps)(PostItemPage);
