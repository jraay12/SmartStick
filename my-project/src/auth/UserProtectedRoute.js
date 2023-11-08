import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./Context";

const UserProtectedRoute = () => {
  const token = sessionStorage.getItem("access_token");
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  
  if (token) {
    if (auth?.role === "admin") {
      return <Navigate to="/Admin" state={{ from: location }} replace />;
    } else if (auth?.role === "user") {
      return <Outlet />;
    }
  }

  return <Navigate to="/Login" state={{ from: location }} replace />;
};

export default UserProtectedRoute;
