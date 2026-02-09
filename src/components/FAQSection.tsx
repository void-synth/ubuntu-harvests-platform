import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getWhatsAppLink, DEFAULT_INQUIRY_MESSAGE } from "@/lib/whatsapp";

const faqs = [
  {
    question: "What is your minimum order quantity?",
    answer: "Our minimum order quantities vary by product. Generally, we work with container loads (20ft or 40ft) for bulk orders. For smaller quantities, we can accommodate orders starting from 5-10 metric tons depending on the product. Please contact us with your specific requirements for a customized quote.",
  },
  {
    question: "What certifications do your products have?",
    answer: "Our products meet various international standards including HACCP, ISO 22000, and we offer organic-certified options. We provide phytosanitary certificates, certificates of origin, and all required import documentation. Specific certifications vary by product and destination market. All documentation is provided with each shipment.",
  },
  {
    question: "How do you ensure product quality and traceability?",
    answer: "We maintain full traceability from farm to port. Each batch is tested for quality, purity, and safety. Our quality control process includes moisture content analysis, foreign matter inspection, pesticide residue testing, and certification verification. We provide batch tracking information and can trace any product back to its source farm.",
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment terms based on order size and buyer relationship. Standard terms include letter of credit (L/C), advance payment, or a combination. For established partners, we can discuss extended payment terms. All terms are negotiated on a case-by-case basis to ensure mutual benefit.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary by destination. From Nigerian ports to UK/EU ports typically takes 14-21 days. To US East Coast ports, expect 21-28 days. We handle all export documentation and customs clearance. Exact timelines depend on shipping routes, port congestion, and destination country customs processing.",
  },
  {
    question: "Do you offer organic-certified products?",
    answer: "Yes, we offer organic-certified options for several products including hibiscus, sesame seeds, and cashew nuts. Our organic products meet EU and USDA organic standards. Organic certification documentation is provided with each shipment. Please specify organic requirements when requesting a quote.",
  },
  {
    question: "How do you ensure ethical sourcing and fair trade?",
    answer: "Ethical sourcing is at the core of our business. We work directly with smallholder farmers, eliminating exploitative middlemen. We pay fair, above-market prices, verify zero child labor, and invest in community development. Our fair trade practices are verified through regular audits and impact assessments.",
  },
  {
    question: "Can I visit the farms or processing facilities?",
    answer: "Yes, we welcome buyer visits to our partner farms and processing facilities. Farm visits can be arranged with advance notice. This allows you to see our operations firsthand, meet farmers, and verify our ethical and quality standards. Please contact us to arrange a visit.",
  },
  {
    question: "What packaging options do you offer?",
    answer: "Packaging varies by product and destination market requirements. We offer food-grade packaging including jute bags (50kg, 100kg), vacuum-packed bags (25kg, 50kg), and cartons (15kg, 30kg). All packaging meets international food safety standards. Custom packaging can be arranged for large orders.",
  },
  {
    question: "How do you handle quality issues or disputes?",
    answer: "We stand behind our products. If there are any quality issues, we investigate immediately and work to resolve them fairly. Our quality control process minimizes issues, but if problems arise, we have a clear dispute resolution process. We maintain insurance coverage and work with buyers to ensure satisfaction.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Everything you need to know about trading with Ubuntu Harvests
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-card rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px]"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-foreground text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-4 px-4">
            Still have questions? We're here to help.
          </p>
          <a
            href={getWhatsAppLink(DEFAULT_INQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base min-h-[44px]"
          >
            Contact Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
