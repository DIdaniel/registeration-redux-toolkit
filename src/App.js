// https://www.youtube.com/watch?v=mMzhWXr9ass

import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/reducers/userSlice";

function App() {
  const user = useSelector(selectUser);

  return <div>{user ? <Logout /> : <Login />}</div>;
}

export default App;
