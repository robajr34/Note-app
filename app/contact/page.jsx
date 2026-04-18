"use client";
import Nav from "@/components/nav";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just simulate a success message
    if (formData.name && formData.email && formData.message) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Nav />
      
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text */}
          <div>
            <h1 className="text-3xl font-extrabold mb-6 tracking-tight md:text-4xl lg:5xl xl:-6xl">
              Get in <span className="text-gray-500">touch.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Have a feature request or found a bug? We'd love to hear from you. 
              Our team usually responds within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <span className="p-3 bg-gray-900 rounded-full">📍</span>
                <p>Digital Nomad, Anywhere</p>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="p-3 bg-gray-900 rounded-full">✉️</span>
                <p>support@notesapp.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-3xl shadow-2xl relative">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl focus:border-white outline-none transition-all"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl focus:border-white outline-none transition-all"
                required
              />
              <textarea
                placeholder="How can we help?"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl focus:border-white outline-none transition-all resize-none"
                required
              ></textarea>
              
              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-transform active:scale-95"
              >
                Send Message
              </button>
            </form>

            {/* Success Message Popup */}
            {status === "success" && (
              <div className="absolute inset-0 bg-green-600 rounded-3xl flex flex-col items-center justify-center text-center p-6 animate-in fade-in zoom-in duration-300">
                <span className="text-4xl mb-2">🚀</span>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-green-100">We'll get back to you soon.</p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};

export default ContactPage;