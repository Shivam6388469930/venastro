'use client';

import { use } from "react";
import { useState } from "react";
import { mockJobs } from "../../../../data/mockJobs.js";

export default function ApplyForm({ params }) {
  const { id } = use(params);

  const job = mockJobs.find((j) => j.id === id);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
    resume: null,
  });

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, resume: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.resume) {
      alert("Please upload your resume!");
      return;
    }

    alert("Your application has been submitted!");

    setForm({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      message: "",
      resume: null,
    });

    document.getElementById("resumeInput").value = "";
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
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

          <input
            type="number"
            placeholder="Experience (years)"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700"
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
            required
          />

          <textarea
            placeholder="Why should we hire you?"
            rows={4}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
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

          <button className="bg-blue-600 py-3 rounded-lg hover:bg-blue-700">
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
}
