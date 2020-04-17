import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startSetPosts } from "./actions/posts";
import AppRouter from "./routers/AppRouter";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));
store.dispatch(startSetPosts()).then(() => {
  ReactDOM.render(jsx, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
