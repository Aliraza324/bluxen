import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/images/Group.png";
import {
  navbarVariants,
  dropdownMenuVariants,
  mobileMenuVariants,
} from "../animations/animation";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll blur enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const navLinks = [
    {
      name: "ABOUT US",
      hasDropdown: true,
      id: "about",
      items: [
        { label: "Our Story & Vision", to: "#story" },
        { label: "Executive Leadership", to: "#team" },
        { label: "Awards & Recognition", to: "#awards" },
        { label: "Careers at Bluxen", to: "#careers" },
      ],
    },
    {
      name: "BUYERS & SELLERS",
      hasDropdown: true,
      id: "buyers-sellers",
      items: [
        { label: "Buy a Luxury Home", to: "#buy" },
        { label: "Sell Your Property", to: "#sell" },
        { label: "Home Valuation", to: "#valuation" },
        { label: "Market Trends & Insights", to: "#insights" },
      ],
    },
    {
      name: "COMMERCIAL PROPERTIES",
      hasDropdown: false,
      to: "#commercial",
    },
    {
      name: "RESIDENTIAL PROPERTIES",
      hasDropdown: false,
      to: "#residential",
    },
    {
      name: "CONTACT US",
      hasDropdown: false,
      to: "#contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-12 pt-3 sm:pt-4 transition-all duration-300">
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="show"
        className={`mx-auto max-w-7xl rounded-2xl md:rounded-3xl transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-[0_12px_40px_-10px_rgba(11,58,96,0.15)] bg-white/75"
            : "glass-nav"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#0B3A60]/30 rounded-lg p-1"
          >
            <img
              src={logoImg}
              alt="Bluxen Real Estate Logo"
              className="h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div
            ref={dropdownRef}
            className="hidden xl:flex items-center gap-6 lg:gap-8 font-['Plus_Jakarta_Sans']"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.id)}
                      className={`flex items-center gap-1.5 text-[12px] lg:text-[13px] font-bold tracking-wider transition-colors duration-200 uppercase py-1.5 focus:outline-none cursor-pointer ${
                        activeDropdown === link.id
                          ? "text-[#0B3A60]"
                          : "text-slate-700 hover:text-[#0B3A60]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-250 ${
                          activeDropdown === link.id ? "rotate-180 text-[#0B3A60]" : "text-slate-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Popover */}
                    <AnimatePresence>
                      {activeDropdown === link.id && (
                        <motion.div
                          variants={dropdownMenuVariants}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          className="absolute left-0 mt-2.5 w-56 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/90 shadow-2xl p-2.5 z-50"
                        >
                          <div className="flex flex-col gap-1">
                            {link.items.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.to}
                                onClick={() => setActiveDropdown(null)}
                                className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#0B3A60] hover:bg-slate-50/80 rounded-xl transition-all duration-150 flex items-center justify-between group"
                              >
                                <span>{item.label}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#0B3A60] text-xs">
                                  →
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.to}
                    className="text-[12px] lg:text-[13px] font-bold tracking-wider text-slate-700 hover:text-[#0B3A60] transition-colors duration-200 uppercase py-1.5 inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0B3A60] transition-all duration-300 group-hover:w-full rounded-full" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:bg-white/50 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="xl:hidden px-4 pt-2 pb-5 border-t border-white/40 bg-white/95 backdrop-blur-2xl rounded-b-2xl md:rounded-b-3xl shadow-xl"
            >
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <div key={link.name} className="py-1">
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(link.id)}
                          className="w-full flex items-center justify-between py-2 text-sm font-bold tracking-wider text-slate-800 uppercase"
                        >
                          <span>{link.name}</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === link.id ? "rotate-180 text-[#0B3A60]" : "text-slate-500"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {activeDropdown === link.id && (
                          <div className="pl-3 py-1 flex flex-col gap-1 border-l-2 border-[#0B3A60]/30 my-1 bg-slate-50/50 rounded-r-xl">
                            {link.items.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.to}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-1.5 px-2 text-xs font-semibold text-slate-600 hover:text-[#0B3A60]"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm font-bold tracking-wider text-slate-800 hover:text-[#0B3A60] uppercase"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;