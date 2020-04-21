import React from "react";
import PostList from "./PostList";
import PostFilters from "./PostFilters";
import Sidebar from "./Sidebar";

export const Homepage = () => {
  return (
    <div className="main-container">
      <h1 className="main-container__title text-center">
        Welcome to BlogMunster
      </h1>
      <hr />
      <PostFilters />
      <div className="main-content">
        <PostList />
        <Sidebar />
      </div>
    </div>
  );
};

export default Homepage;
