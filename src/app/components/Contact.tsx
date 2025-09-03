"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxP4veA05hEf8srYWM90srRnC6jltrqv8qaXD-c6KB3W3llX21n-2pSf8-KO4yXiJNj/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      Swal.fire({
        title: "Message Sent! 🎉",
        text: "Thanks for contacting us. We will get back to you soon.",
        icon: "success",
        confirmButtonColor: "#0d9488",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#dc2626",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-40 py-16" id="contact">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <Image
              src="/contact.png"
              alt="Contact Us"
              width={550}
              height={550}
              className="object-contain"
            />
          </div>

          {/* Right: Heading + Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-extrabold mb-6 text-teal-700">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
             {" We'd love to hear from you! Fill out the form and we’ll get back as soon as possible."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-3 rounded-lg hover:from-teal-700 hover:to-teal-600 transition flex justify-center items-center font-semibold"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
