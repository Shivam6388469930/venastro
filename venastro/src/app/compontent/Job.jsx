function JobModal({ title, formData, setFormData, handleSubmit, close }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-xl border border-gray-700">

        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input className="input" placeholder="Job Title"
            name="title" value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />

          <input className="input" placeholder="Company Name"
            name="companyName" value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />

          <textarea className="input" rows="3" placeholder="Description"
            name="description" value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />

          <input className="input" placeholder="Location"
            name="location" value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />

          <textarea className="input" rows="3" placeholder="Responsibilities (one per line)"
            name="responsibilities" value={formData.responsibilities}
            onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
          />

          <textarea className="input" rows="3" placeholder="Requirements (one per line)"
            name="requirements" value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          />

          <input className="input" placeholder="Salary"
            name="salary" value={formData.salary}
            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
          />

          <select className="input"
            name="status" value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="active">Active</option>
            <option value="closed">Closed</option>
            <option value="draft">Draft</option>
          </select>

          <div className="flex gap-4 mt-4">
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Save
            </button>

            <button type="button" onClick={close}
              className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700">
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
