import React from "react";

function Settings() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Settings
        </h1>

        {/* Profile Section */}
        <div className="border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold mb-3">Profile</h2>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-2 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2 outline-none"
            />
          </div>
        </div>

        {/* Notification Settings */}
        <div className="border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold mb-3">
            Notifications
          </h2>

          <div className="flex justify-between items-center">
            <span>Email Notifications</span>
            <input type="checkbox" defaultChecked />
          </div>
        </div>

        {/* Dark Mode */}
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Dark Mode</span>
            <input type="checkbox" />
          </div>
        </div>

        {/* Language */}
        <div className="border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold mb-3">Language</h2>

          <select className="w-full border rounded-lg px-4 py-2">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Save Changes
          </button>

          <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600">
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Settings;