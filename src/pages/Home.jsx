import React from "react";
import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Matter from "../components/Matter";
import Service from "../components/Service";
import Property from "../components/Property";
import Resource from "../components/Resource";
import Opportunities from "../components/Opportunities";
import Agents from "../components/Agents";
import Reviews from "../components/Reviews";
import News from "../components/News";
import Starts from "../components/Starts";
import Footer from "../layout/Footer";
import heroBg from "../assets/images/heroBg.png";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white selection:bg-[#0B3A60] selection:text-white font-['Plus_Jakarta_Sans']">
      {/* Hero Section with Full Background & Floating Navbar */}
      <div className="relative min-h-screen w-full flex flex-col justify-between z-30 pb-12 sm:pb-16 lg:pb-20">
        {/* Background Image Container with Overflow Hidden */}
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt="Bluxen Luxury Villa Sunset"
            className="w-full h-full object-cover object-center"
          />
          {/* Soft overlay gradient on the left for crisp typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50/70 via-sky-50/30 to-transparent w-full md:w-[60%] lg:w-[50%]" />
        </div>

        {/* Floating Navbar */}
        <div className="relative z-30 w-full">
          <Navbar />
        </div>

        {/* Main Hero Body */}
        <div className="relative z-20 flex-1 flex flex-col justify-between">
          <Hero />
        </div>
      </div>

      {/* Experience Section (The Bluxen Difference) */}
      <div className="relative z-10">
        <Experience />
      </div>

      {/* Matter Section (Why It Matters To You) */}
      <Matter />

      {/* Service Section (Our Services) */}
      <Service />

      {/* Property Section (Featured Opportunity) */}
      <Property />

      {/* Resource Section (Make your next move with clarity) */}
      <Resource />

      {/* Opportunities Section (Your property can be more than a property) */}
      <Opportunities />

      {/* Agents Section (Meet Our Agents) */}
      <Agents />

      {/* Reviews Section (What People Say About Us) */}
      <Reviews />

      {/* News Section (Stay Ahead of the Market) */}
      <News />

      {/* Starts Section (Take the Next Step) */}
      <Starts />

      {/* Footer Layout */}
      <Footer />
    </div>
  );
};

export default Home;
