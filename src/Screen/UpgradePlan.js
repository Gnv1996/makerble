import React from 'react';

function UpgradePlan() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Upgrade Your Plan</h1>
      <p className="text-gray-600 mb-12">
        Select a plan that fits your needs and start enjoying premium features today!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl">
        {/* Basic Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 border text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Plan</h2>
          <p className="text-gray-600 mt-4">Perfect for personal use.</p>
          <ul className="mt-4 space-y-3 text-left">
            <li className="flex items-center">
              <span className="text-green-500 font-bold">✔</span>
              <span className="ml-2 text-gray-700">Access to essential features</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold">✔</span>
              <span className="ml-2 text-gray-700">Email support</span>
            </li>
          </ul>
          <p className="text-3xl font-bold text-gray-800 mt-16">$9<span className="text-lg font-medium">/month</span></p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Choose Basic
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 border text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Pro Plan</h2>
          <p className="text-gray-600 mt-4">Ideal for small teams.</p>
          <ul className="mt-4 space-y-3 text-left">
            <li className="flex items-center">
              <span className="text-green-500 font-bold">✔</span>
              <span className="ml-2 text-gray-700">Advanced analytics</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold">✔</span>
              <span className="ml-2 text-gray-700">Priority email support</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold">✔</span>
              <span className="ml-2 text-gray-700">Collaboration tools</span>
            </li>
          </ul>
          <p className="text-3xl font-bold text-gray-800 mt-6">$29<span className="text-lg font-medium">/month</span></p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Choose Pro
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 border text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Enterprise Plan</h2>
          <p className="text-gray-600 mt-4">Best for large organizations.</p>
          <ul className="mt-4 space-y-3 text-left">
            <li className="flex items-center">
              <span className="text-green-500 font-bold">✔</span>
              <span className="ml-2 text-gray-700">Custom integrations</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold">✔</span>
              <span className="ml-2 text-gray-700">Dedicated support</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold">✔</span>
              <span className="ml-2 text-gray-700">Unlimited storage</span>
            </li>
          </ul>
          <p className="text-3xl font-bold text-gray-800 mt-6">$99<span className="text-lg font-medium">/month</span></p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Choose Enterprise
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpgradePlan;
