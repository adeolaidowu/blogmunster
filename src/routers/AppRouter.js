import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";
import Dashboard from "../components/Dashboard";
import AddPostPage from "../components/AddPostPage";
import EditPostPage from "../components/EditPostPage";
import PostItemPage from "../components/PostItemPage";
import NotFoundPage from "../components/NotFoundPage";
import moment from "moment";

// store.dispatch(
//   addPost({
//     title: "my test post",
//     content: "blah blah blah",
//     createdAt: moment().valueOf(),
//   })
// );
// store.dispatch(
//   addPost({
//     title: "This is post two",
//     content:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione, laborum cum architecto laudantium similique mollitia voluptas sequi maxime ducimus ipsum hic quidem commodi nemo nobis alias cumque. Delectus, aperiam.",
//     createdAt: moment().subtract(2, "days").valueOf(),
//   })
// );
// store.dispatch(
//   addPost({
//     title: "This is post three",
//     content:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione, laborum cum architecto laudantium similique mollitia voluptas sequi maxime ducimus ipsum hic quidem commodi nemo nobis alias cumque. Delectus, aperiam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione, laborum cum architecto laudantium similique mollitia voluptas sequi maxime ducimus ipsum hic quidem commodi nemo nobis alias cumque. Delectus, aperiam.",
//     createdAt: moment().add(4, "days").valueOf(),
//   })
// );
// console.log(store.getState());

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/create" component={AddPostPage} />
      <Route path="/post/:id" component={PostItemPage} />
      <Route path="/edit/:id" component={EditPostPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
