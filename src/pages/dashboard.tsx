import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-[#3F414E] w-48 p-4">
        <h1 className="text-white text-xl font-semibold">Doctor's Orders</h1>
        <ul className="mt-8">
          <li>
            <Link href="/dashboard/profile text-white hover:text-[#2e026d]" passHref>
              <a className="text-white hover:text-[#2e026d]">Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/appointments" passHref>
              <a className="text-white hover:text-[#2e026d]">Appointments</a>
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      {/* Main Content */}
      <main className="flex-grow p-4">
        {/* Your dashboard content goes here */}
      </main>
    </div>
  );
}
