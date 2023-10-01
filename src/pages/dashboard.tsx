import { useRouter } from "next/router";
import Link from "next/link";
import { SetStateAction, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile"); // Initial tab

  // Function to switch the active tab and update the route
  const switchTab = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
    router.push(`/dashboard/${tab}`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-[#3F414E] w-48 p-4">
        <h1 className="text-white text-xl font-semibold">Doctor's Orders</h1>
        <ul className="mt-8">
          <li>
            <Link href="/dashboard/profile" passHref>
              <a
                onClick={() => switchTab("profile")}
                className={`text-white hover:text-[#2e026d] ${
                  activeTab === "profile" ? "font-bold" : ""
                }`}
              >
                Profile
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/appointments" passHref>
              <a
                onClick={() => switchTab("appointments")}
                className={`text-white hover:text-[#2e026d] ${
                  activeTab === "appointments" ? "font-bold" : ""
                }`}
              >
                Appointments
              </a>
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      {/* Main Content */}
      <main className="flex-grow p-4">
        {activeTab === "profile" && <ProfileContent />}
        {activeTab === "appointments" && <AppointmentsContent />}
        {/* Add more tab content as needed */}
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
