import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PostListItem = ({ id, title, content, image, createdAt }) => (
  <div>
    <h2>
      <Link to={`/edit/${id}`}>{title}</Link>
    </h2>
    <p>{content}</p>
    <small>{moment(createdAt).format("Do MMMM, YYYY")}</small>
  </div>
);

export default PostListItem;
