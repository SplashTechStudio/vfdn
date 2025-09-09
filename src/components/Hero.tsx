import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Star } from "lucide-react";
import tradingVideo from "@/assets/trading-hero-video.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={tradingVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Animated Elements */}
      <div className="absolute inset-0 hero-chart-animation" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary mb-4">
              VFDN
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          {/* Main Tagline */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Vanguard Forex Drive Network
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-4 font-medium">
            Master the Art of Trading with <span className="text-secondary font-bold">Persistence, Focus & Ambition</span>
          </p>
          
          <p className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Join Nigeria's Premier Forex Academy - Transforming Beginners into Professional Traders
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="trading-card bg-white/10 backdrop-blur-md border-white/20">
              <TrendingUp className="w-8 h-8 text-profit mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
            <div className="trading-card bg-white/10 backdrop-blur-md border-white/20">
              <Users className="w-8 h-8 text-primary-glow mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">200+</div>
              <div className="text-white/80 text-sm">Students Trained</div>
            </div>
            <div className="trading-card bg-white/10 backdrop-blur-md border-white/20">
              <Star className="w-8 h-8 text-gold mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">4.4/5</div>
              <div className="text-white/80 text-sm">Student Rating</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="accent"
              size="lg" 
              className="btn-glow px-8 py-4 text-lg font-semibold group"
            >
              Join Upcoming Cohort
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg backdrop-blur-md"
            >
              Watch Free Training
            </Button>
          </div>
          
          {/* Upcoming Cohort Notice */}
          <div className="mt-8 p-4 bg-profit/20 border border-profit/30 rounded-lg backdrop-blur-md inline-block">
            <p className="text-white text-sm">
              🚀 <strong>Next Cohort Starting Soon</strong> - Limited Spots Available
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;