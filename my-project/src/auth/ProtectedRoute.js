import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./Context";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem("access_token");
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  
  if (token) {
    if (auth?.role === "user") {
      return <Navigate to="/User" state={{ from: location }} replace />;
    } else if (auth?.role === "admin") {
      return <Outlet />;
    }
  }

  return <Navigate to="/Login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
