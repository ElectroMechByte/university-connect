"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
import { MdOutlineAccessTime, MdPhone } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/#courses" },
  { name: "Top Universities", href: "/#universities" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact Us", href: "/#contact" }, 
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // ✅ check if it's home page (to keep transparent header)
  const isHome = pathname === "/";

  return (
    <header
      className={`w-full z-20 ${
        isHome ? "absolute top-0 left-0 bg-transparent" : "relative bg-white shadow-md"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`hidden md:flex justify-between items-center px-6 py-2 text-sm ${
          isHome ? "text-white/90" : "text-gray-700"
        }`}
      >
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold">
            University <span className="text-teal-600">Connect</span>
          </h1>
          <p className="text-xs font-light -mt-1">Educational Services</p>
        </div>

        {/* Info */}
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <MdOutlineAccessTime className="text-teal-600" />
            <span>
              Monday - Friday <strong>8:00AM - 8:00PM</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone className="text-teal-600" />
            <span>
              Call Us <strong>+2 392 3929 210</strong>
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <FaFacebookF className="hover:text-teal-600 cursor-pointer" />
          <FaTwitter className="hover:text-teal-600 cursor-pointer" />
          <FaInstagram className="hover:text-teal-600 cursor-pointer" />
          <FaDribbble className="hover:text-teal-600 cursor-pointer" />
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`px-6 py-4 flex items-center justify-between md:justify-center ${
          isHome ? "bg-transparent text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* Logo (mobile only) */}
        <div className="md:hidden font-bold text-lg">
          University <span className="text-teal-600">Connect</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link, index) => {
            const isActive =
              (pathname === "/" && link.href === "/") ||
              (pathname.startsWith("/about") && link.href === "/about");

            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-teal-600 font-semibold"
                      : "hover:text-teal-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-2xl ${isHome ? "text-white" : "text-gray-800"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white py-6 px-6 space-y-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-teal-300 transition-colors"
                  onClick={() => setMenuOpen(false)} // close after click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
