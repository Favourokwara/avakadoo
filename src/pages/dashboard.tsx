import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Patient {
  id: number,
  name: string
}

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
  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more patients as needed
  ]);
  const [goals, setGoals] = useState<Array<string>>([]);
  const [newGoal, setNewGoal] = useState<string>("");
  const [showGoalModal, setShowGoalModal] = useState<boolean>(false);

  const handleGoalSubmit = () => {
    console.log("");
    
  }

  // Function to add a new goal
  const addGoal = (goalDescription: string) => {
    // Make sure the goal description is not empty
    if (goalDescription.trim() === '') {
      return;
    }

    // Create a new array of goals by adding the new goal
    const updatedGoals = [...goals, goalDescription];

    // Update the goals state with the new array
    setGoals(updatedGoals);

    // Close the goal creation form
    setShowGoalModal(false);
  };

  // Function to remove a goal by index
  const removeGoal = (goalIndex: number) => {
    // Create a new array of goals by excluding the goal at the specified index
    const updatedGoals = goals.filter((_, index) => index !== goalIndex);

    // Update the goals state with the new array
    setGoals(updatedGoals);
  };
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
  };
    return (
<div>
  <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
    <h1 className="text-2xl font-bold">Welcome, Dr. Smith</h1>
    <button
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      onClick={() => alert('Logout')}
    >
      Logout
    </button>
  </header>

  <section className="p-4">
    <h2 className="text-xl font-semibold">Patients</h2>
    <ul className="mt-2">
      {patients.map((patient) => (
        <li
          key={patient.id}
          className="cursor-pointer hover:text-blue-500"
          onClick={() => handlePatientClick(patient)}
        >
          {patient.name}
        </li>
      ))}
    </ul>
  </section>

  <section className="p-4">
    <h2 className="text-xl font-semibold">Patient Details</h2>
    {selectedPatient && <h3 className="text-lg mt-2">{selectedPatient.name}</h3>}
  </section>

  <section className="p-4">
    <h2 className="text-xl font-semibold">Goals</h2>
    {/* Display goals for selected patient */}
  </section>

  <section className="p-4">
    <h2 className="text-xl font-semibold">Medications</h2>
    {/* Display medications for selected patient */}
  </section>

  {/* New Goal Form */}
  <section className="p-4">
    <h2 className="text-xl font-semibold">Create New Goal</h2>
    <form onSubmit={handleGoalSubmit} className="mt-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newGoal">
          Goal Description
        </label>
        <input
          className="border rounded py-2 px-3 w-full"
          type="text"
          id="newGoal"
          name="newGoal"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Create Goal
      </button>
    </form>
  </section>
</div>

    );
}

function AppointmentsContent() {
  return <div>This is the Appointments content.</div>;
}

function PrescriptionsContent() {
  return <div>This is the Prescriptions content.</div>;
}
