import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "../assets/images/Group.png";
import { footerVariants } from "../animations/animation";

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const exploreLinks = [
    { label: "Buy", to: "#buy" },
    { label: "Sell", to: "#sell" },
    { label: "Invest", to: "#invest" },
    { label: "Commercial", to: "#commercial" },
    { label: "Communities", to: "#communities" },
  ];

  const resourceLinks = [
    { label: "Buyers Guide", to: "#buyers-guide" },
    { label: "Sellers Guide", to: "#sellers-guide" },
    { label: "Mortgage Calculator", to: "#calculator" },
    { label: "Market Insights", to: "#insights" },
    { label: "Free Guide", to: "#free-guide" },
  ];

  const companyLinks = [
    { label: "About", to: "#about" },
    { label: "Our Team", to: "#team" },
    { label: "Why Bluxen", to: "#why-bluxen" },
    { label: "Contact", to: "#contact" },
  ];

  const socialLinks = [
    { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
    { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="w-full bg-[#010b17] text-white pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans'] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 sm:mb-16">
            {/* Column 1: Logo & Brand Description & Socials */}
            <div className="lg:col-span-4 flex flex-col pr-0 lg:pr-6">
              <Link to="/" className="inline-block w-fit mb-5">
                <img
                  src={logoImg}
                  alt="Bluxen Real Estate Logo"
                  className="h-9 sm:h-10 w-auto object-contain filter brightness-0 invert"
                />
              </Link>

              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-[300px] mb-6">
                Real estate expertise. Personal service. Long-term relationships built on absolute
                trust and clarity.
              </p>

              {/* Social Icon Buttons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0B3A60] border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: EXPLORE */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mb-4 sm:mb-5">
                EXPLORE
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {exploreLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: RESOURCES */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mb-4 sm:mb-5">
                RESOURCES
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {resourceLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: COMPANY */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mb-4 sm:mb-5">
                COMPANY
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: CONTACT US */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mb-4 sm:mb-5">
                CONTACT US
              </h4>
              <ul className="space-y-3.5 sm:space-y-4">
                <li>
                  <a
                    href="tel:8585350000"
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-sky-400 shrink-0 group-hover:text-sky-300" />
                    <span>(858) 535-0000</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@bluxen.com"
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-sky-400 shrink-0 group-hover:text-sky-300" />
                    <span>info@bluxen.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>San Diego, California</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-white/10 mb-8 sm:mb-10" />

          {/* Bottom Bar: Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
            <p>© 2026 BLUXEN Real Estate. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
