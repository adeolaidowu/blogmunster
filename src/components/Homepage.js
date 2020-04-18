import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import PostList from "./PostList";
import PostFilters from "./PostFilters";

export const Homepage = ({ startLogin }) => (
  <div>
    <h1>Welcome to BlogMunster</h1>
    <button onClick={startLogin}>Login with Google</button>
    {<PostFilters />}
    {<PostList />}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(null, mapDispatchToProps)(Homepage);
