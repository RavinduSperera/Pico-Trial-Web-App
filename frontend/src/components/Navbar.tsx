// src/components/Navbar.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  getUserFromToken,
  removeToken,
  removeUserFromLocalStorage,
} from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getUserFromToken();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    removeToken();
    removeUserFromLocalStorage();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <svg
                className="h-8 w-8 text-[#117a65]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l7-7 3 3-7 7-3-3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 2l7.586 7.586"
                />
                <circle cx="11" cy="11" r="2" />
              </svg>
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Pico Trail
              </span>
              {user.role === "admin" && (
                <span className="ml-2 text-xs font-medium text-[#117a65] bg-[#e8f5f2] px-2 py-0.5 rounded-full">
                  ADMIN
                </span>
              )}
            </div>
          </div>

          {/* Right side - User controls */}
          <div className="hidden md:ml-6 md:flex md:items-center">
            {/* Role-based navigation */}
            <div className="flex space-x-2">
              {user.role === "admin" && (
                <Link
                  to="/admin-dashboard"
                  className="text-gray-600 hover:text-[#117a65] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Admin Dashboard
                </Link>
              )}
              {user.role === "user" && (
                <Link
                  to="/user-dashboard"
                  className="text-gray-600 hover:text-[#117a65] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
              )}
              <Link
                to="/profile"
                className="text-gray-600 hover:text-[#117a65] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Profile
              </Link>
            </div>

            {/* User dropdown */}
            <div className="ml-4 flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-[#117a65] flex items-center justify-center text-white text-sm font-medium">
                  {user.email.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-700">
                  {user.email}
                </div>
                <div className="text-xs font-medium text-[#117a65]">
                  {user.role}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="ml-4 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-[#117a65] hover:bg-[#138d75] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#117a65] transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-[#117a65] hover:bg-[#e8f5f2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#117a65]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.2 }}
        className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden overflow-hidden`}
      >
        <div className="pt-2 pb-3 space-y-1">
          {user.role === "admin" && (
            <Link
              to="/admin-dashboard"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#117a65] hover:bg-[#e8f5f2] rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin Dashboard
            </Link>
          )}
          {user.role === "user" && (
            <Link
              to="/user-dashboard"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#117a65] hover:bg-[#e8f5f2] rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}
          <Link
            to="/profile"
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#117a65] hover:bg-[#e8f5f2] rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Profile
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-100">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-[#117a65] flex items-center justify-center text-white text-sm font-medium">
                {user.email.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">
                {user.email}
              </div>
              <div className="text-sm font-medium text-[#117a65]">
                {user.role}
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 text-base font-medium text-gray-600 hover:text-[#117a65] hover:bg-[#e8f5f2] rounded-md text-left transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}