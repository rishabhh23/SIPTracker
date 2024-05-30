import React from "react";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Dashboard from "../components/Dashboard";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    // const response = await fetch("http://localhost:4000/api/user/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
<<<<<<< HEAD

=======
>>>>>>> 368a6f029a48327516af8f6b428230ad4b4a7e5d
    const response = await fetch("https://siptracker-backend-o2st.onrender.com/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
      navigate("/dashboard");
    }
  };

  return { login, isLoading, error };
};
