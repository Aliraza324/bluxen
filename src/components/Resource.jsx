import React from "react";
import { motion } from "motion/react";
import trendingUpIcon from "../assets/images/trending-up.png";
import circleXIcon from "../assets/images/circle-x.png";
import calculatorIcon from "../assets/images/calculator.png";
import arrowRightIcon from "../assets/images/arrow-right.png";

import {
  resourceContainerVariants,
  resourceCardHover,
  buttonHover,
  buttonTap,
} from "../animations/animation";

const Resource = () => {
  const resourceItems = [
    {
      id: "seller",
      title: "Seller's",
      subtitle: "Guide",
      icon: trendingUpIcon,
      alt: "Seller's Guide Trending Up",
    },
    {
      id: "buyer",
      title: "Buyer's",
      subtitle: "Guide",
      icon: circleXIcon,
      alt: "Buyer's Guide Compass Target",
    },
    {
      id: "mortgage",
      title: "Mortgage",
      subtitle: "Calculator",
      icon: calculatorIcon,
      alt: "Mortgage Calculator",
    },
  ];

  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Outer Container */}
        <motion.div
          variants={resourceContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[32px] sm:rounded-[44px] bg-white border border-slate-100/90 shadow-[0_15px_45px_-15px_rgba(11,58,96,0.08)] p-4 sm:p-6 lg:p-7 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8"
        >
          {/* Left Elevated Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-[0_20px_45px_-10px_rgba(11,58,96,0.16)] border border-slate-100 flex flex-col justify-between w-full lg:max-w-[340px] shrink-0 min-h-[250px] relative z-20">
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#0B3A60] block mb-3">
                RESOURCES
              </span>
              <h2 className="text-2xl sm:text-[27px] font-black text-[#0B3A60] tracking-tight leading-[1.2] mb-6">
                Make your next
                <br />
                move with clarity.
              </h2>
            </div>

            {/* Explore Resources CTA Button */}
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="bg-[#0B3A60] hover:bg-[#07243c] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 shadow-md shadow-[#0B3A60]/20 w-fit transition-all duration-200 cursor-pointer group"
            >
              <span>Explore Resources</span>
              <img
                src={arrowRightIcon}
                alt="Arrow"
                className="w-3.5 h-3.5 object-contain filter brightness-0 invert transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.button>
          </div>

          {/* Right 3 Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 flex-1 w-full">
            {resourceItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={resourceCardHover}
                className="bg-[#ebf4fd] hover:bg-[#e0effd] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-colors duration-200 cursor-pointer min-h-[170px] sm:min-h-[190px] shadow-xs group"
              >
                {/* Dark Navy Circle Icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0B3A60] flex items-center justify-center text-white mb-3.5 shadow-sm transition-transform duration-300 group-hover:scale-108 shrink-0">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter brightness-0 invert"
                  />
                </div>

                {/* Card Label */}
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug tracking-tight">
                  {item.title}
                  <br />
                  {item.subtitle}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resource;
