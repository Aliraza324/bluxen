import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import habibImg from "../assets/images/13cea26c212c2e3dbba0a743e496a887a097a124.png";
import fatemehImg from "../assets/images/3b53818bd10b8d3eb001e3739a829d50a0e0ed45.png";
import mariamImg from "../assets/images/ae3a4f501debfd6a409c9727581be0fbcbb193bd.png";
import shivaImg from "../assets/images/96055d83d5d58b71e102ca38f7dc9d6ef0506926.png";

import {
  reviewsHeaderVariants,
  reviewsCardHover,
  buttonTap,
} from "../animations/animation";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewsList = [
    {
      id: 1,
      name: "Habib Moghadam",
      verified: "Verified Client",
      platform: "ZILLOW",
      platformType: "zillow",
      quote:
        "“The Bluxen team Farid and Peggy was awesome! The entire team helped us navigate the San Diego market seamlessly and find our dream home.”",
      stars: 5,
      isFeatured: true,
      avatar: habibImg,
    },
    {
      id: 2,
      name: "Fatemeh Chadegani",
      verified: "Verified Client",
      platform: "GOOGLE",
      platformType: "google",
      quote:
        "“Mr. Khayamian and his team were very professional. They knew all about the homes and their condition, providing genuine guidance throughout.”",
      stars: 5,
      isFeatured: false,
      avatar: fatemehImg,
    },
    {
      id: 3,
      name: "Mariam E.",
      verified: "Verified Client",
      platform: "YELP",
      platformType: "yelp",
      quote:
        "“Peggy and Farid are great and experts at what they do. They were involved in every step of the transaction and made the process stress-free.”",
      stars: 5,
      isFeatured: false,
      avatar: mariamImg,
    },
    {
      id: 4,
      name: "Shiva",
      verified: "Verified Client",
      platform: "ZILLOW",
      platformType: "zillow",
      quote:
        "“Knowledgeable, professional and knows San Diego very well. After two months search to find my family’s perfect residence, they delivered!”",
      stars: 5,
      isFeatured: false,
      avatar: shivaImg,
    },
    {
      id: 5,
      name: "David Sterling",
      verified: "Verified Client",
      platform: "GOOGLE",
      platformType: "google",
      quote:
        "“Outstanding real estate advisory from start to finish. Farid’s strategic negotiation saved us thousands and secured our waterfront property.”",
      stars: 5,
      isFeatured: false,
      avatar: habibImg,
    },
  ];

  // Carousel Navigation Handlers
  const maxIndex = Math.max(0, reviewsList.length - 1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Render Stars Component
  const renderStars = (isFeatured) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${
            isFeatured ? "text-white fill-white" : "text-slate-800 fill-slate-800"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="relative w-full bg-[#f8fbfe] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Header with Title and Slider Arrow Buttons */}
        <motion.div
          variants={reviewsHeaderVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div>
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-5 h-0.5 bg-[#0B3A60] rounded-full" />
              <span className="text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0B3A60]">
                CLIENT REVIEWS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2 sm:mb-3">
              What People Say About Us
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Our reviews on different platforms across Southern California.
            </p>
          </div>

          {/* Functional Carousel Prev / Next Arrow Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <motion.button
              onClick={handlePrev}
              whileTap={buttonTap}
              aria-label="Previous Reviews"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs flex items-center justify-center cursor-pointer transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={handleNext}
              whileTap={buttonTap}
              aria-label="Next Reviews"
              className="w-11 h-11 rounded-full bg-[#0B3A60] hover:bg-[#07243c] text-white shadow-md shadow-[#0B3A60]/20 flex items-center justify-center cursor-pointer transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Reviews Cards Slider Carousel Container */}
        <div className="relative w-full overflow-hidden pb-4">
          <motion.div
            className="flex transition-transform duration-500 ease-out gap-5 lg:gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / Math.min(reviewsList.length, 4))}%)`,
            }}
          >
            {reviewsList.map((item, idx) => (
              <motion.div
                key={item.id}
                whileHover={reviewsCardHover}
                className={`min-w-full sm:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-18px)] rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[300px] sm:min-h-[320px] transition-all duration-300 ${
                  item.isFeatured || idx === 0
                    ? "bg-[#0B3A60] text-white shadow-xl shadow-[#0B3A60]/15 border border-[#0B3A60]"
                    : "bg-white text-slate-800 shadow-[0_10px_30px_-5px_rgba(11,58,96,0.06)] border border-slate-100/90"
                }`}
              >
                <div>
                  {/* Top Bar: Stars + Platform Badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    {renderStars(item.isFeatured || idx === 0)}

                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        item.isFeatured || idx === 0
                          ? "bg-white/15 text-sky-200"
                          : item.platformType === "google" || item.platformType === "yelp"
                          ? "bg-red-50 text-red-500"
                          : "bg-sky-50 text-[#0B3A60]"
                      }`}
                    >
                      {item.platform}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p
                    className={`text-xs sm:text-[13px] font-medium leading-relaxed mb-6 ${
                      item.isFeatured || idx === 0 ? "text-white/90" : "text-slate-600"
                    }`}
                  >
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 sm:border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                  />
                  <div>
                    <h4
                      className={`text-sm font-extrabold leading-tight ${
                        item.isFeatured || idx === 0 ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] font-medium mt-0.5">
                      <svg
                        className={`w-3.5 h-3.5 ${
                          item.isFeatured || idx === 0 ? "text-sky-300" : "text-[#0B3A60]"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={item.isFeatured || idx === 0 ? "text-sky-200" : "text-slate-500"}
                      >
                        {item.verified}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer: Rating Aggregates + Pagination Dots Indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-200/60">
          {/* Rating Badges */}
          <div className="flex items-center gap-6 text-xs sm:text-sm font-bold text-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B3A60]" />
              <span>4.9/5 (120+ reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B3A60]" />
              <span>5.0/5 (340+ reviews)</span>
            </div>
          </div>

          {/* Functional Pagination Dots */}
          <div className="flex items-center gap-2">
            {reviewsList.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === dotIdx
                    ? "w-6 h-2 bg-[#0B3A60]"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
