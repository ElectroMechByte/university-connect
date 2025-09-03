"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  // Show button only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 text-gray-700 relative">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo / About + Socials */}
        <div>
          <h2 className="text-teal-700 text-2xl font-bold mb-3">
            University Connect
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Empowering students with guidance and support to achieve their dream
            education.
          </p>

          {/* Socials */}
          <h3 className="text-gray-800 font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-600 hover:text-white text-teal-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-600 hover:text-white text-teal-700 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-600 hover:text-white text-teal-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-600 hover:text-white text-teal-700 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-teal-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#courses" className="hover:text-teal-600 transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-teal-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="text-teal-600 mt-1" />
              <span>+91 7396504112, +91 8143091111</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-teal-600 mt-1" />
              <span>askuniversityconnect@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-teal-600 mt-1" />
              <span>
                11-13-1071/1, Opp. Aditya Pharmacy, Beside Ashta Lakshmi temple,
                Vasavi Colony, Kothapet, Hyderabad - 500035
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-teal-600 text-white text-center py-4 text-sm">
        <p>© {new Date().getFullYear()} University Connect. All rights reserved.</p> 
      </div>

      {/* Floating Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-teal-600 hover:bg-teal-700 text-white transition shadow-lg z-50"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
