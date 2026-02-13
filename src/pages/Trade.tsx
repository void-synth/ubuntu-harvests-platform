import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Globe, Award, TrendingUp, Handshake } from "lucide-react";
import { getWhatsAppLink, DEFAULT_INQUIRY_MESSAGE } from "@/lib/whatsapp";

const features = [
  {
    icon: Globe,
    title: "Global Export Markets",
    desc: "We serve buyers across the United Kingdom, European Union, and United States with reliable, consistent supply of premium African agricultural produce.",
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
    desc: "We don't just sell produce we build long-term commercial relationships grounded in trust, reliability, and shared growth.",
  },
];

const Trade = () => (
  <Layout>
    {/* Hero Section */}
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight px-4">
            Trade With Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4 sm:mb-6 font-serif italic px-4">
            Connecting African agricultural excellence with global markets
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Ubuntu Harvests is built for international B2B trade. We connect African agricultural
            excellence with global demand ethically, reliably, and at scale. Whether you're a food 
            processor, distributor, retailer, or manufacturer, we provide consistent, high-quality 
            agricultural products with full traceability and ethical sourcing guarantees.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Main Content */}
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Features Grid - Asymmetric Layout */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`bg-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  i % 2 === 0 ? 'lg:mt-8' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{f.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-earth/10 rounded-3xl p-6 sm:p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-8 sm:mb-10 text-center">
              Why Choose Ubuntu Harvests?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2 sm:mb-3 font-serif">500+</div>
                <p className="text-sm sm:text-base font-semibold text-foreground mb-1">Partner Farmers</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Across 8 African states</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2 sm:mb-3 font-serif">15+</div>
                <p className="text-sm sm:text-base font-semibold text-foreground mb-1">Countries Served</p>
                <p className="text-xs sm:text-sm text-muted-foreground">UK, EU, US, Middle East</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2 sm:mb-3 font-serif">100%</div>
                <p className="text-sm sm:text-base font-semibold text-foreground mb-1">Traceable</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Farm to port transparency</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              Ready to Start Trading?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Get a customized quote for your bulk order requirements. Our team is ready to discuss 
              your specific needs and provide competitive pricing.
            </p>
          </div>
          <a
            href={getWhatsAppLink(`I'm interested in trading with Ubuntu Harvests. ${DEFAULT_INQUIRY_MESSAGE}`)}
            className="btn-primary px-8 sm:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base inline-block min-h-[44px]"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Trade;
