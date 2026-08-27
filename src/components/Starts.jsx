import React from "react";
import { motion } from "motion/react";
import arrowRightIcon from "../assets/images/arrow-right.png";

import {
  startsContainerVariants,
  startsButtonHover,
  buttonTap,
} from "../animations/animation";

const Starts = () => {
  return (
    <section className="relative w-full bg-[#021327] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden isolate">
      {/* Background Radial Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(14, 80, 140, 0.45) 0%, rgba(2, 19, 39, 0.95) 75%, #010c1a 100%)",
        }}
      />

      {/* Subtle Top & Bottom Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          variants={startsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-5 h-0.5 bg-sky-400 rounded-full" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-sky-400">
              TAKE THE NEXT STEP
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[58px] font-black text-white tracking-tight leading-[1.12] mb-5 sm:mb-6">
            Your next move starts here
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            Whether you are buying your first home, selling a property, or looking for your next
            investment, our experienced San Diego team is ready to guide you.
          </p>

          {/* CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
            {/* Primary CTA: Start a Conversation */}
            <motion.button
              whileHover={startsButtonHover}
              whileTap={buttonTap}
              className="w-full sm:w-auto bg-[#0B3A60] hover:bg-[#0e4b7b] text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2.5 shadow-[0_10px_30px_rgba(11,58,96,0.6)] cursor-pointer group transition-all duration-200"
            >
              <span>Start a Conversation</span>
              <img
                src={arrowRightIcon}
                alt="Arrow"
                className="w-3.5 h-3.5 object-contain filter brightness-0 invert transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.button>

            {/* Secondary CTA: Explore Properties */}
            <motion.button
              whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.6)" }}
              whileTap={buttonTap}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-bold text-xs sm:text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 backdrop-blur-xs"
            >
              <span>Explore Properties</span>
              <span className="text-slate-300 font-bold text-xs">›</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Starts;
