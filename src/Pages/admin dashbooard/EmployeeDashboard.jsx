import React from "react";
import { ClipboardList, ShieldCheck, FileCheck, UploadCloud, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmployeeDashboard() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 p-6">

      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-50">Employee Dashboard</h1>
        <p className="text-gray-300">Manage assigned requests, fill forms, upload proofs, and update status.</p>
      </div>

      {/* TOP ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Assigned Requests */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-teal-300">Assigned Requests</h2>
            <ClipboardList className="w-8 h-8 text-teal-400" />
          </div>
          <p className="text-gray-300 mt-2">
            View your pending form requests assigned by SubAdmin.
          </p>
          <Link to="/adminDashboard/request">
            <button className="mt-4 px-5 py-2 bg-teal-400 text-indigo-950 rounded-lg font-medium hover:bg-teal-500">
              View Requests
            </button>
          </Link>
        </div>

        {/* DigiLocker OTP */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-yellow-300">DigiLocker Access</h2>
            <ShieldCheck className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-gray-300 mt-2">
            Request OTP from user and fetch required documents securely.
          </p>
          <button className="mt-4 px-5 py-2 bg-yellow-400 text-indigo-950 rounded-lg font-medium hover:bg-yellow-500">
            Open DigiLocker
          </button>
        </div>

        {/* Fill Form */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-purple-300">Fill Official Form</h2>
            <FileCheck className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-gray-300 mt-2">
            Fill the required form on the government’s official website.
          </p>
          <button className="mt-4 px-5 py-2 bg-purple-400 text-indigo-950 rounded-lg font-medium hover:bg-purple-500">
            Start Filling
          </button>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        {/* Upload Proofs */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-pink-300">Upload Proof</h2>
            <UploadCloud className="w-8 h-8 text-pink-400" />
          </div>
          <p className="text-gray-300 mt-2">
            Upload screenshots, PDF previews, and final submission receipts.
          </p>
          <button className="mt-4 px-5 py-2 bg-pink-400 text-indigo-950 rounded-lg font-medium hover:bg-pink-500">
            Upload Files
          </button>
        </div>

        {/* Status Updates */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-green-300">Update Status</h2>
            <Clock className="w-8 h-8 text-green-400" />
          </div>
          <p className="text-gray-300 mt-2">
            Mark requests as: Work in Progress, Waiting for OTP, Missing Docs, Completed.
          </p>
          <button className="mt-4 px-5 py-2 bg-green-400 text-indigo-950 rounded-lg font-medium hover:bg-green-500">
            Update Status
          </button>
        </div>

        {/* Submit Final Form */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 shadow-lg rounded-2xl p-6 border border-purple-700 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-red-300">Submit to SubAdmin</h2>
            <Send className="w-8 h-8 text-red-400" />
          </div>
          <p className="text-gray-300 mt-2">
            Submit final forms to SubAdmin → Admin → User.
          </p>
          <button className="mt-4 px-5 py-2 bg-red-400 text-indigo-950 rounded-lg font-medium hover:bg-red-500">
            Submit Final Form
          </button>
        </div>

      </div>
    </div>
  );
}
