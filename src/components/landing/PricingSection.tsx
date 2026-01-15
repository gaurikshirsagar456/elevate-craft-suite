import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started",
    price: "$29",
    period: "/month",
    features: [
      "Up to 5 team members",
      "10 dashboards",
      "Basic integrations",
      "Email support",
      "7-day data history",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing teams that need more power",
    price: "$79",
    period: "/month",
    features: [
      "Up to 20 team members",
      "Unlimited dashboards",
      "50+ integrations",
      "Priority support",
      "1-year data history",
      "AI-powered insights",
      "Custom branding",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: "Custom",
    period: "",
    features: [
      "Unlimited team members",
      "Unlimited everything",
      "100+ integrations",
      "Dedicated support",
      "Unlimited data history",
      "Advanced AI features",
      "SSO & SAML",
      "Custom SLA",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free, upgrade when you need. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "border-primary bg-card shadow-glow scale-105"
                  : "border-border bg-card"
              } transition-all duration-300 hover:shadow-card`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium">
                    <Sparkles size={14} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-2xl mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-5xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
