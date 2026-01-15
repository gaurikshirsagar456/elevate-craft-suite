import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Start with a 14-day free trial with full access to all Professional features. No credit card required. At the end of your trial, you can choose a plan that fits your needs or continue with our free Starter plan.",
  },
  {
    question: "Do I need a credit card to sign up?",
    answer: "No! You can start your free trial without entering any payment information. We'll only ask for payment details when you decide to upgrade to a paid plan.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. There are no long-term contracts or cancellation fees. You can upgrade, downgrade, or cancel your subscription at any time from your account settings.",
  },
  {
    question: "What integrations do you support?",
    answer: "We support 100+ integrations including Salesforce, HubSpot, Google Analytics, Stripe, Slack, and many more. Our team is constantly adding new integrations based on customer requests.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We're SOC 2 Type II certified, use 256-bit SSL encryption, and are fully GDPR compliant. Your data is stored in enterprise-grade data centers with 99.9% uptime guarantee.",
  },
  {
    question: "Do you offer discounts for startups or nonprofits?",
    answer: "Yes! We offer special pricing for qualified startups and nonprofit organizations. Contact our sales team to learn more about our discount programs.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include email support. Professional plans get priority support with faster response times. Enterprise customers receive dedicated account management and 24/7 phone support.",
  },
  {
    question: "Can I import my existing data?",
    answer: "Yes, you can import data from spreadsheets, databases, and other analytics tools. Our onboarding team can help with complex migrations at no additional cost.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. If you don't find what you're 
            looking for, reach out to our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline text-left font-display font-semibold text-lg py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
