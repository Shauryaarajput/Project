import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address: "",
      category: "",
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-800 p-6 flex justify-center items-start">
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl shadow-teal-500/20 p-8 mt-10">
        <h1 className="text-3xl font-bold text-emerald-200 mb-4">Fill Your Form</h1>
        <p className="text-gray-300 mb-6">Please provide the following details</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Email and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Address */}
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            rows={3}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          {/* Category */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          >
            <option value="" disabled className="text-gray-300">
              Select Category
            </option>
            <option value="JEE" className="text-black">Engineering Form (JEE)</option>
            <option value="NEET" className="text-black">Medical Form (NEET)</option>
            <option value="UPSC" className="text-black">Civil Services (UPSC)</option>
            <option value="SSC" className="text-black">Staff Selection Commission (SSC)</option>
            <option value="CAT" className="text-black">Management (CAT)</option>
            <option value="GATE" className="text-black">GATE</option>
            <option value="CollegeForm" className="text-black">College Form</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 p-3 bg-emerald-400 text-indigo-950 rounded-xl font-bold hover:bg-emerald-500 transition-all"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}
