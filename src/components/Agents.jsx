import React from "react";
import { motion } from "motion/react";

import faridImg from "../assets/images/13cea26c212c2e3dbba0a743e496a887a097a124.png";
import peggyImg from "../assets/images/3b53818bd10b8d3eb001e3739a829d50a0e0ed45.png";
import nasimImg from "../assets/images/ae3a4f501debfd6a409c9727581be0fbcbb193bd.png";
import navidImg from "../assets/images/96055d83d5d58b71e102ca38f7dc9d6ef0506926.png";
import mahnoushImg from "../assets/images/584a7ba32d8932f0559badf3a9322d7a82a35471.png";
import micahImg from "../assets/images/c445d6d044db67c96e5e0faa70872e9a3e615578.png";

import {
  agentsHeaderVariants,
  agentsCardVariants,
  agentsCardHover,
  containerStagger,
} from "../animations/animation";

const Agents = () => {
  const agentsList = [
    {
      id: 1,
      name: "Farid Khayamian",
      role: "Founder and Broker, Bluxen",
      image: faridImg,
      linkedin: "#",
    },
    {
      id: 2,
      name: "Peggy Khayamian",
      role: "CEO and Co-Founder, Bluxen",
      image: peggyImg,
      linkedin: "#",
    },
    {
      id: 3,
      name: "Nasim Khayamian",
      role: "Realtor, Bluxen",
      image: nasimImg,
      linkedin: "#",
    },
    {
      id: 4,
      name: "Navid Namdar",
      role: "Realtor, Bluxen",
      image: navidImg,
      linkedin: "#",
    },
    {
      id: 5,
      name: "Mahnoush Bass",
      role: "Realtor, Bluxen",
      image: mahnoushImg,
      linkedin: "#",
    },
    {
      id: 6,
      name: "Micah Newton",
      role: "Realtor, Bluxen",
      image: micahImg,
      linkedin: "#",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          variants={agentsHeaderVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow Pill */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-[#0B3A60] text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] mb-3 sm:mb-4">
            EXPERT GUIDANCE
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">
            Meet Our Agents
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Our experienced and professional agents are with you throughout your journey,
            offering market insights and personalized dedication.
          </p>
        </motion.div>

        {/* 6 Agents Cards Grid (3 Columns x 2 Rows) */}
        <motion.div
          variants={containerStagger(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full max-w-6xl"
        >
          {agentsList.map((agent) => (
            <motion.div
              key={agent.id}
              variants={agentsCardVariants}
              whileHover={agentsCardHover}
              className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[3/3.8] sm:aspect-[3.2/4] bg-slate-100 border border-slate-100 shadow-[0_12px_35px_-10px_rgba(11,58,96,0.08)] group cursor-pointer"
            >
              {/* Agent Photo */}
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom White Glassmorphic Info Pill Box */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 pl-4 sm:pl-4.5 flex items-center justify-between shadow-lg border border-white/90 transition-transform duration-300">
                <div className="pr-2">
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-slate-900 leading-snug tracking-tight">
                    {agent.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                    {agent.role}
                  </p>
                </div>

                {/* LinkedIn Badge Button */}
                <a
                  href={agent.linkedin}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`LinkedIn profile of ${agent.name}`}
                  className="w-8 h-8 rounded-full bg-sky-50 hover:bg-[#0B3A60] text-[#0B3A60] hover:text-white flex items-center justify-center transition-colors duration-200 shrink-0 shadow-xs"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Agents;
