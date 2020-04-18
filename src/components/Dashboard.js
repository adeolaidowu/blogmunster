import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import PostList from "./PostList";
import PostFilters from "./PostFilters";

export const Dashboard = ({ startLogout }) => (
  <div>
    <h1>My Dashboard</h1>
    <button onClick={startLogout}>Logout</button>
    <PostFilters />
    <PostList />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(null, mapDispatchToProps)(Dashboard);
