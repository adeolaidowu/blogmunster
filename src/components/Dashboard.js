import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { NavLink } from "react-router-dom";
import PostList from "./PostList";
import PostFilters from "./PostFilters";
import Sidebar from "./Sidebar";

export const Dashboard = ({ startLogout }) => (
  <div>
    <h1>My Dashboard</h1>
    <button onClick={startLogout}>Logout</button>
    <NavLink to="/create">Create New Post</NavLink>
    <PostFilters />
    <PostList />
    <Sidebar />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(null, mapDispatchToProps)(Dashboard);
