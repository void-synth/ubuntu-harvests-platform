import { motion } from "framer-motion";
import founderImg from "@/assets/founder-portrait.jpg";

const FounderSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        <div className="shrink-0">
          <img
            src={founderImg}
            alt="Ayodeji Ganiyu, Founder of Ubuntu Harvests"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
            Meet Our Founder
          </h2>
          <h3 className="text-lg font-serif text-earth mb-4">
            Ayodeji Ganiyu, MCIWEM
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A sustainable agriculture and international trade professional. Member of the
            Chartered Institution of Water and Environmental Management (MCIWEM), combining
            technical excellence with ethical leadership.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            His vision: connecting African farmers to UK, European, US, and global markets
            while ensuring environmental sustainability and community empowerment.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FounderSection;
