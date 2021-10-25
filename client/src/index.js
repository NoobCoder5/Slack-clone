import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducer from "./Allreducer";
import { Provider } from "react-redux";

const store = createStore(
  allReducer,
  applyMiddleware(thunk)
);
ReactDOM.render(
  <Provider store={store}>

    <App /> 
  </Provider>,

  document.getElementById("root")
);
