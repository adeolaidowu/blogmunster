import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
