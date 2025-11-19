import React from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white px-4">
      <div className="backdrop-blur-md bg-white/10 p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 max-w-md w-full">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
          Forgot Password?
        </h2>

        <p className="text-gray-300 text-center mb-8">
          Enter your registered email address. We will send you a reset link.
        </p>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 
            text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-teal-400 to-emerald-500 text-indigo-950 font-bold py-3 rounded-xl shadow-xl hover:shadow-teal-500/50 transition-all">
          Send Reset Link
        </button>

        {/* Back to login */}
        <div className="text-center mt-6">
          <p className="text-gray-300">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-teal-300 font-semibold hover:underline"
            >
              Login Now
            </Link>
          </p>
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

export default ForgetPassword;
