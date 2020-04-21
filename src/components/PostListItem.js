import React from "react";
import moment from "moment";
import { history } from "../routers/AppRouter";
import { Link } from "react-router-dom";

const PostListItem = ({ id, title, content, imageLink, createdAt }) => {
  let path = "edit";
  if (history.location.pathname === "/") {
    path = "post";
  }
  return (
    <div className="home-post-item text-center">
      <Link className="home-post-item__title" to={`/${path}/${id}`}>
        <h2>{title}</h2>
      </Link>
      {imageLink && (
        <img className="home-post-item__img" src={imageLink} alt="blog-img" />
      )}
      <p>
        {content.slice(0, 100)}... <Link to={`/${path}/${id}`}>Read more</Link>
      </p>
      <small>{moment(createdAt).format("Do MMMM, YYYY")}</small>
      <hr />
    </div>
  );
};

export default PostListItem;
