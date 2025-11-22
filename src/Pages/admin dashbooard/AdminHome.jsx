import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  UserPlus,
  UserCheck,
} from "lucide-react";

export default function AdminHome() {
  const stats = [
    { icon: Users, label: "Total Users", value: "1,540", link: "/adminDashboard/users" },
    { icon: FileText, label: "Total Form Requests", value: "3,280",link: "/adminDashboard/request" },
    { icon: CheckCircle, label: "Completed Requests", value: "2,940" },
    { icon: Clock, label: "Pending Requests", value: "340" },
  ];

  return (
    <div className="w-full">

      {/* TOP STATS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => {
          const Card = (
            <div
              className="
                relative p-6 rounded-2xl 
                bg-white/10 backdrop-blur-xl 
                border border-white/20 
                shadow-xl shadow-emerald-500/10 
                hover:shadow-emerald-500/30 
                transition
              "
            >
              <div className="absolute left-0 top-8 h-12 w-1.5 bg-emerald-400 rounded-r-lg"></div>

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md mb-4">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </div>

              <h3 className="text-lg font-semibold text-white">{item.label}</h3>
              <p className="text-3xl font-bold text-white mt-2">{item.value}</p>
            </div>
          );

          return item.link ? (
            <Link key={i} to={item.link}>{Card}</Link>
          ) : (
            <div key={i}>{Card}</div>
          );
        })}
      </div>

      {/* TODAY REQUEST */}
      <div
        className="
          mt-6 p-6 
          bg-gradient-to-r from-emerald-500 to-emerald-700 
          text-white rounded-2xl 
          shadow-lg shadow-emerald-500/30
        "
      >
        <h3 className="text-lg font-semibold">Today’s Requests</h3>
        <p className="text-4xl font-bold mt-2">67</p>
      </div>

      {/* BOTTOM SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        {/* Recent Users */}
        <div
          className="
            bg-white/10 backdrop-blur-xl 
            rounded-2xl p-6 
            shadow-lg shadow-purple-500/10 
            border border-white/20
          "
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <UserPlus className="w-6 h-6 text-emerald-400" />
            Recent User Accounts
          </h3>

          <div className="space-y-3">
            {["Riya Sharma", "Aman Patel", "Kunal Mehta", "Pooja Verma"].map(
              (user, index) => (
                <div
                  key={index}
                  className="
                    flex justify-between p-3 
                    bg-white/10 rounded-lg 
                    border border-white/20 
                    text-white
                  "
                >
                  <span>{user}</span>
                  <span className="text-sm text-gray-300">Today</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* New Employees */}
        <div
          className="
            bg-white/10 backdrop-blur-xl 
            rounded-2xl p-6 
            shadow-lg shadow-purple-500/10 
            border border-white/20
          "
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <UserCheck className="w-6 h-6 text-emerald-400" />
            New Employees Joined
          </h3>

          <div className="space-y-3">
            {["Sahil Singh", "Priya Chauhan", "Aditya Kumar"].map(
              (emp, index) => (
                <div
                  key={index}
                  className="
                    flex justify-between p-3 
                    bg-white/10 rounded-lg 
                    border border-white/20 
                    text-white
                  "
                >
                  <span>{emp}</span>
                  <span className="text-sm text-gray-300">This Week</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Active Employees */}
        <div
          className="
            bg-white/10 backdrop-blur-xl 
            rounded-2xl p-6 
            shadow-lg shadow-purple-500/10 
            border border-white/20
          "
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <Users className="w-6 h-6 text-emerald-400" />
            Active Employees Today
          </h3>

          <ul className="space-y-3">
            {[
              { name: "Neha Sharma", status: "Active" },
              { name: "Vivek Kumar", status: "Active" },
              { name: "Tanya Jain", status: "Active" },
            ].map((emp, index) => (
              <li
                key={index}
                className="
                  flex justify-between p-3 
                  bg-white/10 rounded-lg 
                  border border-white/20 
                  text-white
                "
              >
                <span>{emp.name}</span>
                <span className="text-emerald-400 text-sm font-medium">
                  ● {emp.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
