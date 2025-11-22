import React, { useState } from "react";

import {
  Home,
  LayoutGrid,
  Users,
  FileText,
  Settings,
  LogOut,
  User,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ menuItems = [] }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 
        bg-white/10 backdrop-blur-xl border border-white/20 
        text-white p-2 rounded-lg shadow-lg hover:bg-white/20 transition"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* SIDEBAR */}
      <div
        className={`h-screen fixed top-0 left-0 z-40 
        bg-gradient-to-b from-indigo-950 via-purple-900 to-pink-900
        text-white border-r border-white/10 backdrop-blur-2xl
        shadow-2xl shadow-purple-900/50
        transition-all duration-300
        ${open ? "w-64" : "w-0 overflow-hidden"} lg:w-64`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-4 px-6 py-6 border-b border-white/10">
          <h2 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            FILL IT
          </h2>
        </div>

        {/* MAIN MENU */}
        <div className="px-4 py-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              to={item.route}
              key={item.label}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all 
                group cursor-pointer
                ${
                  isActive
                    ? "bg-white/20 border border-white/30 shadow-lg"
                    : "hover:bg-white/10 hover:border-white/10"
                }`
              }
            >
              <item.icon className="w-5 h-5 group-hover:scale-110 transition" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* BOTTOM MENU */}
        <div className="absolute bottom-0 left-0 w-full px-4 py-4 space-y-2 border-t border-white/10">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl 
          hover:bg-white/10 hover:border-white/20 border border-transparent 
          transition group">
            <User className="w-5 h-5 group-hover:scale-110 transition" /> 
            Profile
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl 
          hover:bg-white/10 hover:border-white/20 border border-transparent 
          transition group">
            <Settings className="w-5 h-5 group-hover:scale-110 transition" /> 
            Settings
          </button>
          <NavLink to="/">
          <button  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl 
          text-red-300 border border-red-400/20 hover:bg-red-500/20 
          transition group">
            <LogOut className="w-5 h-5 group-hover:scale-110 transition" /> 
            Logout
          </button>
          </NavLink>
          
        </div>
      </div>
    </>
  );
}
