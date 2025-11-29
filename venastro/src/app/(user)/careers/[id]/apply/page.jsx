// 'use client';

// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";

// const JOB_API_URL = "https://api.venastro.in/api/v1/jobs";
// const APPLY_API_URL = "https://api.venastro.in/api/v1/apply";

// export default function ApplyForm() {
//   const pathname = usePathname();
//   const segments = pathname.split("/");
//   const id = segments[segments.length - 2]; // job ID

//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     experience: "",
//     coverLetter: "",
//     resume: null,
//   });

//   // Fetch job details
//   useEffect(() => {
//     if (!id) return;

//     const fetchJob = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`${JOB_API_URL}/${id}`);
//         const data = await res.json();

//         if (data.success && data.data) setJob(data.data);
//         else setError("Job not found");
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError("Failed to load job details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJob();
//   }, [id]);

//   const handleResumeUpload = (e) => {
//     setForm({ ...form, resume: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.resume) {
//       alert("Please upload your resume!");
//       return;
//     }

//     try {
//       setSubmitting(true);

//       // FormData to send file and other fields
//       const formData = new FormData();
//       formData.append("jobId", id);
//       formData.append("fullName", form.fullName);
//       formData.append("email", form.email);
//       formData.append("phone", form.phone);
//       formData.append("coverLetter", form.coverLetter || "");
//       formData.append("resume", form.resume);

//       const res = await fetch(APPLY_API_URL, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("Application submitted successfully!");
//         setForm({
//           fullName: "",
//           email: "",
//           phone: "",
//           experience: "",
//           coverLetter: "",
//           resume: null,
//         });
//         document.getElementById("resumeInput").value = "";
//       } else {
//         alert(data.message || "Failed to submit application");
//       }
//     } catch (err) {
//       console.error("Submit error:", err);
//       alert("Failed to submit application. Try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) return <p className="text-white p-10">Loading...</p>;
//   if (error) return <p className="text-red-300 p-10">{error}</p>;
//   if (!job) return <p className="text-white p-10">Job not found</p>;

//   return (
//     <div className="min-h-screen bg-black text-white px-4 py-10 mt-20">
//       <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-700 p-8 rounded-xl">

//         <h1 className="text-3xl font-bold mb-6">Apply for {job.title}</h1>

//         <form onSubmit={handleSubmit} className="grid gap-6">

//           <input
//             type="text"
//             placeholder="Full Name"
//             className="p-3 rounded-lg bg-gray-800 border border-gray-700"
//             value={form.fullName}
//             onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//             required
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             className="p-3 rounded-lg bg-gray-800 border border-gray-700"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             required
//           />

//           <input
//             type="text"
//             placeholder="Phone Number"
//             className="p-3 rounded-lg bg-gray-800 border border-gray-700"
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             required
//           />

//           <textarea
//             placeholder="Cover Letter / Why should we hire you?"
//             rows={4}
//             className="p-3 rounded-lg bg-gray-800 border border-gray-700"
//             value={form.coverLetter}
//             onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
//           />

//           {/* Resume Upload */}
//           <div className="bg-gray-800 border border-gray-700 p-4 rounded-xl">
//             <label className="block mb-2 font-medium text-gray-300">
//               Upload Resume (PDF or DOC)
//             </label>

//             <input
//               id="resumeInput"
//               type="file"
//               accept=".pdf,.doc,.docx"
//               className="w-full bg-black p-3 rounded-lg border border-gray-700"
//               onChange={handleResumeUpload}
//               required
//             />

//             {form.resume && (
//               <p className="text-green-400 mt-2 text-sm">
//                 ✔ Selected: {form.resume.name}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={submitting}
//             className="bg-blue-600 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
//           >
//             {submitting ? "Submitting..." : "Submit Application"}
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const JOB_API_URL = "https://api.venastro.in/api/v1/jobs";
const APPLY_API_URL = "https://api.venastro.in/api/v1/apply";

export default function ApplyForm() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const jobId = segments[segments.length - 2]; // Extract job ID

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetterText: "",
    resume: null,
    coverLetterFile: null,
  });

  // Fetch Job
  useEffect(() => {
    if (!jobId) return;

    const fetchJob = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${JOB_API_URL}/${jobId}`);
        const data = await res.json();

        if (data.success && data.data) setJob(data.data);
        else setError("Job not found");
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load job details");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  // Resume Upload
  const handleResumeUpload = (e) => {
    setForm({ ...form, resume: e.target.files[0] });
  };

  // Cover letter optional file upload
  const handleCoverLetterUpload = (e) => {
    setForm({ ...form, coverLetterFile: e.target.files[0] });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.resume) {
      alert("Please upload a resume!");
      return;
    }

    try {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("jobId", jobId);
      formData.append("fullName", form.fullName);
      formData.append("email", form.email);
      formData.append("phone", form.phone);

      // Resume
      formData.append("resume", form.resume);

      // Optional cover letter FILE upload
      if (form.coverLetterFile) {
        formData.append("coverLetter", form.coverLetterFile);
      }

      const res = await fetch(APPLY_API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Application submitted successfully!");

        setForm({
          fullName: "",
          email: "",
          phone: "",
          coverLetterText: "",
          resume: null,
          coverLetterFile: null,
        });

        document.getElementById("resumeInput").value = "";
        document.getElementById("coverLetterInput").value = "";
      } else {
        alert(data.message || "Failed to submit application");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Failed to submit application. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-white p-10">Loading...</p>;
  if (error) return <p className="text-red-300 p-10">{error}</p>;
  if (!job) return <p className="text-white p-10">Job not found</p>;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 mt-20">
      <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-700 p-8 rounded-xl">

        <h1 className="text-3xl font-bold mb-6">Apply for {job.title}</h1>

        <form onSubmit={handleSubmit} className="grid gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />

          {/* Resume Upload */}
          <div className="bg-gray-800 border border-gray-700 p-4 rounded-xl">
            <label className="block mb-2 font-medium text-gray-300">
              Upload Resume (PDF or DOC)
            </label>

            <input
              id="resumeInput"
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full bg-black p-3 rounded-lg border border-gray-700"
              onChange={handleResumeUpload}
              required
            />

            {form.resume && (
              <p className="text-green-400 mt-2 text-sm">
                ✔ Selected: {form.resume.name}
              </p>
            )}
          </div>

          {/* OPTIONAL COVER LETTER FILE UPLOAD */}
          <div className="bg-gray-800 border border-gray-700 p-4 rounded-xl">
            <label className="block mb-2 font-medium text-gray-300">
              Upload Cover Letter (Optional)
            </label>

            <input
              id="coverLetterInput"
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full bg-black p-3 rounded-lg border border-gray-700"
              onChange={handleCoverLetterUpload}
            />

            {form.coverLetterFile && (
              <p className="text-green-400 mt-2 text-sm">
                ✔ Selected: {form.coverLetterFile.name}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </div>
  );
}
