import React, { useEffect } from "react";
import { replace, useLocation, useNavigate } from "react-router-dom";

export default function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      if (location.pathname === "/login" || location.pathname === "/register") {
        navigate("/", { replace: false });
      }
    }
  }, [location, navigate, setIsAuthenticated]);
  return null;
}
