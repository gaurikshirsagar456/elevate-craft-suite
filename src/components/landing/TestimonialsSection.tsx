import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sandip Shinde",
    role: "VP of Operations",
    company: "TechFlow Inc.",
    image: "👩‍💼",
    quote: "Niche transformed how we make decisions. We went from weekly spreadsheet battles to real-time insights that everyone trusts.",
    metric: "40% faster decisions",
  },
  {
    name: "Rohit Sharma",
    role: "CEO",
    company: "GrowthLab",
    image: "👨‍💻",
    quote: "The ROI was immediate. Within the first month, we identified $200K in optimization opportunities we would have missed.",
    metric: "$200K saved in month 1",
  },
  {
    name: "Pankaj Mehta",
    role: "Data Team Lead",
    company: "ScaleUp Co.",
    image: "👩‍🔬",
    quote: "Finally, a tool that my entire team actually uses. The AI insights are like having an extra analyst on the team.",
    metric: "100% team adoption",
  },
];

const stats = [
  { value: "50,000+", label: "Businesses trust us" },
  { value: "4.9/5", label: "Average rating" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "2M+", label: "Dashboards created" },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Social Proof
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Loved by Teams{" "}
            <span className="text-gradient">Everywhere</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See why industry leaders choose Niche to power their analytics.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mb-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium">
                {testimonial.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
