'use client';

import { useState } from "react";
import { mockJobs } from "../../data/mockJobs.js";

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const filteredJobs = mockJobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterLocation ? job.location.includes(filterLocation) : true) &&
      (filterCategory ? job.category === filterCategory : true)
    );
  });

  const uniqueLocations = [...new Set(mockJobs.map((j) => j.location))];
  const categories = [...new Set(mockJobs.map((j) => j.category))];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">

      <h1 className="text-4xl font-bold text-center mb-6">Join Our Team</h1>

      {/* Filters */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4 mb-10">
        <input
          type="text"
          placeholder="Search job..."
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 rounded-lg bg-gray-800 border border-gray-700"
          onChange={(e) => setFilterLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        <select
          className="p-3 rounded-lg bg-gray-800 border border-gray-700"
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Job Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <a
            key={job.id}
            href={`/careers/${job.id}`}
            className="p-6 bg-gray-900 border border-gray-700 rounded-xl hover:border-blue-500 transition block"
          >
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="text-gray-400 mt-2">{job.companyName}</p>
            <p className="mt-3">📍 {job.location}</p>
            <p className="mt-1 text-green-400">💰 {job.salary}</p>

            <button className="mt-4 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700">
              Apply
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
