import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, GraduationCap, DollarSign, Users } from "lucide-react";

const pillars = [
  {
    icon: DollarSign,
    title: "Fair Income",
    desc: "Every farmer in our network receives fair, above-market compensation. We eliminate exploitative middlemen so that the people who grow your food earn a dignified income.",
  },
  {
    icon: Heart,
    title: "Farmer Empowerment",
    desc: "We invest in the autonomy and agency of smallholder farmers — providing tools, resources, and market access that put them in control of their livelihoods.",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    desc: "Ongoing training in sustainable agriculture, post-harvest handling, and business management helps farmers improve yields while protecting their land.",
  },
  {
    icon: Users,
    title: "Long-Term Community Impact",
    desc: "From school sponsorships to clean water initiatives, Ubuntu Harvests reinvests in the communities that make our business possible. Shared prosperity is not a slogan — it's our model.",
  },
];

const Community = () => (
  <Layout>
    <section className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Community
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ubuntu means "I am because we are." Our business exists to empower the farming
            communities at the heart of everything we export.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-sm"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-secondary flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Community;
