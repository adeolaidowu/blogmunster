import React from "react";
import moment from "moment";
import { history } from "../routers/AppRouter";
import { Link } from "react-router-dom";

const PostListItem = ({ id, title, content, image, createdAt }) => {
  let path = "edit";
  if (history.location.pathname === "/") {
    path = "post";
  }
  return (
    <div>
      <h2>
        <Link to={`/${path}/${id}`}>{title}</Link>
      </h2>
      <p>{content}</p>
      <small>{moment(createdAt).format("Do MMMM, YYYY")}</small>
    </div>
  );
};

export default PostListItem;
