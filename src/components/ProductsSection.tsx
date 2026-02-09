import { motion } from "framer-motion";
import hibiscusImg from "@/assets/product-hibiscus.jpg";
import sesameImg from "@/assets/product-sesame.jpg";
import cashewImg from "@/assets/product-cashew.jpg";
import gingerImg from "@/assets/product-ginger.jpg";
import { getWhatsAppLink, DEFAULT_INQUIRY_MESSAGE } from "@/lib/whatsapp";

const products = [
  {
    name: "Hibiscus",
    img: hibiscusImg,
    desc: "Premium dried hibiscus petals from Nigeria. Rich in antioxidants and vitamin C.",
    fullDesc: "Our hibiscus (Hibiscus sabdariffa) is sourced from smallholder farms in Oyo and Kogi states, where the climate and soil conditions produce exceptionally vibrant, nutrient-rich petals. Each batch undergoes rigorous quality control to ensure optimal color, flavor, and nutritional content.",
    origin: "Oyo & Kogi States, Nigeria",
    season: "Year-round availability",
    certifications: "Organic certified, HACCP compliant",
    specs: ["Moisture content: <12%", "Color: Deep red to burgundy", "Particle size: Whole petals", "Packaging: Food-grade bags (25kg, 50kg)"],
    uses: ["Herbal teas & beverages", "Natural food coloring", "Health supplements", "Culinary applications"],
    marketInfo: "High demand in European health food markets, growing popularity in North America",
  },
  {
    name: "Sesame Seeds",
    img: sesameImg,
    desc: "High oil content, premium quality sesame seeds.",
    fullDesc: "Nigerian sesame seeds are renowned for their superior oil content (typically 50-55%) and distinctive nutty flavor. Our seeds are sourced from Benue, Nasarawa, and Jigawa states, where traditional farming methods combined with modern quality control ensure premium export-grade product.",
    origin: "Benue, Nasarawa & Jigawa States, Nigeria",
    season: "Harvest: October - December",
    certifications: "ISO 22000, Non-GMO verified",
    specs: ["Oil content: 50-55%", "Purity: 99.5% minimum", "Moisture: <8%", "Packaging: Jute bags (50kg, 100kg)"],
    uses: ["Sesame oil", "Tahini & spreads", "Bakery & confectionery", "Asian cuisine"],
    marketInfo: "Strong demand from Middle Eastern, Asian, and European markets for premium quality",
  },
  {
    name: "Cashew Nuts",
    img: cashewImg,
    desc: "Premium raw cashew nuts, international export grade.",
    fullDesc: "Nigeria is one of the world's top cashew producers, and our raw cashew nuts meet the highest international standards. Sourced from Ogun, Enugu, and Kogi states, our cashews are carefully sorted, graded, and processed to ensure consistent quality for global buyers.",
    origin: "Ogun, Enugu & Kogi States, Nigeria",
    season: "Harvest: February - May",
    certifications: "Fair Trade, Organic options available",
    specs: ["Grade: W240, W320, W450", "Kernel outturn: 48-50%", "Moisture: <10%", "Packaging: Vacuum-packed (25kg, 50kg)"],
    uses: ["Snacks", "Cashew butter", "Confectionery", "Vegan & health foods"],
    marketInfo: "Growing demand in European and North American markets for premium raw cashews",
  },
  {
    name: "Ginger",
    img: gingerImg,
    desc: "Fresh ginger root with high essential oil content.",
    fullDesc: "Nigerian ginger is prized for its pungent flavor and high essential oil content (typically 2-3%). Our ginger is sourced from Kaduna, Gombe, and Benue states, where the arid climate produces ginger with exceptional flavor intensity and medicinal properties.",
    origin: "Kaduna, Gombe & Benue States, Nigeria",
    season: "Harvest: November - March",
    certifications: "HACCP, GAP (Good Agricultural Practices)",
    specs: ["Essential oil: 2-3%", "Fiber content: <2%", "Moisture: <12%", "Packaging: Cartons (15kg, 30kg)"],
    uses: ["Culinary spice", "Traditional medicine", "Essential oil extraction", "Food processing"],
    marketInfo: "Strong demand from European spice markets and Asian food processors",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-16 sm:py-24 md:py-32 bg-background scroll-mt-20">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6">
          Our Products
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4 px-4">
          Premium, ethically sourced agricultural produce ready for international markets.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
          Each product in our portfolio is carefully selected, rigorously tested, and sourced directly 
          from trusted farming communities across Nigeria. We ensure every shipment meets the highest 
          international standards for quality, safety, and sustainability.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src={p.img}
                alt={`${p.name} - ${p.desc}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-3 sm:mb-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{p.desc}</p>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <p className="text-xs font-semibold text-foreground mb-2 sm:mb-3 uppercase tracking-wider">Key Uses</p>
                <ul className="text-xs text-muted-foreground space-y-1.5 sm:space-y-2">
                  {p.uses.map((u) => (
                    <li key={u} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 group-hover:scale-125 transition-transform duration-300" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-border">
                <a
                  href={getWhatsAppLink(`Hi! I'm interested in ${p.name}. ${DEFAULT_INQUIRY_MESSAGE}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px]"
                >
                  Request Quote
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming soon */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted text-muted-foreground text-sm font-medium">
          🌴 Palm Oil — Coming Soon
        </span>
      </motion.div>
    </div>
  </section>
);

export default ProductsSection;
