import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GraduationCap, FileText, CheckCircle, Clock, Shield, Zap, ArrowRight } from 'lucide-react';
function SignUp() {
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
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-gray-300">Join Form Wallah today</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-teal-400 transition-colors text-white"
                placeholder="John Doe"
              />
            </div>

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
                placeholder="Create a password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-teal-400 transition-colors text-white"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-400 to-emerald-500 text-indigo-950 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-shadow"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Already have an account?{' '}
              <Link to="/login" className="text-teal-300 hover:text-teal-200 font-semibold">
                Login
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
export default SignUp;