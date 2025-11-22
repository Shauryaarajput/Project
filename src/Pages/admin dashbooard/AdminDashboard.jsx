import Sidebar from "../../Components/SideBar";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import {
  Home,
  Users,
  FileText,
  UserCog,
  UserCheck,
  BarChart3,
  Receipt,
} from "lucide-react";

export default function AdminDashboard() {
  const adminMenu = [
    { label: "Dashboard", icon: Home, route: "/adminDashboard" },
    { label: "Users", icon: Users, route: "/adminDashboard/users" },
    { label: "Forms Request", icon: FileText, route: "/adminDashboard/request" },
    { label: "Sub-admin", icon: UserCog, route: "/adminDashboard/subAdmin" },
    { label: "Employee", icon: UserCheck, route: "/adminDashboard/employee" },
    { label: "Reports", icon: BarChart3, route: "/adminDashboard/reports" },
    { label: "Billing", icon: Receipt, route: "/adminDashboard/billing" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white overflow-hidden">
      <Sidebar menuItems={adminMenu} />

      <div className="ml-0 lg:ml-64 w-full p-6 transition-all">
        <Header username="Welcome, Shaurya Rajput" />

        <div className="mt-6 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl shadow-teal-500/20 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
