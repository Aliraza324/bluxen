import React from "react";
import { motion } from "motion/react";
import propertyBg from "../assets/images/propertBg.png";
import houseIcon from "../assets/images/house.png";
import bedIcon from "../assets/images/bed.png";
import bathIcon from "../assets/images/bath.png";
import arrowRightIcon from "../assets/images/arrow-right.png";

import {
  propertyHeaderVariants,
  propertyCardVariants,
  propertyCardHover,
  containerStagger,
  buttonHover,
  buttonTap,
} from "../animations/animation";

const Property = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Coastal Residence",
      location: "San Diego, California",
      price: "$2,450,000",
      beds: "4 Beds",
      baths: "3.5 Baths",
      sqft: "2,850 Sq Ft",
    },
    {
      id: 2,
      title: "Modern Coastal Residence",
      location: "San Diego, California",
      price: "$2,450,000",
      beds: "4 Beds",
      baths: "3.5 Baths",
      sqft: "2,850 Sq Ft",
    },
    {
      id: 3,
      title: "Modern Coastal Residence",
      location: "San Diego, California",
      price: "$2,450,000",
      beds: "4 Beds",
      baths: "3.5 Baths",
      sqft: "2,850 Sq Ft",
    },
  ];

  return (
    <section className="relative min-h-[900px] w-full flex flex-col justify-between py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden isolate">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
        <img
          src={propertyBg}
          alt="Luxury Architecture Villa Property Sunset"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Ambient Left Gradient for Maximum Headline Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-full md:w-[70%] lg:w-[55%]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Header */}
        <motion.div
          variants={propertyHeaderVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl pt-2 sm:pt-4"
        >
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-5 h-0.5 bg-[#0B3A60] rounded-full" />
            <span className="text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0B3A60]">
              FEATURED OPPORTUNITY
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-slate-900 tracking-tight leading-[1.08] mb-12 sm:mb-16">
            A property
            <br />
            worth looking
            <br />
            <span className="text-[#0B3A60]">twice</span> at.
          </h2>
        </motion.div>

        {/* 3 Property Cards Row */}
        <motion.div
          variants={containerStagger(0.18, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 xl:gap-8 w-full mt-auto"
        >
          {properties.map((item) => (
            <motion.div
              key={item.id}
              variants={propertyCardVariants}
              whileHover={propertyCardHover}
              className="bg-white rounded-[28px] sm:rounded-3xl p-6 sm:p-7 shadow-[0_20px_45px_-10px_rgba(11,58,96,0.14)] border border-slate-100 relative flex flex-col justify-between transition-colors duration-300 group cursor-pointer"
            >
              {/* Floating Top-Left House Icon Badge */}
              <div className="absolute -top-4 -left-2 sm:-left-3 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center text-[#0B3A60] z-20 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={houseIcon}
                  alt="House"
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain"
                />
              </div>

              <div>
                {/* Title */}
                <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 mb-1 group-hover:text-[#0B3A60] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 mb-4">
                  <svg
                    className="w-3.5 h-3.5 text-[#0B3A60] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item.location}</span>
                </div>

                {/* Price */}
                <div className="text-2xl sm:text-[26px] font-black text-[#0B3A60] tracking-tight mb-5">
                  {item.price}
                </div>

                {/* Specs Divider & Info */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold border-t border-slate-100 pt-4 mb-5">
                  {/* Beds */}
                  <div className="flex items-center gap-1.5">
                    <img src={bedIcon} alt="Beds" className="w-4 h-4 object-contain opacity-70" />
                    <span>{item.beds}</span>
                  </div>

                  {/* Baths */}
                  <div className="flex items-center gap-1.5">
                    <img src={bathIcon} alt="Baths" className="w-4 h-4 object-contain opacity-70" />
                    <span>{item.baths}</span>
                  </div>

                  {/* Sq Ft */}
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                    <span>{item.sqft}</span>
                  </div>
                </div>
              </div>

              {/* View Property Action Button */}
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="w-full bg-[#0B3A60] hover:bg-[#07243c] text-white font-bold text-xs sm:text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-[#0B3A60]/20 transition-all duration-200 cursor-pointer group/btn"
              >
                <span>View Property</span>
                <img
                  src={arrowRightIcon}
                  alt="Arrow"
                  className="w-3.5 h-3.5 object-contain filter brightness-0 invert transition-transform duration-200 group-hover/btn:translate-x-1"
                />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Property;
