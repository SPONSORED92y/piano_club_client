import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./RouteSwitch";
var loginToken = '';
const setLoginToken = (token) => {
  loginToken = `bearer ` + token
  console.log(loginToken);
}
const getLoginToken = (token) => {
  console.log(loginToken);
  return loginToken;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouteSwitch loginToken={loginToken} setLoginToken={setLoginToken} getLoginToken={getLoginToken} />
  // </React.StrictMode>
);