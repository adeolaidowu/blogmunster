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
      <div className="item-page-container__content">
        <h1 className="item-page-container__header text-center">
          {props.post.title}
        </h1>
        {props.post.imageLink && (
          <img
            src={props.post.imageLink}
            alt="blog-img"
            className="item-page-container__img"
          />
        )}
        <p className="item-page-container__text">{props.post.content}</p>
        <small className="item-page-container__date">
          Posted on {moment(props.post.createdAt).format("Do MMMM, YYYY")}
        </small>
      </div>
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id),
});
export default connect(mapStateToProps)(PostItemPage);
