'use client';

import { useState, useEffect } from "react";

const API_URL = "https://api.venastro.in/api/v1/jobs";

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          const activeJobs = data.data.filter(job => job.status === "active");
          setJobs(activeJobs);
          setFilteredJobs(activeJobs);
        } else {
          setJobs([]);
          setFilteredJobs([]);
        }
      } catch (err) {
        console.error("Failed to load jobs:", err);
        setError("Failed to load job listings. Please try again later.");
        setJobs([]);
        setFilteredJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs whenever filters change
  useEffect(() => {
    let filtered = jobs;

    if (search) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.companyName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterLocation) {
      filtered = filtered.filter(job => job.location === filterLocation);
    }

    if (filterCategory) {
      filtered = filtered.filter(job => job.category === filterCategory);
    }

    setFilteredJobs(filtered);
  }, [search, filterLocation, filterCategory, jobs]);

  // Extract unique locations and categories
  const uniqueLocations = [...new Set(jobs.map(j => j.location).filter(Boolean))];
  const uniqueCategories = [...new Set(jobs.map(j => j.category).filter(Boolean))];

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Hero Title */}
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Join Our Team
        </h1>
        <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          We're building the future. Come build it with us.
        </p>

        {/* Filters */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <input
            type="text"
            placeholder="Search jobs or company..."
            className="p-4 rounded-xl bg-gray-900 border border-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="p-4 rounded-xl bg-gray-900 border border-gray-800 focus:border-blue-500 focus:outline-none transition"
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-4 rounded-xl bg-gray-900 border border-gray-800 focus:border-blue-500 focus:outline-none transition"
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Job Listings */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">No jobs found</div>
            <p className="text-gray-500 text-xl">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredJobs.map((job) => (
              <a
                key={job._id}
                href={`/careers/${job._id}`}
                className="group block p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                  {job.title}
                </h2>

                <p className="text-gray-400 mt-2 text-lg">{job.companyName}</p>

                <div className="mt-6 space-y-3">
                  {job.location && (
                    <p className="text-gray-300 flex items-center gap-2">
                      Location: {job.location}
                    </p>
                  )}
                  {job.category && (
                    <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                      {job.category}
                    </p>
                  )}
                  {job.salary && (
                    <p className="text-green-400 font-semibold">{job.salary}</p>
                  )}
                </div>

                <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all">
                  View & Apply
                </button>
              </a>
            ))}
          </div>
        )}

        {/* No jobs at all */}
        {jobs.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">No open positions</div>
            <p className="text-gray-400 text-xl">Check back soon — we're always growing!</p>
          </div>
        )}
      </div>
    </div>
  );
}