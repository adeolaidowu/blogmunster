import React from "react";
import { NavLink } from "react-router-dom";
import PostList from "./PostList";
import PostFilters from "./PostFilters";
import Sidebar from "./Sidebar";

export const Dashboard = ({ startLogout }) => (
  <div>
    <h1>My Dashboard</h1>
    <NavLink to="/create">Create New Post</NavLink>
    <PostFilters />
    <PostList />
    <Sidebar />
  </div>
);

export default Dashboard;
