import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import { addPost } from "../actions/posts";
import Homepage from "../components/Homepage";
import Dashboard from "../components/Dashboard";
import AddPost from "../components/AddPost";
import EditPost from "../components/EditPost";
import PostItemPage from "../components/PostItemPage";
import NotFoundPage from "../components/NotFoundPage";

const store = configureStore();
store.dispatch(addPost({ title: "my test post", content: "blah blah blah" }));
store.dispatch(
  addPost({
    title: "This is post two",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione, laborum cum architecto laudantium similique mollitia voluptas sequi maxime ducimus ipsum hic quidem commodi nemo nobis alias cumque. Delectus, aperiam.",
  })
);
store.dispatch(
  addPost({
    title: "This is post three",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione, laborum cum architecto laudantium similique mollitia voluptas sequi maxime ducimus ipsum hic quidem commodi nemo nobis alias cumque. Delectus, aperiam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione, laborum cum architecto laudantium similique mollitia voluptas sequi maxime ducimus ipsum hic quidem commodi nemo nobis alias cumque. Delectus, aperiam.",
  })
);
console.log(store.getState());
const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={AddPost} />
        <Route path="/post/:id" component={PostItemPage} />
        <Route path="/edit/:id" component={EditPost} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default AppRouter;
