import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hibiscusImg from "@/assets/product-hibiscus.jpg";
import sesameImg from "@/assets/product-sesame.jpg";
import cashewImg from "@/assets/product-cashew.jpg";
import gingerImg from "@/assets/product-ginger.jpg";

const products = [
  {
    name: "Hibiscus",
    img: hibiscusImg,
    desc: "Premium dried hibiscus petals from Nigeria. Rich in antioxidants and vitamin C.",
    uses: ["Herbal teas & beverages", "Natural food coloring", "Health supplements", "Culinary applications"],
  },
  {
    name: "Sesame Seeds",
    img: sesameImg,
    desc: "High oil content, premium quality sesame seeds.",
    uses: ["Sesame oil", "Tahini & spreads", "Bakery & confectionery", "Asian cuisine"],
  },
  {
    name: "Cashew Nuts",
    img: cashewImg,
    desc: "Premium raw cashew nuts, international export grade.",
    uses: ["Snacks", "Cashew butter", "Confectionery", "Vegan & health foods"],
  },
  {
    name: "Ginger",
    img: gingerImg,
    desc: "Fresh ginger root with high essential oil content.",
    uses: ["Culinary spice", "Traditional medicine", "Essential oil extraction", "Food processing"],
  },
];

const ProductsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Products</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Premium, ethically sourced agricultural produce ready for international markets.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <ul className="text-xs text-muted-foreground space-y-1 mb-6">
                {p.uses.map((u) => (
                  <li key={u} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {u}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Ask for Price
              </Link>
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
