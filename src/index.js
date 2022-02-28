import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./index.css";
import App from "./App.js";
import store from "./redux/store";
import { Provider } from "react-redux";

const el = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(el, document.getElementById("root"));
