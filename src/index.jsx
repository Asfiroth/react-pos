/* eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./routes";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "babel-polyfill";

import jquery from "jquery";

window.$ = window.jQuery = jquery;

import "./scss/styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';

//require("./favicon.ico");

const store = configureStore();

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById("app")
);
