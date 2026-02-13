import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block mb-3 sm:mb-4">
            <img 
              src={logo} 
              alt="Ubuntu Harvests Logo" 
              className="h-10 sm:h-12 w-auto hover:opacity-90 transition-opacity"
            />
          </Link>
          <p className="text-primary-foreground/80 text-sm leading-relaxed mb-3 sm:mb-4">
            Connecting African farmers to global markets through ethical trade, sustainability,
            and community empowerment.
          </p>
          <p className="text-primary-foreground/60 text-xs italic">
            "I am because we are" Ubuntu Philosophy
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/70">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "Trade", path: "/trade" },
              { label: "Community", path: "/community" },
              { label: "Sustainability", path: "/sustainability" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/70">
            Products
          </h4>
          <ul className="space-y-2">
            {["Hibiscus", "Sesame Seeds", "Cashew Nuts", "Ginger", "Palm Oil (Coming Soon)"].map((p) => (
              <li key={p} className="text-sm text-primary-foreground/80">{p}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/70">
            Contact
          </h4>
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <a 
              href="mailto:ubuntuharvests@gmail.com" 
              className="break-all hover:text-primary-foreground transition-colors underline"
            >
              ubuntuharvests@gmail.com
            </a>
            <p className="break-words">🇳🇬 +234 816 507 3846</p>
            <p className="break-words">🇬🇧 +44 7401324679</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-primary-foreground/60 text-center md:text-left">
          <p className="mb-2 md:mb-0">© 2025 Ubuntu Harvests. All rights reserved.</p>
          <div className="text-center md:text-right space-y-1">
            <p className="break-words px-2 md:px-0">Ubuntu Harvests Ltd · Registered in Nigeria, England and Wales</p>
            <p className="break-words px-2 md:px-0">
              <span className="block sm:inline">UK Company No: 16793791</span>
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline">Nigeria Company No: 9121849</span>
            </p>
            <p className="break-words px-2 md:px-0">Registered Office: Swansea, United Kingdom</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
