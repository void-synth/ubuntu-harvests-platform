import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/logo.png";
import { getWhatsAppLink, DEFAULT_INQUIRY_MESSAGE } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/#products", isHash: true },
  { label: "Trade", path: "/trade" },
  { label: "Community", path: "/community" },
  { label: "Sustainability", path: "/sustainability" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll to products section
  const scrollToProducts = () => {
    setTimeout(() => {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        const headerHeight = 80; // Approximate header height
        const targetPosition = productsSection.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Handle Products link click
  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on homepage, just scroll
      scrollToProducts();
      setMobileOpen(false);
    } else {
      // Navigate to homepage first, then scroll after navigation
      setMobileOpen(false);
      navigate("/");
      // Wait for page to render, then scroll
      setTimeout(() => {
        const checkAndScroll = () => {
          const productsSection = document.getElementById("products");
          if (productsSection) {
            const headerHeight = 80;
            const targetPosition = productsSection.offsetTop - headerHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          } else {
            // If section not found yet, try again
            setTimeout(checkAndScroll, 100);
          }
        };
        checkAndScroll();
      }, 100);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // Initial call
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  // Handle hash navigation when on homepage
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#products") {
      scrollToProducts();
    }
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/98 backdrop-blur-lg shadow-lg border-b border-border/50"
          : "bg-card/75 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none"
      }`}
    >
      {/* Scroll progress indicator */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-earth to-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity group min-h-[44px]">
          <img 
            src={logo} 
            alt="Ubuntu Harvests Logo" 
            className="h-8 sm:h-9 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((l) => {
            if (l.isHash) {
              return (
                <button
                  key={l.path}
                  onClick={handleProductsClick}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group ${
                    location.pathname === "/" && location.hash === "#products"
                      ? "text-primary bg-primary/10"
                      : scrolled 
                        ? "text-foreground hover:text-primary hover:bg-muted/50" 
                        : "text-foreground/90 hover:text-primary hover:bg-foreground/5"
                  }`}
                  aria-current={location.pathname === "/" && location.hash === "#products" ? "page" : undefined}
                >
                  {l.label}
                </button>
              );
            }
            return (
              <Link
                key={l.path}
                to={l.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group ${
                  location.pathname === l.path
                    ? "text-primary bg-primary/10"
                    : scrolled 
                      ? "text-foreground hover:text-primary hover:bg-muted/50" 
                      : "text-foreground/90 hover:text-primary hover:bg-foreground/5"
                }`}
                aria-current={location.pathname === l.path ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Theme */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={getWhatsAppLink(DEFAULT_INQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 hover:shadow-md transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact</span>
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile/Tablet nav toggle */}
        <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
          <a
            href={getWhatsAppLink(DEFAULT_INQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-primary hover:bg-primary/20 bg-primary/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center shadow-sm"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <div className="p-2 rounded-lg bg-muted/40 hover:bg-muted/80 transition-colors shadow-sm">
            <ThemeToggle />
          </div>
          <button
            className="p-2.5 rounded-lg text-foreground hover:bg-muted/80 bg-muted/40 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center shadow-sm"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card backdrop-blur-md border-t border-border overflow-hidden shadow-lg"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => {
                if (l.isHash) {
                  return (
                    <button
                      key={l.path}
                      onClick={handleProductsClick}
                      className={`px-4 py-3.5 text-base font-medium rounded-lg transition-colors text-left min-h-[44px] ${
                        location.pathname === "/" && location.hash === "#products"
                          ? "text-primary bg-primary/10" 
                          : "text-foreground hover:bg-muted/50"
                      }`}
                      aria-current={location.pathname === "/" && location.hash === "#products" ? "page" : undefined}
                    >
                      {l.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3.5 text-base font-medium rounded-lg transition-colors min-h-[44px] flex items-center ${
                      location.pathname === l.path 
                        ? "text-primary bg-primary/10" 
                        : "text-foreground hover:bg-muted/50"
                    }`}
                    aria-current={location.pathname === l.path ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <a
                href={getWhatsAppLink(DEFAULT_INQUIRY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mx-4 mt-2 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
