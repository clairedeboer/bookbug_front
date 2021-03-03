import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCurrentUser = { username, password };
    onSubmit(newCurrentUser);
    history.push("/books");
  };

  return (
    <form
      className="ui form"
      style={{ padding: "25px" }}
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="ui button" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
