import { motion } from "framer-motion";
import { Users, Search, Package, Truck, Handshake } from "lucide-react";

const steps = [
  { icon: Users, title: "Partner with Vetted Farmers", desc: "We build long-term relationships with trusted Nigerian farming communities." },
  { icon: Search, title: "Ethical Sourcing & QC", desc: "Rigorous quality control and ethical standards at every stage." },
  { icon: Package, title: "Export-Ready Processing", desc: "Products processed and packaged to meet international standards." },
  { icon: Truck, title: "International Logistics", desc: "End-to-end logistics and compliance for UK, EU, and US markets." },
  { icon: Handshake, title: "Long-Term Partnerships", desc: "We grow with our buyers — building trust through consistency." },
];

const ProcessSection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-4">
          How We Work
        </h2>
        <p className="text-secondary-foreground/70 max-w-xl mx-auto">
          From farm to port — a transparent, ethical supply chain you can trust.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-xs font-sans font-bold text-primary mb-1">Step {i + 1}</div>
            <h3 className="font-serif text-base font-semibold text-secondary-foreground mb-2">{s.title}</h3>
            <p className="text-xs text-secondary-foreground/70">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
