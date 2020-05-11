import React from "react";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import PostFilters from "./PostFilters";
import Sidebar from "./Sidebar";

export const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard__header">
      <h1>My Dashboard</h1>
      <Link className="button btn-primary" to="/create">
        Create New Post
      </Link>
    </div>
    <PostFilters />
    <div className="dashboard__content">
      <PostList />
    </div>
  </div>
);

export default Dashboard;
