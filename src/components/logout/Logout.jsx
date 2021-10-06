import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/reducers/userSlice";
import "./logout.css";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="logout">
      <h2>
        Welcome <span className="user__name">{user.name}</span>
      </h2>
      <button className="logout__button" onClick={onClickHandler}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
