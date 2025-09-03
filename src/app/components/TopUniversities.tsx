"use client";
import Image from "next/image";

const universities = [
  {
    name: "Vellore Institute of Technology (VIT)",
    location: "Vellore, Chennai, Bhopal, AP",
    image: "/universities/vit.jpg",
  },
  {
    name: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, Bangalore, Amritapuri, Chennai, AP",
    image: "/universities/amrita.jpg",
  },
  {
    name: "PES University",
    location: "Bangalore",
    image: "/universities/pes.jpg",
  },
  {
    name: "SRM University",
    location: "Kattankulathur, Ramapuram, AP",
    image: "/universities/srm.jpg",
  },
  {
    name: "Manipal University",
    location: "Manipal (Udipi), Bangalore",
    image: "/universities/manipal.jpg",
  },
  {
    name: "Sreenidhi University",
    location: "Hyderabad",
    image: "/universities/sreenidhi.jpg",
  },
];

export default function TopUniversities() {
  return (
    <section className="py-16 bg-white" id="universities">
      <div className="container mx-auto px-6">
         
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
          Top <span className="text-teal-600">Universities</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Background Image */}
              <Image
                src={uni.image}
                alt={uni.name}
                width={500}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-semibold text-lg">
                  {uni.name}
                </h3>
                <p className="text-gray-200 text-sm">{uni.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
