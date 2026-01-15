import { motion } from "framer-motion";

const logos = [
  { name: "Google"},
  { name: "Microsoft"},
  { name: "Slack" },
  { name: "Notion" },
  { name: "Stripe"},
  { name: "Shopify"},
];

export const LogoCloud = () => {
  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-10"
        >
          Trusted by <span className="font-semibold text-foreground">50,000+</span> businesses worldwide
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              
              <span className="font-display font-semibold text-lg">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
