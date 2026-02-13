import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Ubuntu Harvests has been our trusted partner for premium African hibiscus for over two years. Their commitment to quality and ethical sourcing aligns perfectly with our brand values. The consistency and traceability they provide is unmatched.",
    author: "Sarah Mitchell",
    role: "Procurement Director",
    company: "European Health Foods Ltd",
    location: "London, UK",
    rating: 5,
  },
  {
    quote: "Working with Ubuntu Harvests has transformed our supply chain. Their direct trade model means we get premium quality cashews at fair prices, and we know exactly where our products come from. The transparency is refreshing in this industry.",
    author: "James Chen",
    role: "Founder & CEO",
    company: "Green Nut Company",
    location: "San Francisco, USA",
    rating: 5,
  },
  {
    quote: "The quality of their sesame seeds is exceptional, and their ethical standards give us confidence in our sourcing. We've seen the impact reports real farmers, real communities, real change. That matters to our customers.",
    author: "Emma Thompson",
    role: "Sustainability Manager",
    company: "Artisan Foods Group",
    location: "Amsterdam, Netherlands",
    rating: 5,
  },
  {
    quote: "As a buyer, I appreciate their professionalism and reliability. Orders arrive on time, documentation is complete, and quality is always consistent. But what sets them apart is their genuine commitment to farmer welfare.",
    author: "Ahmed Hassan",
    role: "Import Manager",
    company: "Middle East Trading Co.",
    location: "Dubai, UAE",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-16 sm:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
          Trusted by Global Buyers
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
          See what international buyers say about working with Ubuntu Harvests
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow"
          >
            <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-primary/20 mb-3 sm:mb-4" />
            <div className="flex gap-1 mb-3 sm:mb-4">
              {[...Array(testimonial.rating)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 italic">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-border pt-3 sm:pt-4">
              <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.author}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">{testimonial.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
