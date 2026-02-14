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
    desc: "We invest in the autonomy and agency of smallholder farmers providing tools, resources, and market access that put them in control of their livelihoods.",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    desc: "Ongoing training in sustainable agriculture, post-harvest handling, and business management helps farmers improve yields while protecting their land.",
  },
  {
    icon: Users,
    title: "Long-Term Community Impact",
    desc: "From school sponsorships to clean water initiatives, Ubuntu Harvests reinvests in the communities that make our business possible. Shared prosperity is not a slogan it's our model.",
  },
];

const Community = () => (
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
            Our Community
          </h1>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic text-earth mb-4 sm:mb-6 px-4">
            "I am because we are."
          </blockquote>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6 px-4">
            Ubuntu means "I am because we are." Our business exists to empower the farming
            communities at the heart of everything we export.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We don't just source from communities we invest in them. Through fair pricing, 
            training programs, infrastructure support, and community development initiatives, 
            we're building a model where agricultural trade creates lasting positive change.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Main Content */}
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Pillars - Enhanced Layout */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0">
                    <p.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{p.title}</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  </Layout>
);

export default Community;
