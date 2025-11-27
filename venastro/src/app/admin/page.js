export default function AdminHomePage() {
  return (
    <div>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* TOP STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {/* Service Leads */}
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-300">Service Leads</h2>
          <p className="text-4xl font-bold text-blue-400 mt-3">128</p>
          <p className="text-gray-500 text-sm mt-2">New this week: 12</p>
        </div>

        {/* Contact Leads */}
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-300">Contact Leads</h2>
          <p className="text-4xl font-bold text-green-400 mt-3">74</p>
          <p className="text-gray-500 text-sm mt-2">New this week: 5</p>
        </div>

        {/* Job Applications */}
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-300">Job Applications</h2>
          <p className="text-4xl font-bold text-yellow-400 mt-3">32</p>
          <p className="text-gray-500 text-sm mt-2">New this week: 3</p>
        </div>

      </div>

      {/* MID SECTION — OVERVIEW */}
      <div className="grid lg:grid-cols-2 gap-6 mb-10">

        {/* Recent Leads */}
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Recent Leads</h2>

          <ul className="space-y-4">
            <li className="p-4 bg-gray-900 rounded-lg border border-gray-700 flex justify-between">
              <span className="text-gray-300">Rohit Sharma — Web Development</span>
              <span className="text-blue-400 text-sm">2 hours ago</span>
            </li>

            <li className="p-4 bg-gray-900 rounded-lg border border-gray-700 flex justify-between">
              <span className="text-gray-300">Aman Singh — Manpower Staffing</span>
              <span className="text-blue-400 text-sm">5 hours ago</span>
            </li>

            <li className="p-4 bg-gray-900 rounded-lg border border-gray-700 flex justify-between">
              <span className="text-gray-300">Priya Verma — Digital Marketing</span>
              <span className="text-blue-400 text-sm">1 day ago</span>
            </li>
          </ul>
        </div>

        {/* Recent Job Applications */}
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Recent Applications</h2>

          <ul className="space-y-4">
            <li className="p-4 bg-gray-900 rounded-lg border border-gray-700 flex justify-between">
              <span className="text-gray-300">Deepak Kumar — Frontend Developer</span>
              <span className="text-yellow-400 text-sm">Today</span>
            </li>

            <li className="p-4 bg-gray-900 rounded-lg border border-gray-700 flex justify-between">
              <span className="text-gray-300">Sakshi — HR Executive</span>
              <span className="text-yellow-400 text-sm">1 day ago</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ACTIVITY LOG */}
      <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Activity Log</h2>

        <ul className="space-y-3">

          <li className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300">New service lead submitted by Rahul.</span>
          </li>

          <li className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-gray-300">Contact form received from Anjali.</span>
          </li>

          <li className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span className="text-gray-300">Job application submitted by Manish.</span>
          </li>

        </ul>
      </div>
    </div>
  );
}
