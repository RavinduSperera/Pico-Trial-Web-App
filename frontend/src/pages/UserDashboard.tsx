import Navbar from "../components/Navbar";

export default function UserDashboard() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Welcome User!</h2>
        {/* You can add user-specific components or stats here */}
      </div>
    </>
  );
}
