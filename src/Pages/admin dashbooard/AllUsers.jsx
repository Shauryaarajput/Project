import React, { useState } from "react";

export default function AllUsers() {
  const usersData = [
    { id: 1, name: "Amit Sharma", email: "amit@example.com", joined: "12 Jan 2024", requests: 18, status: "Active" },
    { id: 2, name: "Priya Verma", email: "priya@example.com", joined: "08 Feb 2024", requests: 5, status: "Inactive" },
    { id: 3, name: "Rahul Meena", email: "rahul@example.com", joined: "22 Mar 2024", requests: 12, status: "Active" },
    { id: 4, name: "Kritika Soni", email: "kritika@example.com", joined: "05 Apr 2024", requests: 26, status: "Active" },
  ];

  const [search, setSearch] = useState("");
  const users = usersData.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 w-full text-white">

      {/* Header Row */}
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold mt-4">All Users</h1>

        {/* Total Users Card */}
        <div className="mt-4">
          <div className="p-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl border border-white/20 backdrop-blur-xl">
            <h3 className="text-lg font-medium">Total Users</h3>
            <p className="text-4xl font-bold mt-2">{users.length}</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mt-6 w-full md:w-80">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 
                     backdrop-blur-xl shadow-lg focus:ring-2 focus:ring-pink-400 outline-none"
        />
      </div>

      {/* Table Container (Glass Effect) */}
      <div className="mt-6 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-xl">

        <h2 className="text-2xl font-semibold mb-4">Users Overview</h2>

        <div className="overflow-x-auto rounded-xl border border-white/20">
          <table className="w-full border-collapse">

            {/* TABLE HEAD */}
            <thead>
              <tr className="bg-white/20 text-white text-sm">
                <th className="py-3 px-5 font-medium text-left">User</th>
                <th className="py-3 px-5 font-medium text-left">Email</th>
                <th className="py-3 px-5 font-medium text-left">Joined</th>
                <th className="py-3 px-5 font-medium text-left">Requests</th>
                <th className="py-3 px-5 font-medium text-left">Status</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-300 font-medium"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-white/10 hover:bg-white/10 transition"
                  >
                    {/* Avatar + Name */}
                    <td className="py-4 px-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-pink-600/30 text-white flex items-center justify-center text-lg font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-semibold">{user.name}</span>
                    </td>

                    <td className="py-4 px-5 text-gray-200">{user.email}</td>
                    <td className="py-4 px-5 text-gray-200">{user.joined}</td>

                    <td className="py-4 px-5 font-semibold text-white">
                      {user.requests}
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-5">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          user.status === "Active"
                            ? "bg-green-500/20 text-green-300 border border-green-400/30"
                            : "bg-gray-500/20 text-gray-300 border border-gray-400/30"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
