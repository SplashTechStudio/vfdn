import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About VFDN", href: "#about" },
    { name: "Our Courses", href: "#courses" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" }
  ];

  const programs = [
    { name: "Free Telegram Community", href: "#courses" },
    { name: "3-Week Intensive Training", href: "#courses" }, 
    { name: "Elite Mentorship Program", href: "#courses" },
    { name: "Portfolio Management", href: "#contact" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Risk Disclosure", href: "#" },
    { name: "Refund Policy", href: "#" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-3xl font-heading font-bold text-gradient-premium">
                VFDN
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Vanguard Forex Drive Network - Empowering traders with persistence, 
              focus, and ambition to achieve financial freedom through professional 
              forex education.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                196 NAHSERA Life Camp, Abuja, Nigeria
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                info@vfdn.academy
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                +234 (0) 803 123 4567
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold mb-6 text-lg">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Legal */}
          <div>
            <h4 className="font-heading font-semibold mb-6 text-lg">Community</h4>
            <div className="mb-6">
              <a 
                href="#" 
                className="inline-flex items-center bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg hover:shadow-glow transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Telegram
              </a>
            </div>
            <div className="mb-6">
              <p className="text-sm text-secondary-foreground/60 mb-2">Follow @goodhazefx</p>
              <p className="text-sm text-secondary-foreground/80">Personal Trading Account: GHFX</p>
            </div>
            <h5 className="font-semibold mb-3">Legal</h5>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <div className="bg-loss/10 border border-loss/20 rounded-lg p-4">
            <h5 className="font-semibold text-loss mb-2">Risk Disclaimer</h5>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Forex trading involves substantial risk of loss and is not suitable for all investors. 
              Past performance is not indicative of future results. VFDN provides educational services 
              only and does not provide investment advice. Trading decisions are the sole responsibility 
              of the individual trader.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-secondary-foreground/60 mb-4 md:mb-0">
              © 2024 Vanguard Forex Drive Network (VFDN). Operating under Regeemoni Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-secondary-foreground/60">Regulated & Licensed</span>
              <span className="text-secondary-foreground/60">•</span>
              <span className="text-secondary-foreground/60">Nigeria Financial Intelligence Unit Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;