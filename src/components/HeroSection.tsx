import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-farm.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    />
    <div className="absolute inset-0 bg-foreground/60" />

    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-serif font-bold text-card mb-4"
      >
        Ubuntu Harvests
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-card/90 font-serif italic mb-6"
      >
        Shared Prosperity Through Ethical Agriculture
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl mx-auto text-card/80 mb-10 leading-relaxed"
      >
        From Nigerian farms to global markets — premium, ethically sourced agricultural
        produce built on sustainability, transparency, and community empowerment.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/trade"
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Explore Our Crops
        </Link>
        <Link
          to="/sustainability"
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-card text-card font-semibold text-sm hover:bg-card/10 transition-colors"
        >
          Our Mission
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
