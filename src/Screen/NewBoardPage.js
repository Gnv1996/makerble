import React, { useState } from 'react';

function NewBoardPage() {
  const [boardName, setBoardName] = useState('');
  const [boardDescription, setBoardDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle board creation logic
    console.log('New board created:', { boardName, boardDescription, category });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Create a New Board</h1>
      <p className="text-gray-600 mb-10 text-center max-w-2xl">
        Fill out the details below to create a new board. You can add tasks and assign members once it's created.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
        <form onSubmit={handleSubmit}>
          {/* Board Name Field */}
          <div className="mb-6">
            <label
              htmlFor="boardName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Board Name
            </label>
            <input
              type="text"
              id="boardName"
              name="boardName"
              placeholder="Enter board name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              required
            />
          </div>

          {/* Board Description Field */}
          <div className="mb-6">
            <label
              htmlFor="boardDescription"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Board Description
            </label>
            <textarea
              id="boardDescription"
              name="boardDescription"
              rows="4"
              placeholder="Enter a description for your board"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={boardDescription}
              onChange={(e) => setBoardDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Category Field */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="project">Project</option>
              <option value="taskManagement">Task Management</option>
              <option value="teamCollaboration">Team Collaboration</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Create Board
            </button>
            <button
              type="button"
              className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-200 text-gray-700"
              onClick={() => {
                setBoardName('');
                setBoardDescription('');
                setCategory('');
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewBoardPage;
