import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useLogout } from "../hooks/useLogout";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login, error, isLoading } = useLogin();
  const { logout } = useLogout();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    localStorage.setItem("user", email);
    await login(email, password);
  };

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <div className="text-right">
        <button
          className="m-6 bg-red-500  text-white font-semibold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Logout
        </button>
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
