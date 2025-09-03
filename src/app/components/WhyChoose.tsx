"use client";
import Image from "next/image";
import { FaUsers, FaCertificate, FaHandsHelping } from "react-icons/fa";
import { MdTrackChanges } from "react-icons/md";

const features = [
  {
    icon: <FaUsers size={28} className="text-teal-600" />,
    title: "Expert Guidance",
    desc: "Personalized counseling from experienced advisors who understand your goals and aspirations.",
  },
  {
    icon: <FaCertificate size={28} className="text-teal-600" />,
    title: "Extensive Network",
    desc: "Direct partnerships with top engineering colleges across India for seamless admissions.",
  },
  {
    icon: <MdTrackChanges size={28} className="text-teal-600" />,
    title: "Proven Track Record",
    desc: "9 years of excellence with over 3,000 successful admissions and counting.",
  },
  {
    icon: <FaHandsHelping size={28} className="text-teal-600" />,
    title: "End-to-End Support",
    desc: "Complete assistance from college selection to admission confirmation and beyond.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center px-4 sm:px-6 md:px-12">
        
        {/* Left Image - only visible on desktop */}
        <div className="hidden md:block w-full h-full">
          <Image
            src="/about.webp"
            alt="Why Choose University Connect"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-lg md:rounded-2xl shadow-md"
          />
        </div>

        {/* Right Content */}
        <div>
          <span className="text-teal-600 font-semibold uppercase tracking-wide text-sm">
            Why Choose University Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-8 leading-snug">
            Benefits of <span className="text-teal-600">Choosing Us</span>
          </h2>

          {/* Features List */}
          <div className="space-y-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-teal-200"
              >
                <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
