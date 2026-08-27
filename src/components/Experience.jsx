import React from "react";
import { motion } from "motion/react";
import locationIcon from "../assets/images/location.png";
import compassIcon from "../assets/images/compass.png";
import shieldCheckIcon from "../assets/images/shield-check.png";
import {
  containerStagger,
  experienceHeaderVariants,
  experienceCardVariants,
  experienceCardHover,
  experienceIconHover,
} from "../animations/animation";

const Experience = () => {
  const features = [
    {
      number: "01",
      title: "Local Knowledge",
      description: "Deep understanding of San Diego communities and market conditions.",
      icon: locationIcon,
      alt: "Local Knowledge Location Marker",
    },
    {
      number: "02",
      title: "Strategic Guidance",
      description: "Clear advice, smart negotiation, and informed decisions at every step.",
      icon: compassIcon,
      alt: "Strategic Guidance Compass",
    },
    {
      number: "03",
      title: "Beyond the Closing",
      description: "Our relationship does not end when the transaction does.",
      icon: shieldCheckIcon,
      alt: "Beyond the Closing Shield",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          variants={experienceHeaderVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0B3A60] inline-block mb-3 sm:mb-4">
            THE BLUXEN DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.15]">
            Small enough to know you.
            <br />
            Experienced enough to guide you.
          </h2>
        </motion.div>

        {/* 3 Experience Cards Grid */}
        <motion.div
          variants={containerStagger(0.18, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl"
        >
          {features.map((item) => (
            <motion.div
              key={item.number}
              variants={experienceCardVariants}
              whileHover={experienceCardHover}
              className="relative rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center transition-colors duration-300 border border-[#e2edf8] shadow-[0_15px_35px_-10px_rgba(11,58,96,0.06)] cursor-pointer group"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 55%, #eaf2fb 100%)",
              }}
            >
              {/* Dark Navy Circle Icon with Micro-Interaction */}
              <motion.div
                whileHover={experienceIconHover}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0B3A60] flex items-center justify-center mb-6 sm:mb-7 shadow-md shrink-0 transition-colors duration-300 group-hover:bg-[#082944]"
              >
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain filter brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>

              {/* Card Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 sm:mb-3 tracking-tight group-hover:text-[#0B3A60] transition-colors duration-200">
                {item.number} — {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[270px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
