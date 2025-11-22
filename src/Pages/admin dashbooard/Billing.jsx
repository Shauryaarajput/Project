import React from "react";
import { CreditCard, FileText, Download, Clock, CheckCircle } from "lucide-react";

export default function Billing() {
  const bills = [
    { id: 1, title: "Exam Form 2025", amount: "$50", status: "Paid", date: "2025-11-22" },
    { id: 2, title: "Exam Form 2024", amount: "$45", status: "Pending", date: "2024-11-22" },
    { id: 3, title: "Exam Form 2023", amount: "$40", status: "Paid", date: "2023-11-22" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 p-6">
      
      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-emerald-200">Billing</h1>
        <p className="text-gray-300">View your payment history, invoices, and download receipts.</p>
      </div>

      {/* BILL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bills.map((bill) => (
          <div
            key={bill.id}
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-purple-400/40 hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-purple-300">{bill.title}</h2>
              <CreditCard className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-gray-200 mt-2">Amount: <span className="font-semibold">{bill.amount}</span></p>
            <p className="text-gray-200 mt-1">
              Status:{" "}
              <span
                className={`${
                  bill.status === "Paid"
                    ? "text-green-300"
                    : "text-yellow-300"
                } font-semibold`}
              >
                {bill.status}
              </span>
            </p>
            <p className="text-gray-300 mt-1">Date: {bill.date}</p>
            
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-purple-400 text-indigo-950 rounded-lg font-medium hover:bg-purple-500 flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Receipt
              </button>
              <button className="px-4 py-2 bg-indigo-400 text-indigo-950 rounded-lg font-medium hover:bg-indigo-500 flex items-center gap-2">
                <FileText className="w-4 h-4" /> View Invoice
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
