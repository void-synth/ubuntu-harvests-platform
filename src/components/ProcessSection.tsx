import { motion } from "framer-motion";
import { Users, Search, Package, Truck, Handshake } from "lucide-react";

const steps = [
  { 
    icon: Users, 
    title: "Partner with Vetted Farmers", 
    desc: "We build long-term relationships with trusted African farming communities.",
    details: "Our farmer network spans 8 states across Africa. Each farmer undergoes a vetting process that includes ethical labor practices verification, sustainable farming method assessment, and quality commitment evaluation. We provide training, fair pricing contracts, and direct market access."
  },
  { 
    icon: Search, 
    title: "Ethical Sourcing & QC", 
    desc: "Rigorous quality control and ethical standards at every stage.",
    details: "Every batch is tested for quality, purity, and safety. Our QC process includes moisture content analysis, foreign matter inspection, pesticide residue testing, and certification verification. We maintain full traceability from farm to port."
  },
  { 
    icon: Package, 
    title: "Export-Ready Processing", 
    desc: "Products processed and packaged to meet international standards.",
    details: "Processing facilities are HACCP certified and follow international food safety protocols. Products are cleaned, sorted, graded, and packaged according to destination market requirements. All packaging meets food-grade standards."
  },
  { 
    icon: Truck, 
    title: "International Logistics", 
    desc: "End-to-end logistics and compliance for UK, EU, and US markets.",
    details: "We handle all export documentation, customs clearance, and shipping arrangements. Our logistics partners ensure timely delivery to major ports. We provide phytosanitary certificates, certificates of origin, and all required import documentation."
  },
  { 
    icon: Handshake, 
    title: "Long-Term Partnerships", 
    desc: "We grow with our buyers building trust through consistency.",
    details: "We're not just suppliers we're partners. We work with buyers to understand their needs, provide consistent quality, and grow together. Our relationships are built on transparency, reliability, and mutual success."
  },
];

const ProcessSection = () => (
  <section className="py-16 sm:py-24 bg-secondary">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-3 sm:mb-4">
          How We Work
        </h2>
        <p className="text-sm sm:text-base text-secondary-foreground/70 max-w-xl mx-auto px-4">
          From farm to port a transparent, ethical supply chain you can trust.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <div className="text-xs font-sans font-bold text-primary mb-1">Step {i + 1}</div>
            <h3 className="font-serif text-sm sm:text-base font-semibold text-secondary-foreground mb-2">{s.title}</h3>
            <p className="text-xs text-secondary-foreground/70 leading-relaxed px-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Detailed Process Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-card/50 rounded-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-secondary-foreground text-center mb-6 sm:mb-8">
            Detailed Process Overview
          </h3>
          {steps.map((s, i) => (
            <div key={s.title} className="border-l-4 border-primary pl-4 sm:pl-6 py-2">
              <h4 className="font-serif text-base sm:text-lg font-semibold text-secondary-foreground mb-2">
                {i + 1}. {s.title}
              </h4>
              <p className="text-xs sm:text-sm text-secondary-foreground/80 leading-relaxed">
                {s.details}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;
