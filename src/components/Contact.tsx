import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Visit Our Academy",
      details: ["196 NAHSERA Life Camp", "Abuja, Nigeria"],
      action: "Get Directions"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-profit" />,
      title: "Join Our Community",
      details: ["Free Telegram Channel", "@vfdn_academy"],
      action: "Join Now"
    },
    {
      icon: <Mail className="w-6 h-6 text-gold" />,
      title: "Email Us",
      details: ["info@vfdn.academy"],
      action: "Send Email"
    },
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      title: "Call Us",
      details: ["+234 (0) 815 144 4423", "Mon-Fri: 9AM-6PM WAT"],
      action: "Call Now"
    }
  ];

  const faqs = [
    {
      question: "Do I need prior trading experience?",
      answer: "No! Our courses are designed for complete beginners. We start with the fundamentals and gradually build up to advanced strategies."
    },
    {
      question: "What's included in the 3-week intensive course?",
      answer: "Complete curriculum covering technical analysis, risk management, trading psychology, live trading sessions, personal trading plan, and lifetime community access."
    },
    {
      question: "Is the mentorship program worth $5,000?",
      answer: "Our elite mentorship provides personalized 1-on-1 guidance, custom strategies, and ongoing support. Most students recover their investment within the first few months of trading."
    },
    {
      question: "Can I learn remotely?",
      answer: "Yes! All our programs are available online with live sessions, recorded materials, and interactive community platforms accessible worldwide."
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team or join our community. We're here to support 
            your trading success every step of the way.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="trading-card text-center group hover:shadow-trading transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 group-hover:animate-float">
                  {contact.icon}
                </div>
                <h3 className="font-heading font-semibold mb-3">{contact.title}</h3>
                <div className="space-y-1 mb-4">
                  {contact.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="text-sm">
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="trading-card">
            <h3 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <Input placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Interested In</label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option>Select a program</option>
                  <option>3-Week Intensive Training ($1,000)</option>
                  <option>Elite Mentorship Program ($5,000)</option>
                  <option>Free Telegram Community</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your trading goals and questions..."
                  className="min-h-[120px]"
                />
              </div>
              <Button 
                className="w-full btn-glow bg-gradient-primary text-primary-foreground hover:shadow-glow"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="trading-card">
                  <h4 className="font-semibold mb-3 text-primary">{faq.question}</h4>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="trading-card-premium mt-8">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-gold mr-3" />
                <h4 className="font-heading font-semibold">Office Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM WAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 2:00 PM WAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <div className="trading-card-premium">
            <h3 className="text-2xl font-heading font-bold mb-4">
              🚀 Next Cohort Starting Soon!
            </h3>
            <p className="text-muted-foreground mb-6">
              Limited spots available for our upcoming 3-week intensive training program.
              Secure your spot today and transform your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow bg-primary hover:bg-primary/75 hover:border hover:border-primary text-gold-foreground ">
                Reserve Your Spot Now
              </Button>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;