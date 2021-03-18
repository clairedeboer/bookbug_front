import React, { useState } from "react";
// import { useHistory } from "react-router-dom"; 

const Signup = ({ errors, onSubmit }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSignup = { name, username, password };
    onSubmit(newSignup);
    // history.push('/books')
  };

  return (
    <form
      className="ui form"
      style={{ padding: "25px" }}
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Username</label>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          name="Password"
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
        Signup
      </button>
    </form>
  );
};

export default Signup;
