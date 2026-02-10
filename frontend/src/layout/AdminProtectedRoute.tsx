import React from "react";
import { Navigate } from "react-router-dom";

interface UserProtectedRouteProps {
  children: React.ReactNode;
}

const UserProtectedRoute: React.FC<UserProtectedRouteProps> = ({
  children,
}) => {
  const adminToken = localStorage.getItem("adminToken");
  const admin = localStorage.getItem("admin");

  // ❌ Not logged in → redirect to user sign in
  if (!adminToken || !admin) {
    return <Navigate to="/adminSignin" replace />;
  }

  // ✅ Authorized → render page
  return <>{children}</>;
};

export default UserProtectedRoute;
