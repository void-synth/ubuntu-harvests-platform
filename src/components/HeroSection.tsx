import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import lightThemeBg from "@/assets/light-theme.jpg";
import darkThemeBg from "@/assets/dark-theme.jpg";

const HeroSection = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme to handle system theme, fallback to theme
  const currentTheme = mounted ? (resolvedTheme || theme) : "light";
  const backgroundImage = currentTheme === "dark" ? darkThemeBg : lightThemeBg;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background Image - Theme-based */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTheme}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center center',
            backgroundAttachment: typeof window !== 'undefined' && window.innerWidth > 768 ? 'fixed' : 'scroll',
            backgroundSize: 'cover'
          }}
        />
      </AnimatePresence>
      
      {/* Theme-aware overlay - optimized for raw background visibility */}
      <motion.div 
        key={`overlay-${currentTheme}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`absolute inset-0 ${
          currentTheme === "dark" 
            ? "bg-gradient-to-b from-black/35 via-black/25 to-black/45" 
            : "bg-gradient-to-b from-black/20 via-black/10 to-black/30"
        }`} 
      />
      
      {/* Subtle vignette - optimized for both themes */}
      <motion.div 
        key={`vignette-${currentTheme}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`absolute inset-0 ${
          currentTheme === "dark"
            ? "bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.12)_100%)]"
            : "bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.06)_100%)]"
        }`} 
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-display font-serif font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight px-4"
        >
          Ubuntu Harvests
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/95 font-serif italic mb-6 sm:mb-8 drop-shadow-lg px-4"
        >
          Shared Prosperity Through Ethical Agriculture
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-white/90 mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg drop-shadow-md px-4"
        >
          From Nigerian farms to global markets — premium, ethically sourced agricultural
          produce built on sustainability, transparency, and community empowerment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        >
          <Link
            to="/trade"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-primary font-semibold text-sm sm:text-base hover:bg-white/95 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg min-h-[44px]"
          >
            Explore Our Crops
          </Link>
          <Link
            to="/sustainability"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-white/90 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-sm min-h-[44px]"
          >
            Our Mission
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
