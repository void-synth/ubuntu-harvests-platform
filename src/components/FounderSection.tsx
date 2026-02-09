import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpeg";

const FounderSection = () => (
  <section className="py-16 sm:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12"
      >
        <div className="shrink-0">
          <img
            src={founderImg}
            alt="Ayodeji Ganiyu, Founder of Ubuntu Harvests"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg mx-auto md:mx-0"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
            Meet Our Founder
          </h2>
          <h3 className="text-base sm:text-lg font-serif text-earth mb-3 sm:mb-4">
            Ayodeji Ganiyu, MCIWEM
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
            Ayodeji Ganiyu is a sustainable agriculture and international trade professional 
            with over a decade of experience in agricultural development and export trade. 
            As a Member of the Chartered Institution of Water and Environmental Management (MCIWEM), 
            he combines technical excellence with ethical leadership, ensuring that every 
            transaction benefits both farmers and buyers.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
            His vision: connecting African farmers to UK, European, US, and global markets
            while ensuring environmental sustainability and community empowerment. Ayodeji 
            has worked extensively with smallholder farming communities across Nigeria, 
            developing sustainable supply chains that prioritize farmer welfare and 
            environmental protection.
          </p>
          <div className="mt-4 sm:mt-6 space-y-2">
            <p className="text-sm font-semibold text-foreground">Key Achievements:</p>
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-1 list-disc list-inside text-left max-w-md mx-auto md:mx-0">
              <li>Established direct trade relationships with 500+ smallholder farmers</li>
              <li>Facilitated $2.5M+ in fair trade income to farming communities</li>
              <li>Developed traceable supply chains meeting international standards</li>
              <li>Championed zero child labor policies across all partner farms</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FounderSection;
