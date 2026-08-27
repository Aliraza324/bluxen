import React from "react";
import { motion } from "motion/react";

import marinaImg from "../assets/images/news-marina.jpg";
import facadeImg from "../assets/images/news-facade.jpg";
import suburbsImg from "../assets/images/villa-pool.jpg";
import arrowRightIcon from "../assets/images/arrow-right.png";

import {
  newsHeaderVariants,
  newsCardVariants,
  newsCardHover,
  containerStagger,
  buttonTap,
} from "../animations/animation";

const News = () => {
  const articles = [
    {
      id: 1,
      category: "MARKET REPORT",
      date: "August 24, 2026",
      title: "Foreign Buyers Pull Back From U.S. Housing Market in 2026",
      image: marinaImg,
      alt: "Aerial Coastal City Marina Harbor",
    },
    {
      id: 2,
      category: "COMMERCIAL",
      date: "August 21, 2026",
      title: "The Facade Line Item: How Exterior Envelope Condition Moves Commercial Property Value",
      image: facadeImg,
      alt: "Modern Skyscraper Glass Facade",
    },
    {
      id: 3,
      category: "LOCAL GUIDE",
      date: "May 18, 2026",
      title: "10 Best North County Inland Neighborhoods to Live in 2026-2027",
      image: suburbsImg,
      alt: "Luxury Residential Neighborhood Estate",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          variants={newsHeaderVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow Tag */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-[#0B3A60] text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] mb-3 sm:mb-4">
            LATEST NEWS
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">
            Stay Ahead of the Market
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            Real estate news and top headlines from major news sources translated into a real estate
            context.
          </p>
        </motion.div>

        {/* 3 Articles Grid */}
        <motion.div
          variants={containerStagger(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl"
        >
          {articles.map((item) => (
            <motion.article
              key={item.id}
              variants={newsCardVariants}
              whileHover={newsCardHover}
              className="bg-white rounded-3xl border border-slate-100/90 shadow-[0_10px_30px_-5px_rgba(11,58,96,0.06)] overflow-hidden flex flex-col justify-between transition-colors duration-300 group cursor-pointer"
            >
              {/* Article Top Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Date Row */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0B3A60]">
                      {item.category}
                    </span>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-400">
                      {item.date}
                    </span>
                  </div>

                  {/* Headline Title */}
                  <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 leading-snug tracking-tight mb-6 group-hover:text-[#0B3A60] transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>

                {/* Read Article Action Button */}
                <motion.button
                  whileTap={buttonTap}
                  className="w-fit bg-sky-50 hover:bg-[#0B3A60] text-[#0B3A60] hover:text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-200 group/btn cursor-pointer"
                >
                  <span>Read Article</span>
                  <img
                    src={arrowRightIcon}
                    alt="Arrow"
                    className="w-3.5 h-3.5 object-contain filter group-hover/btn:brightness-0 group-hover/btn:invert transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default News;
