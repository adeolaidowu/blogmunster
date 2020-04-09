import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";
import Dashboard from "../components/Dashboard";
import AddPost from "../components/AddPost";
import EditPost from "../components/EditPost";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/create" component={AddPost} />
      <Route path="/edit/:id" component={EditPost} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
