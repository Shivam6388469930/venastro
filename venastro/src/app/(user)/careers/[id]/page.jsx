'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const API_URL = "https://api.venastro.in/api/v1/jobs";

export default function JobDetails() {
  const pathname = usePathname(); // e.g. /careers/6928923b7cefb7a43eaec20d
  const id = pathname.split("/").pop(); // get the last segment as ID

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return; // safety check

    const fetchJob = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/${id}`);
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
  }, [id]);

  if (loading) return <p className="text-white p-10">Loading...</p>;
  if (error) return <p className="text-red-300 p-10">{error}</p>;
  if (!job) return <p className="text-white p-10">Job not found</p>;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 mt-20">
      <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-700 p-8 rounded-xl">
        <h1 className="text-4xl font-bold">{job.title}</h1>
        <p className="text-gray-300 mt-1">{job.companyName}</p>
        <p className="mt-4">📍 Location: {job.location}</p>
        <p className="mt-2">💰 Salary: {job.salary}</p>

        <h3 className="text-2xl font-bold mt-8">Responsibilities</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          {job.responsibilities?.map((r, i) => <li key={i}>{r}</li>)}
        </ul>

        <h3 className="text-2xl font-bold mt-8">Requirements</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          {job.requirements?.map((r, i) => <li key={i}>{r}</li>)}
        </ul>

        <a
          href={`/careers/${job._id}/apply`}
          className="mt-8 block w-full text-center bg-blue-600 py-3 rounded-xl hover:bg-blue-700"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
