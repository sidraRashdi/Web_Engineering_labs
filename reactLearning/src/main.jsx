import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";

import Friend from "./Friend.jsx";
import CheckFriend from "./CheckFriend.jsx";
import Counter from "./Counter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CheckFriend />
  </React.StrictMode>
);
