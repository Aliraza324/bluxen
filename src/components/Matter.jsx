import React from "react";
import { motion } from "motion/react";
import villaPoolImg from "../assets/images/villa-pool.jpg";
import familyImg from "../assets/images/family.jpg";
import houseIcon from "../assets/images/house.png";
import arrowRightIcon from "../assets/images/arrow-right.png";
import {
  matterImageVariants,
  matterOverlappingVariants,
  matterBadgeVariants,
  matterContentVariants,
  containerStagger,
  buttonHover,
  buttonTap,
} from "../animations/animation";

const Matter = () => {
  const checklist = [
    "Save your searches",
    "Save properties to portfolio",
    "Customized email updates",
  ];

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Visual Collage with Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            {/* Top-Left Decorative Dot Pattern */}
            <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 grid grid-cols-6 gap-2 z-0 pointer-events-none">
              {Array.from({ length: 18 }).map((_, idx) => (
                <span key={idx} className="w-1.5 h-1.5 rounded-full bg-sky-200" />
              ))}
            </div>

            {/* Main Visual Frame */}
            <div className="relative w-full max-w-[430px] pb-10 sm:pb-12">
              {/* Main Image: Luxury Villa & Pool */}
              <motion.div
                variants={matterImageVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-2xl aspect-[4/4.6] w-full border border-slate-100 z-10 group"
              >
                <img
                  src={villaPoolImg}
                  alt="Modern Luxury Real Estate Villa with Swimming Pool"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Floating Badge: 100% Client Satisfaction */}
              <motion.div
                variants={matterBadgeVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.08, rotate: 4 }}
                className="absolute top-6 -right-2 sm:top-8 sm:-right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-xl border-2 border-dashed border-sky-300 flex flex-col items-center justify-center text-center p-2 z-30 cursor-pointer transition-shadow hover:shadow-2xl"
              >
                <span className="text-[#0B3A60] font-black text-xl sm:text-2xl leading-none mb-1">
                  100%
                </span>
                <span className="text-[8px] sm:text-[9px] font-extrabold text-slate-500 uppercase tracking-wider leading-tight">
                  CLIENT
                  <br />
                  SATISFACTION
                </span>
              </motion.div>

              {/* Overlapping Bottom Image: Happy Family */}
              <motion.div
                variants={matterOverlappingVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="absolute bottom-0 right-0 sm:-bottom-4 sm:-right-4 w-[230px] sm:w-[280px] aspect-[4/3] rounded-3xl sm:rounded-[28px] overflow-hidden border-4 border-white shadow-2xl z-20 group"
              >
                <img
                  src={familyImg}
                  alt="Happy Family at Their New Home"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Information & Actionable Features */}
          <motion.div
            variants={matterContentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Tag / Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-[#0B3A60] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-3.5 sm:mb-4 w-fit shadow-xs">
              <svg
                className="w-3.5 h-3.5 text-[#0B3A60]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>GET TO KNOW US</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.14] mb-3 sm:mb-4">
              Why It Matters To You
            </h2>

            {/* Description Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-6 sm:mb-8">
              Bluxen Real Estate is a big, small company — small enough to &ldquo;know you&rdquo; and
              big enough to have every resource necessary for a smooth, stress-free, and successful
              transaction.
            </p>

            {/* 2 Feature Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5 sm:mb-6">
              {/* Card 1: Local Trends */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_8px_30px_-5px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0B3A60] flex items-center justify-center text-white mb-3.5 shadow-sm shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  Local Trends
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                  Data-driven insights into your neighborhood.
                </p>
              </div>

              {/* Card 2: Our Expertise */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_8px_30px_-5px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0B3A60] flex items-center justify-center text-white mb-3.5 shadow-sm shrink-0">
                  <img
                    src={houseIcon}
                    alt="House"
                    className="w-5 h-5 object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                  Our Expertise
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                  Decades of combined real estate mastery.
                </p>
              </div>
            </div>

            {/* Bottom Large Box: Exclusive Market Updates */}
            <div className="relative rounded-3xl p-6 sm:p-8 border border-sky-100 overflow-hidden shadow-xs"
              style={{
                background: "linear-gradient(135deg, #f2f7fc 0%, #e8f1fb 100%)",
              }}
            >
              {/* Top-Right Decorative Ambient Blob */}
              <div className="w-36 h-36 rounded-full bg-sky-200/35 absolute -top-12 -right-12 pointer-events-none" />

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                Exclusive Market Updates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4 sm:mb-5">
                Stay ahead of the market with our curated newsletter.
              </p>

              {/* Checklist Items */}
              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0B3A60] flex items-center justify-center text-white shadow-xs shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Register Button */}
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="bg-[#0B3A60] hover:bg-[#07243c] text-white font-bold text-xs sm:text-sm px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl flex items-center gap-2 shadow-md shadow-[#0B3A60]/20 transition-all duration-200 cursor-pointer group"
              >
                <span>Register Now</span>
                <img
                  src={arrowRightIcon}
                  alt="Arrow"
                  className="w-3.5 h-3.5 object-contain filter brightness-0 invert transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Matter;
