"use client";
import { useState } from "react";
import {
  FaLaptopCode,
  FaMicrochip,
  FaDatabase,
  FaShieldAlt,
  FaBuilding,
  FaCar,
} from "react-icons/fa";

const courses = [
  {
    title: "Computer Science Engineering",
    icon: <FaLaptopCode size={28} className="text-teal-600" />,
    topics: [
      "AI & Machine Learning",
      "Cybersecurity",
      "Data Science",
      "IoT",
      "Blockchain Technology",
    ],
  },
  {
    title: "Electronics & Communication",
    icon: <FaMicrochip size={28} className="text-teal-600" />,
    topics: [
      "VLSI Design",
      "Embedded Systems",
      "Signal Processing",
      "Wireless Communication",
      "Microelectronics",
    ],
  },
  {
    title: "Information Technology",
    icon: <FaDatabase size={28} className="text-teal-600" />,
    topics: [
      "Cloud Computing",
      "Big Data Analytics",
      "Software Engineering",
      "Web & Mobile Development",
      "Cybersecurity",
    ],
  },
  {
    title: "Electrical & Electronics",
    icon: <FaShieldAlt size={28} className="text-teal-600" />,
    topics: [
      "Power Systems",
      "Renewable Energy",
      "Control Systems",
      "Electric Vehicles",
      "Smart Grids",
    ],
  },
  {
    title: "Civil Engineering",
    icon: <FaBuilding size={28} className="text-teal-600" />,
    topics: [
      "Structural Engineering",
      "Construction Management",
      "Geotechnical Engineering",
      "Environmental Engineering",
      "Transportation Engineering",
    ],
  },
  {
    title: "Mechanical & Automobile",
    icon: <FaCar size={28} className="text-teal-600" />,
    topics: [
      "Automobile Engineering",
      "Robotics & Automation",
      "Thermal Engineering",
      "Manufacturing Technology",
      "Aerospace Engineering",
    ],
  },
];

export default function CoursesGrid() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50" id="courses">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
          Explore <span className="text-teal-600">Engineering Programs</span>
        </h2>

        {/* Grid properly inside container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group [perspective:1000px] w-full"
              onClick={() => setFlipped(flipped === idx ? null : idx)}
            >
              <div
                className={`relative w-full h-56 transition-transform duration-500 [transform-style:preserve-3d] ${
                  flipped === idx ? "[transform:rotateY(180deg)]" : ""
                } group-hover:[transform:rotateY(180deg)] sm:cursor-pointer`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 [backface-visibility:hidden]">
                  <div className="p-3 bg-teal-100 rounded-lg mb-3">{course.icon}</div>
                  <h3 className="font-semibold text-lg text-gray-800 text-center">
                    {course.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-teal-600 shadow-md rounded-xl p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
                  <h3 className="font-semibold text-white mb-3 text-center">
                    Topics
                  </h3>
                  <ul
                    className={`space-y-2 text-sm text-white font-bold text-center transition-opacity duration-700 ${
                      flipped === idx ? "opacity-100 delay-200" : "opacity-0"
                    } group-hover:opacity-100 group-hover:delay-200`}
                  >
                    {course.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
