import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Leaf, TreePine, Droplets, Recycle, Target, Globe } from "lucide-react";

const areas = [
  { icon: Leaf, title: "Sustainable Farming", desc: "Promoting regenerative agriculture that enriches soil, conserves water, and protects biodiversity." },
  { icon: TreePine, title: "Environmental Protection", desc: "Zero-deforestation commitment and active reforestation partnerships across our sourcing regions." },
  { icon: Droplets, title: "Climate-Conscious Practices", desc: "Reducing carbon footprint through optimized logistics, low-impact processing, and responsible packaging." },
  { icon: Recycle, title: "Ethical Supply Chains", desc: "Full traceability from farm to port. No child labour, no exploitation, no shortcuts." },
  { icon: Target, title: "SDG Alignment", desc: "Our operations directly support UN Sustainable Development Goals — including Zero Hunger, Decent Work, and Climate Action." },
  { icon: Globe, title: "Global Responsibility", desc: "We believe African agriculture can feed the world sustainably — and we're proving it every day." },
];

const Sustainability = () => (
  <Layout>
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Sustainability
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sustainability isn't a label we attach — it's the foundation of every decision we make,
            from the farms we partner with to the markets we serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Sustainability;
