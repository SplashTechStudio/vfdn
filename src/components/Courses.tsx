import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Users, MessageCircle, Star, TrendingUp } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: "free",
      title: "Free Telegram Community",
      price: "FREE",
      duration: "Ongoing",
      description: "Join our active community of traders for daily market insights, signals, and peer support.",
      features: [
        "Daily market analysis",
        "Trading signals",
        "Community support",
        "Educational content",
        "Live market discussions",
        "Trading psychology tips"
      ],
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      popular: false,
      cta: "Join Telegram",
      highlight: "Perfect for beginners"
    },
    {
      id: "intensive",
      title: "3-Week Intensive Training",
      price: "300",
      duration: "6 Weeks",
      description: "Comprehensive forex trading bootcamp covering everything from basics to advanced strategies.",
      features: [
        "Complete trading curriculum",
        "Live trading sessions",
        "Personal trading plan",
        "Risk management mastery",
        "Technical analysis expertise",
        "Fundamental analysis",
        "Psychology & discipline",
        "Trading journal setup",
        "Lifetime community access",
        "Certificate of completion"
      ],
      icon: <TrendingUp className="w-8 h-8 text-profit" />,
      popular: true,
      cta: "Enroll Now",
      highlight: "Most Popular Choice"
    },
    {
      id: "mentorship",
      title: "Elite Mentorship Program",
      price: "$700",
      duration: "6 Months",
      description: "One-on-one mentorship with seasoned professionals for serious traders ready to go pro.",
      features: [
        "Personal trading mentor",
        "Weekly 1-on-1 sessions",
        "Custom trading strategy",
        "Portfolio management guidance",
        "Advanced risk management",
        "Professional trading psychology",
        "Live trading supervision",
        "Business development support",
        "Network access",
        "Ongoing support"
      ],
      icon: <Star className="w-8 h-8 text-gold" />,
      popular: false,
      cta: "Apply Now",
      highlight: "Elite Level Training"
    }
  ];

  const curriculum = [
    "Forex Market Fundamentals",
    "Technical Analysis Mastery", 
    "Chart Patterns & Indicators",
    "Risk Management Strategies",
    "Trading Psychology",
    "Fundamental Analysis",
    "Money Management",
    "Trading Plan Development",
    "Smart Money Concepts",
    "Live Trading Sessions",
    "Backtesting & Strategy Optimization",
  ];

  return (
    <section id="courses" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From free community access to elite mentorship - we have the right program 
            to accelerate your forex trading journey.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-trading ${
                course.popular ? 'trading-card-premium scale-105' : 'trading-card'
              }`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 bg-gradient-premium text-gold-foreground px-4 py-1 text-sm font-medium">
                  {course.highlight}
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  {course.icon}
                </div>
                <CardTitle className="text-2xl font-heading mb-2">{course.title}</CardTitle>
                <div className="text-3xl font-bold text-gradient-premium mb-2">
                  {course.price}
                </div>
                <div className="flex items-center justify-center text-muted-foreground text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <p className="text-muted-foreground mt-4">{course.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-profit mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    course.popular 
                      ? 'btn-glow bg-gradient-premium text-gold-foreground hover:shadow-premium' 
                      : course.id === 'mentorship'
                      ? 'btn-glow bg-gradient-trading text-profit-foreground hover:shadow-trading'
                      : 'bg-gradient-primary text-primary-foreground hover:shadow-glow'
                  }`}
                  size="lg"
                >
                  {course.cta}
                </Button>

                {course.id === 'intensive' && (
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    Next cohort starts soon - Limited spots!
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Curriculum Overview */}
        <div className="trading-card max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading font-bold text-center mb-8">
            What You'll Master
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((topic, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <span className="font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;