import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    localStorage.setItem("user", email);
    await login(email, password);
  };

  return (
    <div>
      <div>
        <Logout />
      </div>
      <form
        className="m-5 p-5 rounded-md border-2 border-gray-300 flex flex-col items-center border-2 "
        onSubmit={handleSubmit}
      >
        <h3 className="text-5xl m-6">Login</h3>
        <div className="">
          <label>Email:</label>
          <input
            className="border-1 p-1 border-neutral-600 ml-7 rounded-md"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email..."
            value={email}
          ></input>
        </div>
        <div className="">
          <label>Password:</label>
          <input
            className="border-1 p-1 border-neutral-600 m-5 rounded-md"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password..."
            value={password}
          ></input>
        </div>
        <button
          disabled={isLoading}
          className="m-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Login
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
