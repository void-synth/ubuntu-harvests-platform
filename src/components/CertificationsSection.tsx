import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, FileCheck } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "HACCP Certified",
    description: "Hazard Analysis Critical Control Points certification ensures our food safety management system meets international standards.",
    status: "Active",
  },
  {
    icon: Award,
    title: "ISO 22000",
    description: "International food safety management system certification demonstrating our commitment to quality and safety.",
    status: "Active",
  },
  {
    icon: CheckCircle,
    title: "Fair Trade Certified",
    description: "Ensuring fair prices, decent working conditions, and sustainable practices throughout our supply chain.",
    status: "In Progress",
  },
  {
    icon: FileCheck,
    title: "Organic Certification",
    description: "Selected products available with organic certification, meeting EU and USDA organic standards.",
    status: "Available",
  },
];

const qualityStandards = [
  "EU Food Safety Standards",
  "USDA Import Requirements",
  "UK Food Standards Agency Compliance",
  "Non-GMO Verified",
  "Traceability from Farm to Port",
  "Third-Party Quality Audits",
];

const CertificationsSection = () => (
  <section className="py-16 sm:py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
          Certifications & Quality Standards
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
          We maintain the highest international standards to ensure our products meet 
          global food safety and quality requirements.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-secondary flex items-center justify-center">
              <cert.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{cert.description}</p>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              cert.status === "Active" 
                ? "bg-primary/10 text-primary" 
                : cert.status === "In Progress"
                ? "bg-earth/10 text-earth"
                : "bg-muted text-muted-foreground"
            }`}>
              {cert.status}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-background rounded-xl p-6 sm:p-8 shadow-sm max-w-4xl mx-auto"
      >
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 text-center">
          Quality Standards We Meet
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {qualityStandards.map((standard, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-muted-foreground">{standard}</span>
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 text-center italic px-4">
          All products undergo rigorous testing and quality control before export. 
          Documentation and certificates available upon request.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
