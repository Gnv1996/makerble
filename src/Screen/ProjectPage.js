import React from 'react';

function ProjectPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Create a New Project</h1>
      <form>
        <input className="border rounded p-2 w-full mb-4" placeholder="Project Name" />
        <textarea className="border rounded p-2 w-full mb-4" placeholder="Description"></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Project</button>
      </form>
    </div>
  );
}

export default ProjectPage;
