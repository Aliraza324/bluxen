import React from "react";
import { motion } from "motion/react";
import buyImg from "../assets/images/62701b0b7f1089f490e05ee0466777cebaf77b61.png";
import sellImg from "../assets/images/7f02116985d577f635316d9b74ced8d75d5682a1.png";
import investImg from "../assets/images/a20b4ecf2e8ea4ec0f95af49ca8560a92d7486ad.png";
import commercialImg from "../assets/images/c5b4658d3b6b4cef7c07100e26c1294e70dfa185.png";

import houseIcon from "../assets/images/house.png";
import tagIcon from "../assets/images/tag.png";
import chartLineIcon from "../assets/images/chart-line.png";
import buildingIcon from "../assets/images/building.png";
import wavesImg from "../assets/images/waves.png";
import arrowRightIcon from "../assets/images/arrow-right.png";

import {
  serviceHeaderVariants,
  serviceCardVariants,
  serviceCardHover,
  serviceIconHover,
  containerStagger,
  buttonTap,
} from "../animations/animation";

const Service = () => {
  const services = [
    {
      id: "buy",
      category: "BUY",
      title: "Find the right property with confidence.",
      description: "We help you find the right home and negotiate with confidence.",
      btnText: "Explore Buying",
      image: buyImg,
      icon: houseIcon,
      alt: "Luxury Villa Pool for Buying",
    },
    {
      id: "sell",
      category: "SELL",
      title: "Sell with strategy, not guesswork.",
      description: "Smart pricing, strong marketing, better results.",
      btnText: "Explore Selling",
      image: sellImg,
      icon: tagIcon,
      alt: "Luxury Modern Living Room for Selling",
    },
    {
      id: "invest",
      category: "INVEST",
      title: "Build a smarter real estate portfolio.",
      description: "Better opportunities. Stronger decisions.",
      btnText: "Explore Investing",
      image: investImg,
      icon: chartLineIcon,
      alt: "Coastal Skyline for Investing",
    },
    {
      id: "commercial",
      category: "COMMERCIAL",
      title: "Make your next commercial move count.",
      description: "Expert guidance for acquisitions, sales & opportunities.",
      btnText: "Explore Commercial",
      image: commercialImg,
      icon: buildingIcon,
      alt: "City High-Rise Commercial Towers",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8fbfe] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden">
      {/* Top Right Subtle Wavy Accents */}
      <div className="absolute top-4 right-0 sm:right-6 lg:right-12 w-64 sm:w-80 lg:w-96 opacity-60 pointer-events-none z-0">
        <img src={wavesImg} alt="Wave lines" className="w-full h-auto object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={serviceHeaderVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 sm:mb-16 max-w-4xl relative"
        >
          {/* Eyebrow Tag with underline */}
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0B3A60] block">
              OUR SERVICES
            </span>
            <div className="w-6 h-0.5 bg-[#0B3A60] rounded-full mt-1.5" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.12]">
              One team.
              <br />
              Every real estate goal.
            </h2>

            {/* Ambient Dot Matrix */}
            <div className="hidden sm:grid grid-cols-6 gap-2 opacity-50 pb-2">
              {Array.from({ length: 18 }).map((_, idx) => (
                <span key={idx} className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4 Service Cards Grid */}
        <motion.div
          variants={containerStagger(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-7"
        >
          {services.map((item) => (
            <motion.div
              key={item.id}
              variants={serviceCardVariants}
              whileHover={serviceCardHover}
              className="bg-white rounded-3xl border border-slate-100/90 shadow-[0_10px_30px_-5px_rgba(11,58,96,0.06)] overflow-hidden flex flex-col justify-between transition-colors duration-300 group cursor-pointer"
            >
              {/* Card Top: Full-width Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Body: Text Content & Uncut Overlapping Badge */}
              <div className="relative pt-8 pb-6 sm:pb-7 px-5 sm:px-6 flex-1 flex flex-col justify-between">
                {/* Overlapping Dark Navy Circle Badge (Unclipped) */}
                <motion.div
                  whileHover={serviceIconHover}
                  className="absolute -top-6 left-5 sm:left-6 w-12 h-12 rounded-full bg-[#0B3A60] border-[3px] border-white shadow-md flex items-center justify-center z-20 shrink-0"
                >
                  <img
                    src={item.icon}
                    alt={item.category}
                    className="w-5 h-5 object-contain filter brightness-0 invert"
                  />
                </motion.div>

                <div>
                  {/* Category Tag */}
                  <div className="mb-2.5">
                    <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#0B3A60] uppercase">
                      {item.category}
                    </span>
                    <div className="w-4 h-0.5 bg-[#0B3A60] rounded-full mt-0.5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 leading-snug mb-2 group-hover:text-[#0B3A60] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Explore Button */}
                <motion.button
                  whileTap={buttonTap}
                  className="w-fit bg-sky-50 hover:bg-[#0B3A60] text-[#0B3A60] hover:text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-200 group/btn cursor-pointer"
                >
                  <span>{item.btnText}</span>
                  <img
                    src={arrowRightIcon}
                    alt="Arrow"
                    className="w-3.5 h-3.5 object-contain filter group-hover/btn:brightness-0 group-hover/btn:invert transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
