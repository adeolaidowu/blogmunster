import React from "react";
import { connect } from "react-redux";
import PostListItem from "./PostListItem";
import getVisiblePosts from "../selectors/visiblePosts";

export const PostList = (props) => (
  <div className="postlist">
    {props.posts.length === 0 ? (
      <p>You have no blog posts</p>
    ) : (
      props.posts.map((post) => <PostListItem {...post} key={post.id} />)
    )}
  </div>
);

const mapStateToProps = (state) => ({
  posts: getVisiblePosts(state.posts, state.filters),
});

export default connect(mapStateToProps)(PostList);
