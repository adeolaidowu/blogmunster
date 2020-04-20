import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import PostList from "./PostList";
import PostFilters from "./PostFilters";

export const Homepage = (props) => {
  return (
    <div>
      <h1>Welcome to BlogMunster</h1>
      <button onClick={props.startLogin}>Login with Google</button>
      {<PostFilters />}
      {<PostList />}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   presentState: state,
// });
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(Homepage);
