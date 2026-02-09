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
    {/* Hero Section */}
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight px-4">
            Sustainability
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4 sm:mb-6 font-serif italic px-4">
            The foundation of every decision we make
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Sustainability isn't a label we attach — it's the foundation of every decision we make,
            from the farms we partner with to the markets we serve. We believe that sustainable 
            agriculture is the only path forward. Our commitment extends beyond environmental 
            protection to include economic sustainability for farming communities, social justice 
            in our supply chains, and long-term viability for the land we depend on.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Main Content */}
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Sustainability Areas - Enhanced Grid */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {areas.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <a.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{a.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Commitments Section - Enhanced Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              Our Sustainability Commitments
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Concrete actions, measurable impact, transparent reporting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-primary"
            >
              <h4 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Zero Deforestation</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We work exclusively with farms that practice sustainable land management. 
                No forest clearing, no habitat destruction. We actively support reforestation 
                initiatives in our sourcing regions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-primary"
            >
              <h4 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Water Conservation</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our partner farms use efficient irrigation methods and water management practices. 
                We support training programs that help farmers reduce water usage while maintaining yields.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-primary"
            >
              <h4 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Carbon Footprint Reduction</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We optimize logistics routes, use efficient packaging, and work with shipping 
                partners committed to reducing emissions. We're continuously working to minimize 
                our carbon footprint across the supply chain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-primary"
            >
              <h4 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Regenerative Agriculture</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We promote farming practices that improve soil health, increase biodiversity, 
                and enhance ecosystem resilience. Our training programs teach farmers techniques 
                that enrich rather than deplete the land.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Sustainability;
