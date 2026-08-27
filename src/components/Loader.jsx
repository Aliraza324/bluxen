import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import logoImg from "../assets/images/Group.png";
import {
  loaderContainerVariants,
  loaderLogoVariants,
  loaderTextVariants,
} from "../animations/animation";

const Loader = ({
  isLoading = true,
  onComplete,
  minDuration = 2000,
  message = "Curating Exceptional Living",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusSteps = [
    "INITIALIZING SAN DIEGO PORTFOLIO",
    "CURATING EXCLUSIVE PROPERTIES",
    "PREPARING LUXURY EXPERIENCE",
  ];

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    const intervalTime = minDuration / 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          if (onComplete) onComplete();
          return 100;
        }

        // Cycle through status messages
        if (prev === 30) setStatusIndex(1);
        if (prev === 70) setStatusIndex(2);

        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isLoading, minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="bluxen-brand-loader"
          variants={shouldReduceMotion ? {} : loaderContainerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] bg-[#010b17] flex flex-col items-center justify-center font-['Plus_Jakarta_Sans'] overflow-hidden select-none"
        >
          {/* Subtle Luxury Ambient Radial Glow Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Top-Right Sky-Blue Glow */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.25, 1],
                      opacity: [0.15, 0.3, 0.15],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-[#0B3A60]/40 blur-[100px]"
            />

            {/* Center Azure Glow */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.15, 1],
                      opacity: [0.25, 0.45, 0.25],
                    }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-sky-500/15 blur-[120px]"
            />

            {/* Subtle Architectural Blueprint Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Center Brand Experience */}
          <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md px-6 text-center">
            {/* Animated Architectural Logo Vessel */}
            <motion.div
              variants={shouldReduceMotion ? {} : loaderLogoVariants}
              initial="hidden"
              animate="show"
              className="relative flex flex-col items-center mb-8"
            >
              {/* Outer Glowing Ring */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(11,58,96,0.35)] flex items-center justify-center p-5 mb-4 group overflow-hidden">
                {/* Shimmer Light Beam passing through logo */}
                {!shouldReduceMotion && (
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      repeatDelay: 0.8,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
                  />
                )}

                {/* Bluxen Emblem Logo */}
                <img
                  src={logoImg}
                  alt="Bluxen"
                  className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                />
              </div>

              {/* Animated Brand Wordmark with Expanding Tracking */}
              <motion.div
                initial={{ letterSpacing: "0.15em", opacity: 0 }}
                animate={{ letterSpacing: "0.32em", opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-black text-xl sm:text-2xl tracking-[0.32em] uppercase leading-none pl-1"
              >
                BLUXEN
              </motion.div>

              <div className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-sky-400 mt-1.5 pl-1">
                REAL ESTATE
              </div>
            </motion.div>

            {/* Tagline / Subtitle */}
            <motion.p
              variants={shouldReduceMotion ? {} : loaderTextVariants}
              initial="hidden"
              animate="show"
              className="text-xs sm:text-[13px] text-slate-400 font-medium tracking-wider mb-8"
            >
              {message}
            </motion.p>

            {/* High-End Hairline Laser Progress Line */}
            <div className="w-48 sm:w-60 flex flex-col items-center gap-3">
              {/* Progress Track */}
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-400 via-sky-200 to-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Status & Numeric Counter */}
              <div className="w-full flex items-center justify-between text-[10px] font-mono font-semibold tracking-wider text-slate-400">
                <span className="text-slate-500 truncate max-w-[170px] uppercase">
                  {statusSteps[statusIndex]}
                </span>
                <span className="text-sky-400 font-bold ml-2">
                  {String(progress).padStart(2, "0")}%
                </span>
              </div>
            </div>

            {/* Geographic Coordinates Micro-Footer */}
            <div className="mt-12 text-[9px] font-mono tracking-[0.25em] text-slate-400 uppercase">
              SAN DIEGO, CA • 32.7157° N, 117.1611° W
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
