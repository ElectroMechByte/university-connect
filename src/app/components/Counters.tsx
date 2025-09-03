"use client";
import { useEffect, useState } from "react";
import { FaUserGraduate, FaUniversity, FaBookOpen, FaAward } from "react-icons/fa";

const counters = [
  {
    value: 3000,
    step: 100,
    label: "Happy Students",
    icon: <FaUserGraduate size={32} className="text-white" />,
    suffix: "+",
  },
  {
    value: 9,
    step: 1,
    label: "Trusted Service",
    icon: <FaAward size={32} className="text-white" />,
    suffix: " Years",
  },
  {
    value: 50,
    step: 1,
    label: "Partner Universities",
    icon: <FaUniversity size={32} className="text-white" />,
    suffix: "+",
  },
  {
    value: 25,
    step: 1,
    label: "Engineering Programs",
    icon: <FaBookOpen size={32} className="text-white" />,
    suffix: "+",
  },
];

export default function Counters() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    counters.forEach((counter, index) => {
      let start = 0;
      const end = counter.value;
      const step = counter.step || 1;
      const duration = 2000;
      const steps = Math.ceil(end / step);
      const stepTime = Math.max(Math.floor(duration / steps), 30);

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
      }, stepTime);
    });
  }, []);

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg_3.webp')" }}
    >
      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 rounded-xl transition-all text-center"
            >
              {/* Icon + Number inline */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-teal-600 rounded-full shadow-md flex items-center justify-center">
                  {c.icon}
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {counts[i]}
                  {c.suffix}
                </h2>
              </div>

              {/* Label */}
              <span className="text-white font-semibold">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
