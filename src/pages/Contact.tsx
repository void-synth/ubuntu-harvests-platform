import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getWhatsAppLink, DEFAULT_INQUIRY_MESSAGE, COMPANY_EMAIL } from "@/lib/whatsapp";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6 px-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
              Ready to discuss partnership opportunities? We'd love to hear from you.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            >
              <a
                href={getWhatsAppLink(DEFAULT_INQUIRY_MESSAGE)}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base min-h-[44px]"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0" /> Nigeria Office
                </h3>
                <p className="text-muted-foreground text-sm mb-2">No. 5, Ojoo, Oyo State, Nigeria</p>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-muted-foreground text-sm flex items-center gap-2 hover:text-primary transition-colors min-h-[44px]"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" /> {COMPANY_EMAIL}
                </a>
              </div>

              <div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0" /> UK Office
                </h3>
                <p className="text-muted-foreground text-sm mb-2">38 Rhyddings Park Road, Swansea, SA2 0AF, UK</p>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-muted-foreground text-sm flex items-center gap-2 hover:text-primary transition-colors min-h-[44px]"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" /> {COMPANY_EMAIL}
                </a>
              </div>

              <div>
                <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary shrink-0" /> Email
                </h3>
                <a href="mailto:ubuntuharvests@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors break-all word-break">
                  ubuntuharvests@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary shrink-0" /> Business Hours
                </h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                  <p>Sat: 9:00 AM – 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl p-6 sm:p-8 shadow-sm text-center"
            >
              <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-3">
                Get in Touch via Email
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                We're available to answer your questions, provide quotes, and discuss partnership opportunities. 
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a
                href={getWhatsAppLink(DEFAULT_INQUIRY_MESSAGE)}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base min-h-[44px]"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
