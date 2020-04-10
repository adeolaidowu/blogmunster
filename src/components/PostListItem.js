import React from "react";
import { Link } from "react-router-dom";

const PostListItem = ({ id, title, content, image, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h2>{title}</h2>
    </Link>
    <p>{content}</p>
    <small>{createdAt}</small>
  </div>
);

export default PostListItem;
