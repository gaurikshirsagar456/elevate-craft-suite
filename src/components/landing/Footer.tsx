import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "API Reference", "Status", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"],
};

const socialLinks = [
  { name: "Twitter", icon: "𝕏" },
  { name: "LinkedIn", icon: "in" },
  { name: "GitHub", icon: "⌥" },
  { name: "YouTube", icon: "▶" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">N</span>
              </div>
              <span className="font-display font-bold text-xl text-background">Niche</span>
            </div>
            <p className="text-background/60 text-sm mb-6">
              Smarter analytics for modern teams. Transform your data into growth.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-background/20 hover:text-background transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-background mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/60 hover:text-background transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Niche. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/40 hover:text-background text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-background/40 hover:text-background text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-background/40 hover:text-background text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
