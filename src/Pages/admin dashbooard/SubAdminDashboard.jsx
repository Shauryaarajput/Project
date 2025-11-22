import React from "react";
import { FileText, Users, ClipboardCheck, Loader, MessageSquare, Layers, UserPlus } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function SubAdminDashboard() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 p-6">

      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-50">SubAdmin Dashboard</h1>
        <p className="text-gray-200">Manage requests, teams, employee assignments, and communications.</p>
      </div>

      {/* TOP ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-teal-300">Receive Requests</h2>
            <FileText className="w-8 h-8 text-teal-400" />
          </div>
          <p className="text-gray-300 mt-2">View and manage incoming requests from Admin.</p>
          <NavLink to="/adminDashboard/request">
          <button className="mt-4 px-5 py-2 bg-teal-400 text-indigo-950 rounded-lg font-medium hover:bg-teal-500">
            View Requests
          </button>
          </NavLink>
        </div>

        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-green-300">Create Teams</h2>
            <UserPlus className="w-8 h-8 text-green-400" />
          </div>
          <p className="text-gray-300 mt-2">Form teams and assign employees to requests.</p>
          <button className="mt-4 px-5 py-2 bg-green-400 text-indigo-950 rounded-lg font-medium hover:bg-green-500">
            Create Team
          </button>
        </div>

        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-purple-300">Employee Dashboard</h2>
            <Layers className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-gray-300 mt-2">Monitor employee workload and assignments.</p>
          <button className="mt-4 px-5 py-2 bg-purple-400 text-indigo-950 rounded-lg font-medium hover:bg-purple-500">
            View Dashboard
          </button>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-yellow-300">Assign Requests</h2>
            <ClipboardCheck className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-gray-300 mt-2">Assign form requests to the appropriate employee.</p>
          <button className="mt-4 px-5 py-2 bg-yellow-400 text-indigo-950 rounded-lg font-medium hover:bg-yellow-500">
            Assign Now
          </button>
        </div>

        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-red-300">Track Requests</h2>
            <Loader className="w-8 h-8 text-red-400 animate-spin" />
          </div>
          <p className="text-gray-300 mt-2">Monitor required docs, missing docs, and status updates.</p>
          <button className="mt-4 px-5 py-2 bg-red-400 text-indigo-950 rounded-lg font-medium hover:bg-red-500">
            Track Requests
          </button>
        </div>

        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-pink-300">Communicate</h2>
            <MessageSquare className="w-8 h-8 text-pink-400" />
          </div>
          <p className="text-gray-300 mt-2">Communicate with users for clarifications or updates.</p>
          <button className="mt-4 px-5 py-2 bg-pink-400 text-indigo-950 rounded-lg font-medium hover:bg-pink-500">
            Contact User
          </button>
        </div>

      </div>

    </div>
  );
}
