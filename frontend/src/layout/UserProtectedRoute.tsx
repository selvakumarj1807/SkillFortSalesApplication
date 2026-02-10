import React from "react";
import { Navigate } from "react-router-dom";

interface UserProtectedRouteProps {
  children: React.ReactNode;
}

const UserProtectedRoute: React.FC<UserProtectedRouteProps> = ({
  children,
}) => {
  const userToken = localStorage.getItem("userToken");
  const user = localStorage.getItem("user");

  // ❌ Not logged in → redirect to user sign in
  if (!userToken || !user) {
    return <Navigate to="/userSignin" replace />;
  }

  // ✅ Authorized → render page
  return <>{children}</>;
};

export default UserProtectedRoute;
