// 'use client';

// import { useEffect, useState } from "react";

// export default function AdminApplicationsPage() {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [selectedApp, setSelectedApp] = useState(null);

//   const loadApplications = async () => {
//     try {
//       const res = await fetch("https://api.venastro.in/api/applications");
//       const data = await res.json();

//       if (data.success) {
//         setApplications(data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadApplications();
//   }, []);

//   const deleteApplication = async (id) => {
//     if (!confirm("Delete this application?")) return;

//     try {
//       const res = await fetch(`https://api.venastro.in/api/applications/${id}`, {
//         method: "DELETE",
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("Application deleted");
//         loadApplications();
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Error deleting application");
//     }
//   };

//   const filtered = applications.filter((app) =>
//     app.fullName?.toLowerCase().includes(search.toLowerCase()) ||
//     app.email?.toLowerCase().includes(search.toLowerCase()) ||
//     app.jobTitle?.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Job Applications</h1>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search by name, email, or job title"
//         className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-700"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Table */}
//       {loading ? (
//         <p className="text-gray-400">Loading...</p>
//       ) : filtered.length === 0 ? (
//         <p className="text-gray-400">No applications found</p>
//       ) : (
//         <table className="w-full border border-gray-700 text-left">
//           <thead className="bg-gray-800">
//             <tr>
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">Job Title</th>
//               <th className="p-3">Phone</th>
//               <th className="p-3 text-right">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filtered.map((app) => (
//               <tr key={app._id} className="border-b border-gray-700">
//                 <td className="p-3">{app.fullName}</td>
//                 <td className="p-3">{app.email}</td>
//                 <td className="p-3">{app.jobTitle}</td>
//                 <td className="p-3">{app.phone}</td>

//                 <td className="p-3 text-right">
//                   <button
//                     className="px-3 py-1 bg-blue-600 rounded mr-2"
//                     onClick={() => setSelectedApp(app)}
//                   >
//                     View
//                   </button>

//                   <button
//                     className="px-3 py-1 bg-red-700 rounded"
//                     onClick={() => deleteApplication(app._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}


//       {/* VIEW APPLICATION MODAL */}
//       {selectedApp && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-gray-900 p-6 rounded-xl w-full max-w-lg border border-gray-700">
            
//             <h2 className="text-2xl font-bold mb-4">Application Details</h2>

//             <p><strong>Name:</strong> {selectedApp.fullName}</p>
//             <p><strong>Email:</strong> {selectedApp.email}</p>
//             <p><strong>Phone:</strong> {selectedApp.phone}</p>
//             <p><strong>Job Title:</strong> {selectedApp.jobTitle}</p>
//             <p><strong>Experience:</strong> {selectedApp.experience} years</p>
//             <p><strong>Message:</strong> {selectedApp.message}</p>

//             <p className="mt-4">
//               <strong>Resume:</strong>{" "}
//               <a
//                 href={selectedApp.resumeUrl}
//                 target="_blank"
//                 className="text-blue-400 underline"
//               >
//                 View / Download
//               </a>
//             </p>

//             <div className="flex justify-end gap-4 mt-6">
//               <button
//                 className="px-4 py-2 bg-gray-700 rounded"
//                 onClick={() => setSelectedApp(null)}
//               >
//                 Close
//               </button>
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from "react";

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedApp, setSelectedApp] = useState(null);

  const loadApplications = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.venastro.in/api/v1/apply");
      const data = await res.json();

      if (data.success) {
        // Flatten job title for easier display
        const appsWithJobTitle = data.data.map(app => ({
          ...app,
          jobTitle: app.jobId?.title || "N/A",
          resumeUrl: app.resume?.url || "",
        }));
        setApplications(appsWithJobTitle);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const deleteApplication = async (id) => {
    if (!confirm("Delete this application?")) return;

    try {
      const res = await fetch(`https://api.venastro.in/api/v1/applications/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.success) {
        alert("Application deleted");
        loadApplications();
      }
    } catch (error) {
      console.error(error);
      alert("Error deleting application");
    }
  };

  const filtered = applications.filter((app) =>
    app.fullName?.toLowerCase().includes(search.toLowerCase()) ||
    app.email?.toLowerCase().includes(search.toLowerCase()) ||
    app.jobTitle?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Job Applications</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name, email, or job title"
        className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="text-gray-400">No applications found</p>
      ) : (
        <table className="w-full border border-gray-700 text-left">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Job Title</th>
              <th className="p-3">Phone</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((app) => (
              <tr key={app._id} className="border-b border-gray-700">
                <td className="p-3">{app.fullName}</td>
                <td className="p-3">{app.email}</td>
                <td className="p-3">{app.jobTitle}</td>
                <td className="p-3">{app.phone}</td>
                <td className="p-3 text-right">
                  <button
                    className="px-3 py-1 bg-blue-600 rounded mr-2"
                    onClick={() => setSelectedApp(app)}
                  >
                    View
                  </button>
                  <button
                    className="px-3 py-1 bg-red-700 rounded"
                    onClick={() => deleteApplication(app._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* VIEW APPLICATION MODAL */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl w-full max-w-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Application Details</h2>

            <p><strong>Name:</strong> {selectedApp.fullName}</p>
            <p><strong>Email:</strong> {selectedApp.email}</p>
            <p><strong>Phone:</strong> {selectedApp.phone}</p>
            <p><strong>Job Title:</strong> {selectedApp.jobTitle}</p>
            <p><strong>Message:</strong> {selectedApp.message || "N/A"}</p>

            {selectedApp.resumeUrl && (
              <p className="mt-4">
                <strong>Resume:</strong>{" "}
                <a
                  href={selectedApp.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View / Download
                </a>
              </p>
            )}

            {selectedApp.coverLetter?.url && (
              <p className="mt-2">
                <strong>Cover Letter:</strong>{" "}
                <a
                  href={selectedApp.coverLetter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View / Download
                </a>
              </p>
            )}

            <div className="flex justify-end gap-4 mt-6">
              <button
                className="px-4 py-2 bg-gray-700 rounded"
                onClick={() => setSelectedApp(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
