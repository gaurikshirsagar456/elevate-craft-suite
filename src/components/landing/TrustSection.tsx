import { motion } from "framer-motion";
import { Shield, Lock, Award, Clock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Certified secure",
  },
  {
    icon: Lock,
    title: "256-bit SSL",
    description: "Enterprise encryption",
  },
  {
    icon: Award,
    title: "GDPR Compliant",
    description: "Privacy first",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Always available",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-16 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <badge.icon className="w-8 h-8 text-background/80" />
              <div>
                <p className="font-semibold text-background">{badge.title}</p>
                <p className="text-sm text-background/60">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
