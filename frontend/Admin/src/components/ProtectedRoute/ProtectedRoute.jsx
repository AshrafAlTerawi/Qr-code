//react routes
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token || token === "undefined" || token === "null" || token === "") {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default ProtectedRoute;
