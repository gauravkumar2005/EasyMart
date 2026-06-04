import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-blue-600 h-40"></div>

        {/* Profile Info */}
        <div className="flex flex-col items-center -mt-16 px-6">
          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />

          <h1 className="text-3xl font-bold mt-4 text-gray-800">
            Rohit Kumar
          </h1>

          <p className="text-gray-500">
            rohit@example.com
          </p>
        </div>

        {/* User Details */}
        <div className="grid md:grid-cols-2 gap-6 p-8">

          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Personal Information
            </h2>

            <p><strong>Name:</strong> Gaurav Kumar</p>
            <p><strong>Email:</strong> gaurav@example.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Address
            </h2>

            <p>Gopalganj, Bihar</p>
            <p>India - 841428</p>
          </div>

        </div>

        {/* Order Summary */}
        <div className="grid grid-cols-3 gap-4 p-8 pt-0">

          <div className="bg-blue-100 text-center p-4 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-600">12</h3>
            <p>Total Orders</p>
          </div>

          <div className="bg-green-100 text-center p-4 rounded-xl">
            <h3 className="text-2xl font-bold text-green-600">8</h3>
            <p>Delivered</p>
          </div>

          <div className="bg-yellow-100 text-center p-4 rounded-xl">
            <h3 className="text-2xl font-bold text-yellow-600">4</h3>
            <p>Pending</p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pb-8">

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>

           <Link
              to="/settings"
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
              >
             Settings
          </Link>

          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
            Logout
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;