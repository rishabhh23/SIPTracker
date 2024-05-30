import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
// import { Link, useNavigate } from "react-router-dom";
// import Login from "./Login";
import Logout from "./Logout";
// import Dashboard from "./Dashboard";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    // localStorage.setItem("user", email);
    await signup(email, password);
  };

  return (
    <div className="h-screen bg-gray-900 text-white">
      <div>
        <Logout />
      </div>
      <form
        className="m-5 p-5 rounded-md border-2 border-blue-300npm  flex flex-col items-center border-2"
        onSubmit={handleSubmit}
      >
        <h3 className="text-5xl m-6">Signup</h3>
        <div className="">
          <label>Email:</label>
          <input
            className="border-1 p-1 text-black border-blue-600 ml-7 rounded-md"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email..."
            value={email}
          ></input>
        </div>
        <div className="">
          <label>Password:</label>
          <input
            className="border-1 p-1 text-black border-blue-600 m-5 rounded-md"
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
          Sign Up
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
