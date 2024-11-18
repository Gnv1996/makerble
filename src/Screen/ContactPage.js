import React from 'react';

function ContactPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Create a New Contact</h1>
      <form>
        <input className="border rounded p-2 w-full mb-4" placeholder="Name" />
        <input className="border rounded p-2 w-full mb-4" placeholder="Email" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Contact</button>
      </form>
    </div>
  );
}

export default ContactPage;
