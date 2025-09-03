"use client";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-teal-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Learn more about University Connect — our journey, values, mission,
            and vision for empowering students in their education journey.
          </p>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <Image
              src="/about.webp"
              alt="About University Connect"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold text-teal-700 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded with the vision to simplify college admissions, University
              Connect has been guiding students for over 9 years. We have helped
              thousands of students secure admissions into top engineering
              colleges across India.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of experienced counselors provides personalized guidance,
              ensuring that every student finds the right program and
              institution that aligns with their dreams and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-12">
            Mission, Vision & Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Mission */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide transparent, reliable, and personalized guidance to
                students, helping them secure admissions into the best possible
                colleges and shaping their career with confidence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become India’s most trusted education consultancy, empowering
                students from diverse backgrounds to achieve their academic and
                professional dreams globally.
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Transparency
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We ensure a transparent admission process, guiding students with
                complete honesty so they can make informed choices with clarity.
              </p>
            </div>

            {/* Student-Centered */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Student-Centered
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every student is unique. We focus on understanding individual
                aspirations and provide personalized counseling to achieve their
                goals.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Commitment to Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With over 9 years of experience and thousands of successful
                admissions, we are committed to delivering excellence at every
                step.
              </p>
            </div>

            {/* Support */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                End-to-End Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From counseling to admissions and beyond, we provide complete
                support to students and parents throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
