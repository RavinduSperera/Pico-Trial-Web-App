import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function UserDashboard() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Main content area with sidebar */}
      <div className="flex flex-1 overflow-hidden pt-16"> {/* pt-16 to account for navbar height */}
        {/* Sidebar - hidden on mobile, shown on desktop */}
        <Sidebar />
        
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">User Dashboard</h1>
              <p className="text-gray-600">
                Welcome to your dashboard. You can view and update your profile here.
              </p>
              
              {/* User-specific content cards */}
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Profile Card */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Your Profile
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">Complete</div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recent Activity Card */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Recent Activity
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">3 items</div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        View Activity
                      </button>
                    </div>
                  </div>
                </div>

                {/* Notifications Card */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Notifications
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">2 new</div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        View Notifications
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Content Section */}
              <div className="mt-8">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Your Recent Content</h3>
                <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    <li>
                      <div className="px-4 py-4 flex items-center sm:px-6">
                        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                          <div className="truncate">
                            <div className="flex text-sm">
                              <p className="font-medium text-blue-600 truncate">Profile Updated</p>
                              <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                                - 15 minutes ago
                              </p>
                            </div>
                            <div className="mt-2 flex">
                              <div className="flex items-center text-sm text-gray-500">
                                <p>You updated your profile information</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="px-4 py-4 flex items-center sm:px-6">
                        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                          <div className="truncate">
                            <div className="flex text-sm">
                              <p className="font-medium text-blue-600 truncate">New Message</p>
                              <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                                - 2 hours ago
                              </p>
                            </div>
                            <div className="mt-2 flex">
                              <div className="flex items-center text-sm text-gray-500">
                                <p>You received a new message from support</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}