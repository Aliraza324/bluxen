import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import houseIcon from "../assets/images/house.png";
import planeIcon from "../assets/images/plane.png";
import briefcaseIcon from "../assets/images/icon-briefcase.png";
import bedIcon from "../assets/images/bed.png";
import bathIcon from "../assets/images/bath.png";
import searchIcon from "../assets/images/search.png";
import arrowRightIcon from "../assets/images/arrow-right.png";

import {
  heroHeadlineVariants,
  heroLineVariants,
  filterTabsVariants,
  searchBarVariants,
  dropdownMenuVariants,
  buttonHover,
  buttonTap,
  pillTabHover,
} from "../animations/animation";

const Hero = () => {
  // Active Filter Tab (BUY, SELL, INVEST)
  const [activeTab, setActiveTab] = useState("buy");

  // Search filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("Property Type");
  const [priceRange, setPriceRange] = useState("Price Range");
  const [beds, setBeds] = useState("Beds");
  const [baths, setBaths] = useState("Baths");

  // Dropdown open states
  const [openDropdown, setOpenDropdown] = useState(null);
  const filterRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleSelectOption = (setter, value) => {
    setter(value);
    setOpenDropdown(null);
  };

  const tabs = [
    { id: "buy", label: "BUY", icon: planeIcon },
    { id: "sell", label: "SELL", icon: null, flagIcon: true },
    { id: "invest", label: "INVEST", icon: briefcaseIcon },
  ];

  const propertyTypes = [
    "All Types",
    "Luxury Villa",
    "Modern Apartment",
    "Penthouse",
    "Waterfront Estate",
    "Commercial Office",
    "Retail Space",
  ];

  const priceRanges = [
    "Any Price",
    "$300k - $700k",
    "$700k - $1.5M",
    "$1.5M - $3M",
    "$3M - $6M",
    "$6M+",
  ];

  const bedOptions = ["Any Beds", "1+ Bed", "2+ Beds", "3+ Beds", "4+ Beds", "5+ Beds"];
  const bathOptions = ["Any Baths", "1+ Bath", "2+ Baths", "3+ Baths", "4+ Baths"];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching properties with:", {
      tab: activeTab,
      query: searchQuery,
      propertyType,
      priceRange,
      beds,
      baths,
    });
  };

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between overflow-visible">
      {/* Hero Body Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-4 sm:pt-8 md:pt-10 pb-8 flex-1 flex flex-col justify-between">
        {/* Upper Hero Grid: Left Typography + Right Floating Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
          {/* Left Column: Huge Headline */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col">
            <motion.div
              variants={heroHeadlineVariants}
              initial="hidden"
              animate="show"
              className="space-y-1 sm:space-y-2"
            >
              <motion.div variants={heroLineVariants} className="overflow-hidden">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black text-slate-900 tracking-tight leading-[1.04]">
                  Find Your
                </h1>
              </motion.div>

              <motion.div variants={heroLineVariants} className="overflow-hidden">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black text-slate-900 tracking-tight leading-[1.04]">
                  Place. Build
                </h1>
              </motion.div>

              <motion.div variants={heroLineVariants} className="overflow-hidden pt-0.5">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black text-slate-900 tracking-tight leading-[1.04] flex items-baseline flex-wrap gap-x-3">
                  <span>Your</span>
                  <span className="relative inline-block text-[#0B3A60] font-black">
                    Future
                    {/* Curved underline accent */}
                    <svg
                      className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#0B3A60] overflow-visible"
                      viewBox="0 0 200 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12C50 2 150 2 198 12"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Luxury Badges (Static) */}
          <div className="lg:col-span-5 xl:col-span-6 relative h-auto lg:h-[340px] flex flex-col sm:flex-row lg:flex-col justify-end lg:justify-between items-start sm:items-center lg:items-end gap-4 sm:gap-6 pt-2 sm:pt-0">
            {/* Top Badge: RESIDENTIAL */}
            <div className="glass-card rounded-2xl md:rounded-3xl p-3 sm:p-4 pr-5 sm:pr-7 flex items-center gap-3.5 sm:gap-4 shadow-xl border border-white/80 lg:mr-8 xl:mr-16">
              {/* Dark Navy Circle Icon */}
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0B3A60] flex items-center justify-center shadow-md shrink-0">
                <img
                  src={houseIcon}
                  alt="Residential Property"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 uppercase">
                  RESIDENTIAL
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium">
                  Homes that fit your lifestyle.
                </p>
              </div>
            </div>

            {/* Bottom Badge: COMMERCIAL */}
            <div className="glass-card rounded-2xl md:rounded-3xl p-3 sm:p-4 pr-5 sm:pr-7 flex items-center gap-3.5 sm:gap-4 shadow-xl border border-white/80 lg:mr-0">
              {/* Dark Navy Circle Icon */}
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0B3A60] flex items-center justify-center shadow-md shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 8h2v2H5V8zm0 4h2v2H5v-2zm0 4h2v2H5v-2zm14 4H9V4h10v16zm-8-14h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-12h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 uppercase">
                  COMMERCIAL
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium">
                  Spaces that support your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Hero Section: Filter Tabs & Floating Search Bar */}
        <div className="mt-8 sm:mt-12 lg:mt-16 w-full space-y-3 sm:space-y-4 relative z-30" ref={filterRef}>
          {/* Filter Action Tabs (BUY, SELL, INVEST) */}
          <motion.div
            variants={filterTabsVariants}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 sm:gap-3 flex-wrap"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={pillTabHover}
                  whileTap={buttonTap}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-md cursor-pointer ${
                    isActive
                      ? "bg-[#0B3A60] text-white shadow-[#0B3A60]/25 ring-2 ring-[#0B3A60]/30"
                      : "glass-pill text-slate-700 hover:text-slate-950 hover:bg-white"
                  }`}
                >
                  {tab.icon && (
                    <img
                      src={tab.icon}
                      alt={tab.label}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain ${
                        isActive ? "filter brightness-0 invert" : ""
                      }`}
                    />
                  )}
                  {tab.flagIcon && (
                    <svg
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        isActive ? "text-white" : "text-slate-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                      />
                    </svg>
                  )}
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Search Filter Bar */}
          <motion.form
            onSubmit={handleSearchSubmit}
            variants={searchBarVariants}
            initial="hidden"
            animate="show"
            className="glass-search-bar rounded-3xl md:rounded-full p-2.5 sm:p-3 flex flex-col md:flex-row items-stretch md:items-center gap-2.5 lg:gap-3 w-full shadow-2xl relative z-30"
          >
            {/* Search Input */}
            <div className="flex-1 min-w-[200px] flex items-center gap-2.5 px-3.5 py-2.5 bg-white/70 hover:bg-white rounded-2xl md:rounded-full border border-slate-200/60 focus-within:border-[#0B3A60]/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0B3A60]/20 transition-all">
              <img src={searchIcon} alt="Search" className="w-4 h-4 object-contain opacity-70 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, neighborhood, or ZIP code"
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-500 focus:outline-none"
              />
            </div>

            {/* Filter Dropdown 1: Property Type */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("propertyType")}
                className={`w-full md:w-auto flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl md:rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                  openDropdown === "propertyType"
                    ? "bg-white border-[#0B3A60] text-[#0B3A60] shadow-sm"
                    : "bg-white/70 hover:bg-white border-slate-200/60 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-2">
                  <img src={houseIcon} alt="Property" className="w-4 h-4 object-contain opacity-75 shrink-0" />
                  <span className="truncate max-w-[130px]">{propertyType}</span>
                </div>
                <svg
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                    openDropdown === "propertyType" ? "rotate-180 text-[#0B3A60]" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {openDropdown === "propertyType" && (
                  <motion.div
                    variants={dropdownMenuVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute left-0 top-full mt-2.5 w-56 rounded-2xl bg-white border border-slate-100 shadow-[0_25px_60px_-15px_rgba(11,58,96,0.25)] p-2 z-50 max-h-64 overflow-y-auto"
                  >
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleSelectOption(setPropertyType, type)}
                        className={`w-full text-left px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                          propertyType === type
                            ? "bg-[#0B3A60] text-white"
                            : "text-slate-700 hover:bg-slate-100/80"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Filter Dropdown 2: Price Range */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("priceRange")}
                className={`w-full md:w-auto flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl md:rounded-full text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  openDropdown === "priceRange"
                    ? "bg-white border-[#0B3A60] text-[#0B3A60] shadow-sm"
                    : "bg-white/70 hover:bg-white border-slate-200/60 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="truncate max-w-[120px]">{priceRange}</span>
                </div>
                <svg
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                    openDropdown === "priceRange" ? "rotate-180 text-[#0B3A60]" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {openDropdown === "priceRange" && (
                  <motion.div
                    variants={dropdownMenuVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute left-0 top-full mt-2.5 w-48 rounded-2xl bg-white border border-slate-100 shadow-[0_25px_60px_-15px_rgba(11,58,96,0.25)] p-2 z-50 max-h-64 overflow-y-auto"
                  >
                    {priceRanges.map((price) => (
                      <button
                        key={price}
                        type="button"
                        onClick={() => handleSelectOption(setPriceRange, price)}
                        className={`w-full text-left px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                          priceRange === price
                            ? "bg-[#0B3A60] text-white"
                            : "text-slate-700 hover:bg-slate-100/80"
                        }`}
                      >
                        {price}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Filter Dropdown 3: Beds */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("beds")}
                className={`w-full md:w-auto flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl md:rounded-full text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  openDropdown === "beds"
                    ? "bg-white border-[#0B3A60] text-[#0B3A60] shadow-sm"
                    : "bg-white/70 hover:bg-white border-slate-200/60 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-2">
                  <img src={bedIcon} alt="Beds" className="w-4 h-4 object-contain opacity-75 shrink-0" />
                  <span>{beds}</span>
                </div>
                <svg
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                    openDropdown === "beds" ? "rotate-180 text-[#0B3A60]" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {openDropdown === "beds" && (
                  <motion.div
                    variants={dropdownMenuVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute left-0 top-full mt-2.5 w-40 rounded-2xl bg-white border border-slate-100 shadow-[0_25px_60px_-15px_rgba(11,58,96,0.25)] p-2 z-50"
                  >
                    {bedOptions.map((bed) => (
                      <button
                        key={bed}
                        type="button"
                        onClick={() => handleSelectOption(setBeds, bed)}
                        className={`w-full text-left px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                          beds === bed
                            ? "bg-[#0B3A60] text-white"
                            : "text-slate-700 hover:bg-slate-100/80"
                        }`}
                      >
                        {bed}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Filter Dropdown 4: Baths */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("baths")}
                className={`w-full md:w-auto flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl md:rounded-full text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  openDropdown === "baths"
                    ? "bg-white border-[#0B3A60] text-[#0B3A60] shadow-sm"
                    : "bg-white/70 hover:bg-white border-slate-200/60 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-2">
                  <img src={bathIcon} alt="Baths" className="w-4 h-4 object-contain opacity-75 shrink-0" />
                  <span>{baths}</span>
                </div>
                <svg
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                    openDropdown === "baths" ? "rotate-180 text-[#0B3A60]" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {openDropdown === "baths" && (
                  <motion.div
                    variants={dropdownMenuVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute left-0 top-full mt-2.5 w-40 rounded-2xl bg-white border border-slate-100 shadow-[0_25px_60px_-15px_rgba(11,58,96,0.25)] p-2 z-50"
                  >
                    {bathOptions.map((bath) => (
                      <button
                        key={bath}
                        type="button"
                        onClick={() => handleSelectOption(setBaths, bath)}
                        className={`w-full text-left px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                          baths === bath
                            ? "bg-[#0B3A60] text-white"
                            : "text-slate-700 hover:bg-slate-100/80"
                        }`}
                      >
                        {bath}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Submit Button */}
            <motion.button
              type="submit"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="bg-[#0B3A60] hover:bg-[#07253e] text-white font-bold text-xs sm:text-sm px-6 py-3 sm:py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-[#0B3A60]/30 transition-all duration-200 cursor-pointer group shrink-0"
            >
              <span>Search</span>
              <img
                src={arrowRightIcon}
                alt="Arrow"
                className="w-3.5 h-3.5 object-contain filter brightness-0 invert transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
