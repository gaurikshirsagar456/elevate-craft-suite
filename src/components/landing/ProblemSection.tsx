import { motion } from "framer-motion";
import { AlertTriangle, Clock, BarChart3, Target } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Wasting Hours on Manual Reports",
    description: "Teams spend 15+ hours weekly compiling data from scattered tools",
  },
  {
    icon: BarChart3,
    title: "Missed Growth Opportunities",
    description: "Critical insights buried in complex spreadsheets go unnoticed",
  },
  {
    icon: AlertTriangle,
    title: "Reactive Decision Making",
    description: "By the time you spot trends, it's often too late to act",
  },
  {
    icon: Target,
    title: "Siloed Team Data",
    description: "No single source of truth leads to misaligned priorities",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Traditional Analytics Are Holding You Back
          </h2>
          <p className="text-xl text-muted-foreground">
            Most businesses struggle with fragmented data and complex tools that 
            create more problems than they solve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-destructive/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
