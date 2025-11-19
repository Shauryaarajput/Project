import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GraduationCap, FileText, CheckCircle, Clock, Shield, Zap, ArrowRight } from 'lucide-react';

// Login Component (components/Login.jsx)
function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="backdrop-blur-md bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 p-3 rounded-xl shadow-lg">
                <FileText className="w-8 h-8 text-indigo-950" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-300">Login to continue to Form Wallah</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-teal-400 transition-colors text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-teal-400 transition-colors text-white"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Remember me</span>
              </label>
              <Link to="/ForgetPassword" className="text-teal-300 hover:text-teal-200">
              Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-400 to-emerald-500 text-indigo-950 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-shadow"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Don't have an account?{' '}
              <Link to="/signup" className="text-teal-300 hover:text-teal-200 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>

          <Link
            to="/"
            className="mt-6 block w-full text-center text-gray-300 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;