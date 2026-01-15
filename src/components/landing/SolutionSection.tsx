import { motion } from "framer-motion";
import { ArrowRight, Zap, LineChart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Zap,
    title: "Connect Your Data",
    description: "Integrate with 100+ tools in minutes. No code required.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Analyzes Patterns",
    description: "Our AI processes millions of data points to find actionable insights.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Get Real-Time Dashboards",
    description: "Beautiful, customizable dashboards that update automatically.",
  },
  {
    number: "04",
    icon: Users,
    title: "Align Your Team",
    description: "Share insights and collaborate with powerful team features.",
  },
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            The Solution
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            From Chaos to Clarity in{" "}
            <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Niche transforms how teams work with data—making insights accessible, 
            actionable, and impactful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent z-0" />
              )}
              
              <div className="relative z-10 p-6 rounded-2xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-display font-bold text-primary/20">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="cta" size="lg" className="group">
            See How It Works
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
