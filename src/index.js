import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./RouteSwitch";
var loginToken = '';
var user;
const setLoginToken = (token) => {
  loginToken = `bearer ` + token
}
const getLoginToken = (token) => {
  return loginToken;
}
const setUser = (receive) => {
  user = receive
}
const getUser = () => {
  return user;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouteSwitch setLoginToken={setLoginToken} getLoginToken={getLoginToken}
    setUser={setUser} getUser={getUser}
  />
);