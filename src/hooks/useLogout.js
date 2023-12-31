import React from "react";
import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");

    //dispatch the logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
