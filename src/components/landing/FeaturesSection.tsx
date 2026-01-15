import { motion } from "framer-motion";
import { 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone, 
  Bot,
  Clock,
  Lock,
  Palette
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Powerful visualizations and custom reports that reveal what matters most.",
    benefit: "Make data-driven decisions 10x faster",
  },
  {
    icon: Bot,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms that automatically detect patterns and anomalies.",
    benefit: "Catch opportunities before competitors",
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Live dashboards that refresh automatically as your data changes.",
    benefit: "Always work with the latest information",
  },
  {
    icon: Globe,
    title: "100+ Integrations",
    description: "Connect with your favorite tools including Salesforce, HubSpot, and more.",
    benefit: "Unified view of all your data",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption and SSO support.",
    benefit: "Peace of mind for your sensitive data",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your dashboards anywhere with our native iOS and Android apps.",
    benefit: "Stay connected on the go",
  },
  {
    icon: Clock,
    title: "Scheduled Reports",
    description: "Automate report delivery to stakeholders on your schedule.",
    benefit: "Save 5+ hours weekly on reporting",
  },
  {
    icon: Lock,
    title: "Granular Permissions",
    description: "Control who sees what with role-based access controls.",
    benefit: "Secure collaboration at scale",
  },
  {
    icon: Palette,
    title: "White Label",
    description: "Customize branding to match your company's identity.",
    benefit: "Professional client-facing reports",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A comprehensive suite of tools designed to give your team 
            the competitive edge they deserve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:bg-gradient-card hover:shadow-card hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <p className="text-sm font-medium text-primary">
                ✓ {feature.benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
