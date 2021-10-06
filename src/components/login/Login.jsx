import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/userSlice";
import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name,
        email,
        password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Login Here 👍</h1>
        <input
          type="name"
          placeholder="Plz write your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Plz write your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Plz write your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Login;
