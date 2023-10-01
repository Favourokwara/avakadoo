import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("profile"); // Initial tab
  const router = useRouter();

  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here, e.g., clearing user session
    // Then navigate back to the index page
    router.push("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* Navigation Bar with Purple Background */}
      <nav className="bg-[#6f4bbd] w-52 p-4">
      <h1 className="text-white text-2xl font-semibold mb-6">Doctor's Orders</h1>
        <ul className="mt-20 mb-42">
          <li className="mb-16 text-right">
            <a
              onClick={() => setActiveTab("profile")}
              className={`text-white hover:text-[#2e026d] ${
                activeTab === "profile"
                  ? "bg-[#2e026d] text-white p-2 rounded"
                  : "hover:bg-[#2e026d] hover:text-white p-2 rounded"
              }`}
            >
              Profile
            </a>
          </li>
          <li className="mb-16 text-right">
            <a
              onClick={() => setActiveTab("appointments")}
              className={`text-white hover:text-[#2e026d] ${
                activeTab === "appointments"
                  ? "bg-[#2e026d] text-white p-2 rounded"
                  : "hover:bg-[#2e026d] hover:text-white p-2 rounded"
              }`}
            >
              Appointments
            </a>
          </li>
          <li className="mb-10 text-right">
            <a
              onClick={() => setActiveTab("prescriptions")}
              className={`text-white hover:text-[#2e026d] ${
                activeTab === "prescriptions"
                  ? "bg-[#2e026d] text-white p-2 rounded"
                  : "hover:bg-[#2e026d] hover:text-white p-2 rounded"
              }`}
            >
              Prescriptions
            </a>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="text-white hover:text-[#2e026d] mt-48"
        >
          Logout
        </button>
      </nav>
      <main className="flex-grow p-4">
        {activeTab === "profile" && <ProfileContent />}
        {activeTab === "appointments" && <AppointmentsContent />}
        {activeTab === "prescriptions" && <PrescriptionsContent />}
      </main>
    </div>
  );
}

function ProfileContent() {
  return <div>This is the Profile content.</div>;
}

function AppointmentsContent() {
  return <div>This is the Appointments content.</div>;
}

function PrescriptionsContent() {
  return <div>This is the Prescriptions content.</div>;
}
