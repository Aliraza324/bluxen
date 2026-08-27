/**
 * Bluxen Animation Library
 * High-performance, luxury animations powered by Motion (Framer Motion)
 */

export const transitions = {
  spring: {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  },
  smooth: {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.6,
  },
  luxury: {
    type: "tween",
    ease: [0.16, 1, 0.3, 1], // Custom luxury cubic-bezier
    duration: 0.85,
  },
  bouncy: {
    type: "spring",
    stiffness: 260,
    damping: 15,
  },
};

// Container Stagger Variant
export const containerStagger = (staggerChildren = 0.12, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Fade In from any direction
export const fadeIn = (direction = "up", delay = 0, duration = 0.6) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "tween",
      ease: [0.16, 1, 0.3, 1],
      duration,
      delay,
    },
  },
});

// Navbar drop-in animation
export const navbarVariants = {
  hidden: {
    opacity: 0,
    y: -40,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      delay: 0.1,
    },
  },
};

// Headline entrance variants
export const heroHeadlineVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const heroLineVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    skewY: 2,
  },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      type: "tween",
      ease: [0.16, 1, 0.3, 1],
      duration: 0.9,
    },
  },
};

// Floating Interactive Badges Entrance & Hover
export const heroBadgeVariants = (direction = "right", delay = 0.4) => ({
  hidden: {
    opacity: 0,
    x: direction === "right" ? 50 : -50,
    scale: 0.88,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 16,
      delay,
    },
  },
});

// Levitation ambient motion
export const floatingMotion = (duration = 5, yOffset = 8, delay = 0) => ({
  animate: {
    y: [0, -yOffset, 0],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    },
  },
});

// Filter Tabs entrance
export const filterTabsVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 18,
      delay: 0.45,
    },
  },
};

// Search Bar entrance
export const searchBarVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
      delay: 0.55,
    },
  },
};

// Interactive Dropdown Menu Popover
export const dropdownMenuVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.94,
    transformOrigin: "top center",
    pointerEvents: "none",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: "auto",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.94,
    pointerEvents: "none",
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

// Mobile Drawer Menu
export const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 22,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

// Button Micro-interactions
export const buttonTap = {
  scale: 0.96,
  transition: { duration: 0.1 },
};

export const buttonHover = {
  scale: 1.03,
  boxShadow: "0 10px 25px -5px rgba(11, 58, 96, 0.35)",
  transition: { duration: 0.2 },
};

export const pillTabHover = {
  scale: 1.04,
  y: -1,
  transition: { duration: 0.2 },
};

export const badgeHover = {
  scale: 1.04,
  y: -4,
  boxShadow: "0 25px 40px -10px rgba(15, 23, 42, 0.22)",
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

// Experience Section Animations
export const experienceHeaderVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const experienceCardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 16,
    },
  },
};

export const experienceCardHover = {
  y: -8,
  boxShadow: "0 25px 50px -12px rgba(11, 58, 96, 0.16)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

export const experienceIconHover = {
  scale: 1.12,
  transition: {
    type: "spring",
    stiffness: 350,
    damping: 15,
  },
};

// Matter (Why It Matters To You) Section Animations
export const matterImageVariants = {
  hidden: { opacity: 0, scale: 0.94, x: -30 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const matterOverlappingVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 35 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      delay: 0.35,
    },
  },
};

export const matterBadgeVariants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 15,
      delay: 0.45,
    },
  },
};

export const matterContentVariants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Service (Our Services) Section Animations
export const serviceHeaderVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const serviceCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

export const serviceCardHover = {
  y: -8,
  boxShadow: "0 25px 45px -10px rgba(11, 58, 96, 0.12)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

export const serviceIconHover = {
  scale: 1.15,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 15,
  },
};

// Property (Featured Opportunity) Section Animations
export const propertyHeaderVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const propertyCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 16,
    },
  },
};

export const propertyCardHover = {
  y: -8,
  boxShadow: "0 28px 55px -12px rgba(11, 58, 96, 0.18)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

// Resource Section Animations
export const resourceContainerVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const resourceCardHover = {
  y: -6,
  scale: 1.02,
  transition: {
    type: "spring",
    stiffness: 350,
    damping: 20,
  },
};

// Opportunities Section Animations
export const opportunitiesHeaderVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const opportunitiesCardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 16,
    },
  },
};

export const opportunitiesCardHover = {
  y: -6,
  boxShadow: "0 22px 45px -10px rgba(11, 58, 96, 0.14)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

// Agents (Meet Our Agents) Section Animations
export const agentsHeaderVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const agentsCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

export const agentsCardHover = {
  y: -8,
  boxShadow: "0 25px 50px -12px rgba(11, 58, 96, 0.18)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

// Reviews (Client Reviews) Section Animations
export const reviewsHeaderVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const reviewsCardHover = {
  y: -6,
  boxShadow: "0 20px 40px -10px rgba(11, 58, 96, 0.12)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

// News (Latest News) Section Animations
export const newsHeaderVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const newsCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

export const newsCardHover = {
  y: -8,
  boxShadow: "0 25px 45px -10px rgba(11, 58, 96, 0.12)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

// Starts (Take the Next Step) Section Animations
export const startsContainerVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const startsButtonHover = {
  scale: 1.04,
  boxShadow: "0 15px 35px rgba(14, 80, 140, 0.7)",
  transition: { duration: 0.2 },
};

// Footer Section Animations
export const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Luxury Brand Loader Animations
export const loaderContainerVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    scale: 1.03,
    filter: "blur(8px)",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const loaderLogoVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const loaderTextVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.25,
    },
  },
};












