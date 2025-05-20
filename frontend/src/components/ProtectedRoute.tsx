import { Navigate } from "react-router-dom";
import { getToken, getUserFromToken } from "../utils/auth";

type ProtectedRouteProps = {
  allowedRoles: string[];
  children: React.ReactNode;
};

export default function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
  const token = getToken();
  const user = getUserFromToken();

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Redirect to correct dashboard based on role
    return <Navigate to={`/${user.role}-dashboard`} replace />;
  }

  return <>{children}</>;
}
