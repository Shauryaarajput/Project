import React from "react";
import {
  FilePlus,
  Users,
  Download,
  Star,
  MessageSquare,
  Loader,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function FormRequest() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-emerald-200">Form Requests</h1>
        <p className="text-gray-300">
          Manage and track your form service requests.
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Submit New Request */}
        <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-emerald-400/40 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-emerald-300">
              Submit New Request
            </h2>
            <FilePlus className="w-8 h-8 text-emerald-300" />
          </div>
          <p className="text-gray-200 mt-2">
            Upload your document and choose the form category.
          </p>
          <button className="mt-4 px-5 py-2 bg-emerald-400 text-indigo-900 rounded-lg font-medium hover:bg-emerald-500">
            Submit Request
          </button>
        </div>

        {/* Track Progress */}
        <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-blue-400/40 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-blue-300">
              Track Progress
            </h2>
            <Loader className="w-8 h-8 text-blue-300 animate-spin" />
          </div>
          <p className="text-gray-200 mt-2">
            View status updates and track ongoing form work.
          </p>
          <button className="mt-4 px-5 py-2 bg-blue-400 text-indigo-900 rounded-lg font-medium hover:bg-blue-500">
            View Status
          </button>
        </div>

        {/* Assigned Employee (clickable card) */}
        <NavLink
          to="/adminDashboard/employee"
          className="block bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-purple-400/40 hover:shadow-xl transition"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-purple-300">
              Assigned Employee
            </h2>
            <Users className="w-8 h-8 text-purple-300" />
          </div>
          <p className="text-gray-200 mt-2">
            Check which employee is working on your request.
          </p>
          <div className="mt-4 px-5 py-2 bg-purple-400 text-indigo-900 rounded-lg font-medium hover:bg-purple-500 text-center">
            View Details
          </div>
        </NavLink>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        {/* Download Final Form */}
        <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-yellow-400/40 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-yellow-300">
              Download Final Form
            </h2>
            <Download className="w-9 h-9 text-yellow-300" />
          </div>
          <p className="text-gray-200 mt-2">
            Access your completed and verified filled form.
          </p>
          <button className="mt-4 px-5 py-2 bg-yellow-400 text-indigo-900 rounded-lg font-medium hover:bg-yellow-500">
            Download Now
          </button>
        </div>

        {/* Rate & Give Feedback */}
        <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-pink-400/40 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-pink-300">
              Rate & Give Feedback
            </h2>
            <Star className="w-8 h-8 text-pink-300" />
          </div>
          <p className="text-gray-200 mt-2">
            Help us improve our service by sharing your experience.
          </p>
          <button className="mt-4 px-5 py-2 bg-pink-400 text-indigo-900 rounded-lg font-medium hover:bg-pink-500 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Give Feedback
          </button>
        </div>
      </div>

    </div>
  );
}
