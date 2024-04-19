import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useLogout } from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";

const Logout = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      {/* <div className="ml-5 flex items-center text-2xl">
        <Link to="/">Dashboard</Link>
      </div> */}
      <div className="flex justify-end">
        {!user && (
          <div className="m-2 p-2">
            <button className="m-1 bg-red-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              <Link to="/" className="m-6 py-2">
                Login
              </Link>
            </button>
            <button className="m-1 bg-red-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              <Link to="/signup" className="m-6 py-2">
                Signup
              </Link>
            </button>
          </div>
        )}
        {user && (
          <div>
            <span>{user.email}</span>
            <button
              className="m-6 bg-red-500 text-white font-semibold py-2 px-4 rounded"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logout;
