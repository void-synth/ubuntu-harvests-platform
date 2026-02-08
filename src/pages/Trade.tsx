import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Award, TrendingUp, Handshake } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Export Markets",
    desc: "We serve buyers across the United Kingdom, European Union, and United States with reliable, consistent supply of premium Nigerian agricultural produce.",
  },
  {
    icon: Award,
    title: "Quality Standards",
    desc: "All products meet international food safety and quality certifications. Rigorous testing, documentation, and traceability at every stage.",
  },
  {
    icon: TrendingUp,
    title: "Bulk Supply Readiness",
    desc: "Scalable supply capacity to meet large-volume orders with consistent quality and timely delivery across multiple shipping routes.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    desc: "We don't just sell produce — we build long-term commercial relationships grounded in trust, reliability, and shared growth.",
  },
];

const Trade = () => (
  <Layout>
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Trade With Us
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ubuntu Harvests is built for international B2B trade. We connect Nigerian agricultural
            excellence with global demand — ethically, reliably, and at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-sm"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-secondary flex items-center justify-center">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Trade;
