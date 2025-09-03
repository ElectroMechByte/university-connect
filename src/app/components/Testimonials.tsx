"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya",
    university: "VIT University",
    review:
      "University Connect made my dream of studying at VIT a reality. Their guidance throughout the admission process was invaluable.",
    rating: 5,
  },
  {
    name: "Rahul",
    university: "PES University",
    review:
      "The counselors at University Connect helped me choose the perfect specialization in Computer Science. Now I'm pursuing my passion in AI & ML.",
    rating: 5,
  },
  {
    name: "Navya",
    university: "Manipal University",
    review:
      "Thanks to University Connect, I got into my dream college. Their personalized approach and dedication are commendable.",
    rating: 5,
  },
  {
    name: "Arjun",
    university: "SRM University",
    review:
      "With their expert guidance, I was able to secure admission into SRM. The entire process was smooth and stress-free.",
    rating: 5,
  },
  {
    name: "Sneha",
    university: "Amrita University",
    review:
      "University Connect supported me at every step, from applications to counseling. I couldn’t have asked for better mentors.",
    rating: 5,
  },
  {
    name: "Kiran",
    university: "Sreenidhi University",
    review:
      "I am grateful for their personalized attention which helped me get into my desired program. Highly recommend University Connect!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Track window size
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-orange-500 mb-10">
          What Our Students Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {testimonials.map((t, idx) => {
            // Determine teal card logic
            let isTeal = false;
            if (slidesPerView === 1) {
              isTeal = activeIndex === idx;
            } else if (slidesPerView === 2) {
              isTeal = activeIndex === idx;
            } else if (slidesPerView === 3) {
              isTeal = idx === activeIndex + 1;
            }

            return (
              <SwiperSlide key={idx}>
                <div
                  className={`rounded-xl p-6 min-h-[250px] h-full flex flex-col transition-all duration-500 shadow-md ${
                    isTeal ? "bg-teal-600 text-white" : "bg-white text-gray-700"
                  }`}
                >
                  {/* User Icon & Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <FaUserCircle
                      size={40}
                      className={isTeal ? "text-white" : "text-gray-500"}
                    />
                    <div>
                      <h3
                        className={`font-semibold ${
                          isTeal ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {t.name}
                      </h3>
                      <p
                        className={`text-sm ${
                          isTeal ? "text-gray-200" : "text-gray-500"
                        }`}
                      >
                        {t.university}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={isTeal ? "text-yellow-300" : "text-yellow-500"}
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p
                    className={`text-sm leading-relaxed ${
                      isTeal ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {t.review}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
