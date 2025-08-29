import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, TrendingUp } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chioma Adebayo",
      role: "Full-time Trader",
      location: "Lagos, Nigeria",
      content: "VFDN transformed my understanding of forex trading. From a complete beginner to making consistent profits in just 3 months. The mentorship program is unmatched!",
      rating: 5,
      profit: "+$15,000",
      timeframe: "6 months"
    },
    {
      name: "Ibrahim Mohammed",
      role: "Portfolio Manager",
      location: "Abuja, Nigeria", 
      content: "The intensive training gave me the confidence to quit my 9-5 and trade full-time. The risk management strategies alone have saved me thousands.",
      rating: 5,
      profit: "+$25,000",
      timeframe: "8 months"
    },
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      location: "London, UK",
      content: "Even from overseas, VFDN's online training was exceptional. The community support and daily insights helped me build a successful trading portfolio.",
      rating: 5,
      profit: "+$12,500",
      timeframe: "4 months"
    },
    {
      name: "Emmanuel Okafor", 
      role: "Software Developer",
      location: "Port Harcourt, Nigeria",
      content: "Started with the free Telegram group and was so impressed that I enrolled in the intensive course. Best investment I've ever made for my financial future.",
      rating: 5,
      profit: "+$8,500",
      timeframe: "3 months"
    },
    {
      name: "Fatima Alhassan",
      role: "Business Owner",
      location: "Kano, Nigeria",
      content: "The mentorship program didn't just teach me to trade - it taught me to think like a professional trader. The psychology sessions were game-changers.",
      rating: 5,
      profit: "+$30,000",
      timeframe: "1 year"
    },
    {
      name: "David Chen",
      role: "Financial Analyst",
      location: "Dubai, UAE",
      content: "VFDN's approach to forex education is refreshingly practical. Real strategies, real results. I've recommended it to all my colleagues interested in trading.",
      rating: 5,
      profit: "+$18,000",
      timeframe: "7 months"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-gold fill-current' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real students who trusted VFDN to transform their trading journey.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-premium mb-2">500+</div>
            <div className="text-muted-foreground">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-trading mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">$2M+</div>
            <div className="text-muted-foreground">Student Profits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="trading-card h-full">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Profit Badge */}
                <div className="inline-flex items-center bg-profit/10 text-profit px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {testimonial.profit} in {testimonial.timeframe}
                </div>
                
                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="trading-card-premium max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of successful traders who started their journey with VFDN.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-glow bg-gradient-premium text-gold-foreground hover:shadow-premium">
                Start Your Journey Today
              </Button>
              <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                View More Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;