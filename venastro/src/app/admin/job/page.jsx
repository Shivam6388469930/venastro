'use client';

import { useEffect, useState } from "react";

function JobModal({ title, formData, setFormData, handleSubmit, close, loading = false }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-2xl border border-gray-700 max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={close}
            className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-gray-800 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Job Title *
              </label>
              <input 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-lg text-white placeholder-gray-400" 
                placeholder="e.g. Senior Frontend Developer"
                name="title" 
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Company Name *
              </label>
              <input 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-lg text-white placeholder-gray-400" 
                placeholder="e.g. Tech Corp Inc"
                name="companyName" 
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Location
            </label>
            <input 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-lg text-white placeholder-gray-400" 
              placeholder="e.g. Remote, New York, NY"
              name="location" 
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Description *
            </label>
            <textarea 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-lg text-white placeholder-gray-400 resize-vertical" 
              rows="4" 
              placeholder="Describe the job position..."
              name="description" 
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Responsibilities (one per line)
              </label>
              <textarea 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-lg text-white placeholder-gray-400 resize-vertical" 
                rows="5" 
                placeholder="Develop new features&#10;Code review&#10;Team collaboration"
                name="responsibilities" 
                value={formData.responsibilities}
                onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Requirements (one per line)
              </label>
              <textarea 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-lg text-white placeholder-gray-400 resize-vertical" 
                rows="5" 
                placeholder="5+ years experience&#10;React knowledge&#10;TypeScript skills"
                name="requirements" 
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Salary
              </label>
              <input 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-lg text-white placeholder-gray-400" 
                placeholder="e.g. $90,000 - $120,000"
                name="salary" 
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Status *
              </label>
              <select 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-lg text-white appearance-none cursor-pointer"
                name="status" 
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                required
              >
                <option value="active" className="bg-gray-800">Active</option>
                <option value="closed" className="bg-gray-800">Closed</option>
                <option value="draft" className="bg-gray-800">Draft</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 justify-end pt-6 border-t border-gray-700">
            <button 
              type="button" 
              onClick={close}
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:border-gray-500 hover:shadow-lg font-medium"
              disabled={loading}
            >
              Cancel
            </button>

            <button 
              type="submit" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading && (
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m8-8h-4M6 12H2" />
                </svg>
              )}
              {loading ? "Saving..." : "Save Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/**
 * JobsAdminPage
 */
// export default function JobsAdminPage() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [actionLoading, setActionLoading] = useState(false);

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);

//   const [selectedJob, setSelectedJob] = useState(null);

//   // NEW JOB DATA
//   const [formData, setFormData] = useState({
//     title: "",
//     companyName: "",
//     description: "",
//     location: "",
//     responsibilities: "",
//     requirements: "",
//     salary: "",
//     status: "active"
//   });

//   // LOAD JOBS
//   const loadJobs = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("https://api.venastro.in/api/v1/jobs");
//       const data = await res.json();

//       if (data.success) {
//         setJobs(data.data);
//       } else {
//         setJobs([]);
//       }
//     } catch (err) {
//       console.log(err);
//       setJobs([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadJobs();
//   }, []);

//   // CREATE JOB
//   const createJob = async (e) => {
//     e.preventDefault();
//     setActionLoading(true);

//     const payload = {
//       ...formData,
//       responsibilities: formData.responsibilities ? formData.responsibilities.split("\n").filter(line => line.trim()) : [],
//       requirements: formData.requirements ? formData.requirements.split("\n").filter(line => line.trim()) : [],
//     };

//     try {
//       const res = await fetch("https://api.venastro.in/api/v1/jobs", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setShowAddModal(false);
//         loadJobs();
//         resetForm();
//       } else {
//         alert(data.message || "Failed to add job");
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Server error");
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   // RESET FORM
//   const resetForm = () => {
//     setFormData({
//       title: "",
//       companyName: "",
//       description: "",
//       location: "",
//       responsibilities: "",
//       requirements: "",
//       salary: "",
//       status: "active"
//     });
//     setSelectedJob(null);
//   };

//   // OPEN EDIT MODAL
//   const openEditModal = (job) => {
//     setSelectedJob(job);
//     setFormData({
//       title: job.title || "",
//       companyName: job.companyName || "",
//       description: job.description || "",
//       location: job.location || "",
//       responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities.join("\n") : (job.responsibilities || ""),
//       requirements: Array.isArray(job.requirements) ? job.requirements.join("\n") : (job.requirements || ""),
//       salary: job.salary || "",
//       status: job.status || "active",
//     });

//     setShowEditModal(true);
//   };

//   // UPDATE JOB
//   const updateJob = async (e) => {
//     e.preventDefault();
//     setActionLoading(true);

//     if (!selectedJob || !selectedJob._id) {
//       alert("No job selected for update");
//       return;
//     }

//     const payload = {
//       ...formData,
//       responsibilities: formData.responsibilities ? formData.responsibilities.split("\n").filter(line => line.trim()) : [],
//       requirements: formData.requirements ? formData.requirements.split("\n").filter(line => line.trim()) : [],
//     };

//     try {
//       const res = await fetch(`https://api.venastro.in/api/jobs/${selectedJob._id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setShowEditModal(false);
//         loadJobs();
//         resetForm();
//       } else {
//         alert(data.message || "Failed to update job");
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Server error");
//     } finally {
//       setActionLoading(false);
//     }
//   };

//   // DELETE JOB
//   const deleteJob = async (id) => {
//     if (!confirm("Are you sure you want to delete this job? This action cannot be undone.")) return;

//     try {
//       const res = await fetch(`https://api.venastro.in/api/jobs/${id}`, {
//         method: "DELETE",
//       });

//       const data = await res.json();

//       if (data.success) {
//         loadJobs();
//       } else {
//         alert(data.message || "Failed to delete job");
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Server error");
//     }
//   };

//   const getStatusBadge = (status) => {
//     const statusColors = {
//       active: "bg-green-500/20 text-green-400 border-green-500/30",
//       closed: "bg-red-500/20 text-red-400 border-red-500/30",
//       draft: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
//     };

//     return (
//       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[status] || statusColors.draft}`}>
//         {status.charAt(0).toUpperCase() + status.slice(1)}
//       </span>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//           <div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//               Manage Jobs
//             </h1>
//             <p className="text-gray-400 mt-2">Create, edit, and manage job postings</p>
//           </div>
//           <button
//             className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
//             onClick={() => {
//               resetForm();
//               setShowAddModal(true);
//             }}
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//             </svg>
//             Add Job
//           </button>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-blue-500/20 rounded-lg">
//                 <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">{jobs.length}</p>
//                 <p className="text-gray-400 text-sm">Total Jobs</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-green-500/20 rounded-lg">
//                 <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">{jobs.filter(job => job.status === 'active').length}</p>
//                 <p className="text-gray-400 text-sm">Active Jobs</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-yellow-500/20 rounded-lg">
//                 <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">{jobs.filter(job => job.status === 'draft').length}</p>
//                 <p className="text-gray-400 text-sm">Draft Jobs</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Jobs Table */}
//         <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
//           {loading ? (
//             <div className="flex justify-center items-center p-12">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
//             </div>
//           ) : jobs.length === 0 ? (
//             <div className="text-center p-12">
//               <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               <h3 className="text-lg font-medium text-white mb-2">No jobs found</h3>
//               <p className="text-gray-400 mb-4">Get started by creating your first job posting</p>
//               <button
//                 className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                 onClick={() => setShowAddModal(true)}
//               >
//                 Create Job
//               </button>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-800/50">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Job Title</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Company</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Location</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
//                     <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-800">
//                   {jobs.map((job) => (
//                     <tr key={job._id} className="hover:bg-gray-800/30 transition-colors">
//                       <td className="px-6 py-4">
//                         <div>
//                           <div className="font-medium text-white">{job.title}</div>
//                           {job.salary && (
//                             <div className="text-sm text-gray-400">{job.salary}</div>
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-gray-300">{job.companyName}</td>
//                       <td className="px-6 py-4 text-gray-300">{job.location || "—"}</td>
//                       <td className="px-6 py-4">{getStatusBadge(job.status)}</td>
//                       <td className="px-6 py-4">
//                         <div className="flex justify-end gap-2">
//                           <button
//                             className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors"
//                             onClick={() => openEditModal(job)}
//                             title="Edit job"
//                           >
//                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                             </svg>
//                           </button>
//                           <button
//                             className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
//                             onClick={() => deleteJob(job._id)}
//                             title="Delete job"
//                           >
//                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                             </svg>
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ADD JOB MODAL */}
//       {showAddModal && (
//         <JobModal
//           title="Add New Job"
//           formData={formData}
//           setFormData={setFormData}
//           handleSubmit={createJob}
//           close={() => setShowAddModal(false)}
//           loading={actionLoading}
//         />
//       )}

//       {/* EDIT JOB MODAL */}
//       {showEditModal && (
//         <JobModal
//           title="Edit Job"
//           formData={formData}
//           setFormData={setFormData}
//           handleSubmit={updateJob}
//           close={() => setShowEditModal(false)}
//           loading={actionLoading}
//         />
//       )}
//     </div>
//   );
// }



// API Base URL - Change only if deploying
const API_BASE = "https://api.venastro.in/api/v1/jobs";

export default function JobsAdminPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const initialFormState = {
    title: "",
    companyName: "",
    description: "",
    location: "",
    responsibilities: "",
    requirements: "",
    salary: "",
    status: "active",
  };

  const [formData, setFormData] = useState(initialFormState);

  // Load all jobs
  const loadJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_BASE);
      const data = await res.json();

      if (data.success) {
        setJobs(data.data || []);
      } else {
        setJobs([]);
      }
    } catch (err) {
      console.error("Failed to load jobs:", err);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  // Reset form and selected job
  const resetForm = () => {
    setFormData(initialFormState);
    setSelectedJob(null);
  };

  // Open edit modal with job data
  const openEditModal = (job) => {
    setSelectedJob(job);
    setFormData({
      title: job.title || "",
      companyName: job.companyName || "",
      description: job.description || "",
      location: job.location || "",
      responsibilities: Array.isArray(job.responsibilities)
        ? job.responsibilities.join("\n")
        : job.responsibilities || "",
      requirements: Array.isArray(job.requirements)
        ? job.requirements.join("\n")
        : job.requirements || "",
      salary: job.salary || "",
      status: job.status || "active",
    });
    setShowEditModal(true);
  };

  // Create new job
  const createJob = async (e) => {
    e.preventDefault();
    setActionLoading(true);

    const payload = {
      ...formData,
      responsibilities: formData.responsibilities
        ? formData.responsibilities.split("\n").map(l => l.trim()).filter(Boolean)
        : [],
      requirements: formData.requirements
        ? formData.requirements.split("\n").map(l => l.trim()).filter(Boolean)
        : [],
    };

    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setShowAddModal(false);
        resetForm();
        loadJobs();
      } else {
        alert(data.message || "Failed to create job");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  // Update existing job
  const updateJob = async (e) => {
    e.preventDefault();
    if (!selectedJob?._id) return alert("No job selected");

    setActionLoading(true);

    const payload = {
      ...formData,
      responsibilities: formData.responsibilities
        ? formData.responsibilities.split("\n").map(l => l.trim()).filter(Boolean)
        : [],
      requirements: formData.requirements
        ? formData.requirements.split("\n").map(l => l.trim()).filter(Boolean)
        : [],
    };

    try {
      const res = await fetch(`${API_BASE}/${selectedJob._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setShowEditModal(false);
        resetForm();
        loadJobs();
      } else {
        alert(data.message || "Failed to update job");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  // Delete job
  const deleteJob = async (id) => {
    if (!confirm("Delete this job? This cannot be undone.")) return;

    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        loadJobs();
      } else {
        alert(data.message || "Failed to delete job");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  // Status badge
  const getStatusBadge = (status) => {
    const styles = {
      active: "bg-green-500/20 text-green-400 border-green-500/30",
      closed: "bg-red-500/20 text-red-400 border-red-500/30",
      draft:  "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    };

    const color = styles[status] || styles.draft;

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${color}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Manage Jobs
            </h1>
            <p className="text-gray-400 mt-2">Create, edit, and manage job postings</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowAddModal(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Job
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold">{jobs.length}</p>
                <p className="text-gray-400 text-sm">Total Jobs</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold">{jobs.filter(j => j.status === "active").length}</p>
                <p className="text-gray-400 text-sm">Active Jobs</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold">{jobs.filter(j => j.status === "draft").length}</p>
                <p className="text-gray-400 text-sm">Draft Jobs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs Table */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center p-16">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center p-12">
              <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-medium text-white mb-2">No jobs found</h3>
              <p className="text-gray-400 mb-6">Start by creating your first job posting</p>
              <button
                onClick={() => {
                  resetForm();
                  setShowAddModal(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
              >
                Create First Job
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Job Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {jobs.map((job) => (
                    <tr key={job._id} className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-white">{job.title}</div>
                          {job.salary && (
                            <div className="text-sm text-gray-400 mt-1">{job.salary}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{job.companyName}</td>
                      <td className="px-6 py-4 text-gray-300">{job.location || "—"}</td>
                      <td className="px-6 py-4">{getStatusBadge(job.status)}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-3">
                          <button
                            onClick={() => openEditModal(job)}
                            className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-all"
                            title="Edit"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => deleteJob(job._id)}
                            className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                            title="Delete"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2.142 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add Job Modal */}
      {showAddModal && (
        <JobModal
          title="Add New Job"
          formData={formData}
          setFormData={setFormData}
          handleSubmit={createJob}
          close={() => setShowAddModal(false)}
          loading={actionLoading}
        />
      )}

      {/* Edit Job Modal */}
      {showEditModal && (
        <JobModal
          title="Edit Job"
          formData={formData}
          setFormData={setFormData}
          handleSubmit={updateJob}
          close={() => {
            setShowEditModal(false);
            resetForm();
          }}
          loading={actionLoading}
        />
      )}
    </div>
  );
}