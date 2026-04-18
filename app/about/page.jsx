"use client";
import Nav from "@/components/nav";
import React from "react";

const About = () => {
  const features = [
    {
      title: "Local Persistence",
      description:
        "Your notes stay on your device. We use LocalStorage to keep your data private and accessible without a database.",
      icon: "💾",
    },
    {
      title: "Lightweight & Fast",
      description:
        "Built with Next.js and Tailwind CSS for a lightning-fast experience that doesn't bog down your browser.",
      icon: "⚡",
    },
    {
      title: "Clean Design",
      description:
        "A distraction-free interface designed to help you focus on your thoughts, not the tool.",
      icon: "🎨",
    },
  ];

  return (
    <>
      <Nav />
      <section className="w-full py-16 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              About <span className="text-gray-500">Notes App</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A simple, secure, and minimal space to capture your ideas, to-do
              lists, and inspirations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gray-900 border border-gray-800 rounded-3xl hover:border-gray-600 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="mt-16 p-8 bg-gray-800/30 rounded-3xl border border-dashed border-gray-700 text-center">
            <p className="text-gray-500 italic">
              "The shortest pencil is longer than the longest memory."
              <br />
              <span className="mt-2 block not-italic font-bold text-gray-300">
                — Start writing today.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
