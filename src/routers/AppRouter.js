import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Homepage from "../components/Homepage";
import Dashboard from "../components/Dashboard";
import AddPostPage from "../components/AddPostPage";
import EditPostPage from "../components/EditPostPage";
import PostItemPage from "../components/PostItemPage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/create" component={AddPostPage} />
      <Route path="/post/:id" component={PostItemPage} />
      <PrivateRoute path="/edit/:id" component={EditPostPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
