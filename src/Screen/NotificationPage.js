import React from 'react';

function NotificationPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
      <div className="bg-white p-4 rounded-md shadow-sm">
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-500 rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m2-4h.01M17 16v-4a2 2 0 10-4 0v4m6 0h2a2 2 0 01-2 2H7a2 2 0 01-2-2h2m4 0v-4a6 6 0 1112 0v4z"></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-700 font-medium">New Message</p>
              <p className="text-sm text-gray-500">You received a message from John Doe.</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="bg-green-100 text-green-500 rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m2-4h.01M17 16v-4a2 2 0 10-4 0v4m6 0h2a2 2 0 01-2 2H7a2 2 0 01-2-2h2m4 0v-4a6 6 0 1112 0v4z"></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-700 font-medium">System Update</p>
              <p className="text-sm text-gray-500">Your system has been updated successfully.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotificationPage;
