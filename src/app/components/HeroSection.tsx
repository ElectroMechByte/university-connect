"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[95vh] flex items-center bg-cover 
                 bg-center md:bg-center bg-right"
      style={{
        backgroundImage: "url('/bg_1.webp')", // place bg_1.webp in /public
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-6 md:px-12">
        <div className="max-w-xl text-white">
          <span className="block text-lg uppercase tracking-widest text-teal-300">
            Welcome to University Connect
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your Gateway to Top Engineering Colleges in India
          </h1>
          <p className="text-lg mb-6 text-gray-200">
            Shape Your Future with University Connect
          </p>

          <div className="flex gap-4">
            {/* Internal links should use <Link /> */}
            <Link
              href="/#contact"
              className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition"
            >
              Get Started Now!
            </Link>
            <Link
              href="/#courses"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
            >
              View Course →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
