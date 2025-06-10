// AdminDashboard.tsx or UserDashboard.tsx

import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Welcome Admin!</h2>
        {/* Your content */}
      </div>
    </>
  );
}
