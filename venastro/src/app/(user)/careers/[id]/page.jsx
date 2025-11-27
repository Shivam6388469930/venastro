'use client';

import { use } from "react";
import { mockJobs } from "../../../data/mockJobs.js";

export default function JobDetails({ params }) {
  const { id } = use(params); //  ✅ FIX HERE

  const job = mockJobs.find((j) => j.id === id);

  if (!job) return <p className="text-white p-10">Job not found</p>;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">

      <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-700 p-8 rounded-xl">

        <h1 className="text-4xl font-bold">{job.title}</h1>
        <p className="text-gray-300 mt-1">{job.companyName}</p>

        <p className="mt-4">📍 Location: {job.location}</p>
        <p className="mt-2">💰 Salary: {job.salary}</p>

        <h3 className="text-2xl font-bold mt-8">Responsibilities</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
        </ul>

        <h3 className="text-2xl font-bold mt-8">Requirements</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
        </ul>

        <a
          href={`/careers/${job.id}/apply`}
          className="mt-8 block w-full text-center bg-blue-600 py-3 rounded-xl hover:bg-blue-700"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
