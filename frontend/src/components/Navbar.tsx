import { Link, useNavigate } from "react-router-dom";
import {
  getUserFromToken,
  removeToken,
  removeUserFromLocalStorage,
} from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getUserFromToken();

  const handleLogout = () => {
    removeToken();
    removeUserFromLocalStorage();
    navigate("/login");
  };

  if (!user) return null; // No navbar if not logged in

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>

      <div className="flex items-center gap-4">
        {/* Show role-based links */}
        {user.role === "admin" && (
          <>
            <Link to="/admin-dashboard" className="hover:text-blue-300">
              Admin Dashboard
            </Link>
          </>
        )}

        {user.role === "user" && (
          <>
            <Link to="/user-dashboard" className="hover:text-blue-300">
              User Dashboard
            </Link>
          </>
        )}

        <span className="text-sm italic">({user.role})</span>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
