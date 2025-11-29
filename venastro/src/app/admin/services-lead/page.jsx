'use client';

import { useEffect, useState } from "react";

export default function AdminServiceLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const loadLeads = async () => {
    try {
      const res = await fetch("https://api.venastro.in/api/v1/email/getAll");
      const data = await res.json();

      // FIX: your API returns { status, count, emails: [...] }
      if (data.status === "success") {
        setLeads(data.emails || []);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const deleteLead = async (id) => {
    if (!confirm("Are you sure?")) return;

    try {
      await fetch(`https://api.venastro.in/api/v1/services-leads/${id}`, {
        method: "DELETE",
      });

      alert("Lead deleted!");
      loadLeads();
    } catch (error) {
      alert("Error deleting lead");
    }
  };

  const filtered = leads.filter((lead) =>
    lead.name?.toLowerCase().includes(search.toLowerCase()) ||
    lead.email?.toLowerCase().includes(search.toLowerCase()) ||
    lead.service?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">Service Leads</h1>

      <input
        type="text"
        placeholder="Search by name, service..."
        className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="text-gray-400">No leads found</p>
      ) : (
        <table className="w-full border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Service</th>
              <th className="p-3">Budget</th>
              <th className="p-3">Timeline</th>
              <th className="p-3">Message</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((lead) => (
              <tr key={lead._id} className="border-b border-gray-700">
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.email}</td>
                <td className="p-3">{lead.phone}</td>
                <td className="p-3">{lead.service}</td>
                <td className="p-3">{lead.budget}</td>
                <td className="p-3">{lead.timeline}</td>
                <td className="p-3">{lead.message?.slice(0, 20)}...</td>

                <td className="p-3 text-right">
                  <button
                    className="px-3 py-1 bg-red-700 rounded"
                    onClick={() => deleteLead(lead._id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}
