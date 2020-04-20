import React from "react";
import moment from "moment";
import { history } from "../routers/AppRouter";
import { Link } from "react-router-dom";

const PostListItem = ({ id, title, content, imageLink, createdAt }) => {
  let path = "edit";
  if (history.location.pathname === "/") {
    path = "post";
  }
  setTimeout(() => {
    console.log(imageLink);
  }, 3000);
  return (
    <div>
      <h2>
        <Link to={`/${path}/${id}`}>{title}</Link>
      </h2>
      <p>{content}</p>
      {imageLink && <img src={imageLink} alt="blog-img" />}
      <small>{moment(createdAt).format("Do MMMM, YYYY")}</small>
    </div>
  );
};

export default PostListItem;
