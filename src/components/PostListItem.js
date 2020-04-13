import React from "react";
import { Link } from "react-router-dom";

const PostListItem = ({ id, title, content, image, createdAt }) => (
  <div>
    <h2>
      <Link to={`/edit/${id}`}>{title}</Link>
    </h2>
    <p>{content}</p>
    <small>{createdAt}</small>
  </div>
);

export default PostListItem;
