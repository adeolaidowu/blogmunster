import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startSetPosts, startSetUserPosts } from "./actions/posts";
import { login, logout } from "./actions/auth";
import AppRouter, { history } from "./routers/AppRouter";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (hasRendered === false) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetUserPosts()).then(() => {
      console.log("signed in");
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    store.dispatch(startSetPosts()).then(() => {
      renderApp();
      //history.push("/");
      console.log("signed out");
    });
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
