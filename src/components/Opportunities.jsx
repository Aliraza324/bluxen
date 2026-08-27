import React from "react";
import { motion } from "motion/react";
import opportunitiesBg from "../assets/images/opportunitiesBg.jpg";
import chartLineIcon from "../assets/images/chartline.png";
import searchIcon from "../assets/images/search.png";
import targetIcon from "../assets/images/target.png";
import arrowRightIcon from "../assets/images/arrow-right.png";

import {
  opportunitiesHeaderVariants,
  opportunitiesCardVariants,
  opportunitiesCardHover,
  containerStagger,
  buttonHover,
  buttonTap,
} from "../animations/animation";

const Opportunities = () => {
  const cards = [
    {
      id: 1,
      title: "Market Insight",
      description: "Understand what's moving locally.",
      icon: chartLineIcon,
      hasLine: false,
      alt: "Market Insight Chart",
    },
    {
      id: 2,
      title: "Opportunity Analysis",
      description: "Look beyond the listing price.",
      icon: searchIcon,
      hasLine: true,
      alt: "Opportunity Analysis Search",
    },
    {
      id: 3,
      title: "Long-Term Thinking",
      description: "Build around your investment goals.",
      icon: targetIcon,
      hasLine: true,
      alt: "Long-Term Thinking Target",
    },
  ];

  return (
    <section className="relative min-h-[750px] lg:min-h-[850px] w-full flex flex-col justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden isolate">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
        <img
          src={opportunitiesBg}
          alt="Luxury Villa Sunset Ocean View"
          className="w-full h-full object-cover object-left md:object-center"
        />
        {/* White Gradient Fade on the Right for Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white w-full md:w-[70%] lg:w-[62%] ml-auto" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-end">
        {/* Right Content Column */}
        <div className="w-full lg:w-[58%] xl:w-[54%] ml-auto flex flex-col">
          {/* Header */}
          <motion.div
            variants={opportunitiesHeaderVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black text-slate-900 tracking-tight leading-[1.08] mb-5 sm:mb-6">
              Your property
              <br />
              can be more
              <br />
              than a <span className="text-[#0B3A60]">property.</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-medium leading-relaxed mb-8 sm:mb-10 max-w-xl">
              Great investment starts with the right location. We help you understand location,
              market conditions, rental potential, and long-term opportunity before you make a
              decision.
            </p>
          </motion.div>

          {/* 3 Insight Cards Grid */}
          <motion.div
            variants={containerStagger(0.15, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10"
          >
            {cards.map((item) => (
              <motion.div
                key={item.id}
                variants={opportunitiesCardVariants}
                whileHover={opportunitiesCardHover}
                className="bg-white rounded-3xl p-5 sm:p-6 shadow-[0_15px_35px_-10px_rgba(11,58,96,0.08)] border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer group min-h-[170px]"
              >
                <div>
                  {/* Soft Blue Circle Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-sky-50 flex items-center justify-center text-[#0B3A60] mb-4 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={item.icon}
                      alt={item.alt}
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5 leading-snug group-hover:text-[#0B3A60] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Line Accent for active cards */}
                {item.hasLine && (
                  <div className="w-5 h-0.5 bg-[#0B3A60] rounded-full mt-4" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Action Button */}
          <motion.button
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="bg-[#0B3A60] hover:bg-[#07243c] text-white font-bold text-xs sm:text-sm px-7 py-3.5 sm:py-4 rounded-full flex items-center gap-2.5 shadow-lg shadow-[#0B3A60]/25 transition-all duration-200 w-fit cursor-pointer group"
          >
            <span>More Investment Opportunities</span>
            <img
              src={arrowRightIcon}
              alt="Arrow"
              className="w-3.5 h-3.5 object-contain filter brightness-0 invert transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
