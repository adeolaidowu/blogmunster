import React from "react";
import PostList from "./PostList";
import PostFilters from "./PostFilters";

const Homepage = () => (
  <div>
    <h1>Welcome to BlogMunster</h1>
    {<PostFilters />}
    {<PostList />}
  </div>
);

export default Homepage;
