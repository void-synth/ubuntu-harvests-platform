import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare } from "lucide-react";
import { getWhatsAppLink, DEFAULT_INQUIRY_MESSAGE } from "@/lib/whatsapp";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      // Show CTA after scrolling 30% of the page and not dismissed
      if (scrollPercentage > 30 && scrollPercentage < 90 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 md:left-auto md:translate-x-0 md:right-6 w-[calc(100%-2rem)] sm:w-auto max-w-sm mx-4 sm:mx-0"
        >
          <div className="bg-card border border-border rounded-2xl shadow-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground mb-1">
                Ready to trade?
              </p>
              <p className="text-xs text-muted-foreground">
                Get a quote for bulk orders
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={getWhatsAppLink(DEFAULT_INQUIRY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2.5 sm:py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity text-center min-h-[44px] sm:min-h-0 flex items-center justify-center"
              >
                Contact Us
              </a>
              <button
                onClick={() => {
                  setIsDismissed(true);
                  setIsVisible(false);
                }}
                className="p-2 rounded-lg hover:bg-muted transition-colors min-h-[44px] sm:min-h-0 flex items-center justify-center"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
