import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/router";
import store from "./store/index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router></Router>
    </Provider>
  </React.StrictMode>
);
