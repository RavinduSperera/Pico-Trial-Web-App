// components/Sidebar.tsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    {
      path: "/admin-dashboard",
      name: "Dashboard",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      )
    },
    {
      path: "/users",
      name: "Users",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )
    },
    {
      path: "/trails",
      name: "Trails",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      )
    },
    {
      path: "/bookings",
      name: "Bookings",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      )
    },
    {
      path: "/settings",
      name: "Settings",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      )
    }
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col w-64 h-screen bg-white border-r border-gray-100 shadow-sm"
      >
        {/* Logo Section */}
        <div className="flex items-center h-20 px-6 border-b border-gray-100">
          <div className="flex items-center">
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
            <span className="ml-2 text-xl font-semibold text-gray-800">Pico Trail</span>
            <span className="ml-1 text-xs font-medium text-[#117a65] bg-[#e8f5f2] px-2 py-0.5 rounded-full">
              ADMIN
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col flex-grow p-4 overflow-y-auto">
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-[#117a65] text-white shadow-sm"
                    : "text-gray-600 hover:bg-[#e8f5f2] hover:text-[#117a65]"
                }`}
              >
                <span className={`mr-3 h-5 w-5 ${
                  location.pathname === item.path ? "text-white" : "text-[#117a65]"
                }`}>
                  {item.icon}
                </span>
                {item.name}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="sidebar-active-item"
                    className="absolute right-4 w-2 h-2 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer/User Section */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center px-3 py-2 rounded-lg bg-[#f8faf9]">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-[#117a65] flex items-center justify-center text-white text-sm font-medium">
                AD
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">Admin User</p>
              <p className="text-xs font-medium text-[#117a65]">Super Admin</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}