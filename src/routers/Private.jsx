import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Private = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();
  if (loading) {
    return (
      <p>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </p>
    );
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Private;
