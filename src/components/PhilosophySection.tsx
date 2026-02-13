import { motion } from "framer-motion";
import { Heart, Leaf, Shield, Handshake } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Ethical Sourcing",
    desc: "Fair trade partnerships with trusted African farmers.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Environmentally responsible practices across the supply chain.",
  },
  {
    icon: Shield,
    title: "Zero Child Labour",
    desc: "Strict commitment to ethical labour and community development.",
  },
  {
    icon: Handshake,
    title: "Direct Trade",
    desc: "Removing middlemen to give farmers fair access to global markets.",
  },
];

const PhilosophySection = () => (
  <section className="py-16 sm:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
          The Ubuntu Philosophy
        </h2>
        <blockquote className="text-lg sm:text-xl italic text-earth font-serif mb-4 sm:mb-6">
          "I am because we are."
        </blockquote>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-4">
          Ubuntu is an African philosophy that shapes everything we do from ethical sourcing
          and shared prosperity to environmental responsibility and farmer empowerment. It is the
          belief that our humanity is bound together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
              <v.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PhilosophySection;
