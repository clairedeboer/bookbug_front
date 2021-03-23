import React, { useState } from "react";

const Login = ({ errors, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCurrentUser = { username, password };
    onSubmit(newCurrentUser);
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
      {errors.map((error) => (
        <p style={{ color: "red" }} key={error}>
          {error}
        </p>
      ))}
      <button className="ui button" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
