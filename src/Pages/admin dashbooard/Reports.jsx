import React from "react";
import { FileText, Download, Clock, CheckCircle } from "lucide-react";

export default function Reports() {
  const reports = [
    { id: 1, title: "Exam Form 2025", status: "Submitted", date: "2025-11-22" },
    { id: 2, title: "Exam Form 2024", status: "Approved", date: "2024-11-22" },
    { id: 3, title: "Upsc Form 2025", status: "Pending", date: "2023-11-22" },
    { id: 4, title: "Constable Form 2025", status: "Approved", date: "2023-11-22" },
    { id: 5, title: "MPSI Form 2025", status: "Pending", date: "2023-11-22" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 p-6">
      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-emerald-200">Reports</h1>
        <p className="text-gray-300">
          View your submitted examination forms, check status, and download reports.
        </p>
      </div>

      {/* REPORT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-indigo-400/40 hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-indigo-300">{report.title}</h2>
              <FileText className="w-8 h-8 text-indigo-400" />
            </div>
            <p className="text-gray-200 mt-2">
              Status:{" "}
              <span
                className={`${
                  report.status === "Submitted"
                    ? "text-yellow-300"
                    : report.status === "Approved"
                    ? "text-green-300"
                    : "text-red-300"
                } font-semibold`}
              >
                {report.status}
              </span>
            </p>
            <p className="text-gray-300 mt-1">Submitted on: {report.date}</p>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-indigo-400 text-indigo-950 rounded-lg font-medium hover:bg-indigo-500 flex items-center gap-2">
                <Download className="w-4 h-4" /> Download
              </button>
              <button className="px-4 py-2 bg-green-400 text-indigo-950 rounded-lg font-medium hover:bg-green-500 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
