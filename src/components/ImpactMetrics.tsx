import { motion } from "framer-motion";
import { Users, DollarSign, Leaf, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
  {
    icon: Users,
    value: "500+",
    label: "Farmers Supported",
    description: "Smallholder farmers across 8 African states",
    color: "text-primary",
  },
  {
    icon: DollarSign,
    value: "$2.5M+",
    label: "Farmer Income Generated",
    description: "Fair trade income paid directly to farming communities",
    color: "text-earth",
  },
  {
    icon: Leaf,
    value: "1,200+",
    label: "Tons Exported Annually",
    description: "Premium agricultural produce to global markets",
    color: "text-primary",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Served",
    description: "Exporting to UK, EU, US, and Middle Eastern markets",
    color: "text-earth",
  },
];

const ImpactMetrics = () => {
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            setCounted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("impact-metrics");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [counted]);

  return (
    <section id="impact-metrics" className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3 sm:mb-4">
            Our Impact
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Real numbers from real communities. Every metric represents lives improved, 
            families empowered, and sustainable agriculture thriving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <metric.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${metric.color.replace('text-', 'text-primary-foreground')}`} />
              </div>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={counted ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2"
              >
                {metric.value}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2">{metric.label}</h3>
              <p className="text-xs sm:text-sm text-primary-foreground/70 px-2">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-foreground/80 italic max-w-2xl mx-auto">
            "These numbers represent more than business metrics they represent communities 
            transformed, children educated, and sustainable livelihoods created through ethical trade."
          </p>
          <p className="text-sm text-primary-foreground/60 mt-4">Ayodeji Ganiyu, Founder</p>
          <p className="text-sm text-primary-foreground/70 mt-6 max-w-2xl mx-auto">
            Note: Ubuntu Harvests is not yet profitable. We are building a sustainable business model 
            that prioritizes farmer welfare and community impact over short-term profits.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
