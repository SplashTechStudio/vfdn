import { Shield, Target, Zap, Award, MapPin, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Focus",
      description: "Laser-focused training methodology that eliminates distractions and maximizes learning outcomes."
    },
    {
      icon: <Zap className="w-8 h-8 text-gold" />,
      title: "Persistence", 
      description: "Building the mental fortitude required to succeed in the challenging world of forex trading."
    },
    {
      icon: <Award className="w-8 h-8 text-profit" />,
      title: "Ambition",
      description: "Cultivating the ambition to not just trade, but to excel and become a market leader."
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Students Mentored", value: "500+" },
    { label: "Success Stories", value: "300+" },
    { label: "Countries Reached", value: "15+" }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
            About VFDN
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vanguard Forex Drive Network operates under <strong>Regeemoni Ltd</strong> as Nigeria's premier 
            forex academy and portfolio management company, dedicated to transforming aspiring traders 
            into market professionals.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="trading-card max-w-4xl mx-auto mb-20 text-center">
          <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-heading font-semibold mb-6">Our Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To democratize forex education in Africa by providing world-class training, mentorship, 
            and portfolio management services that empower individuals to achieve financial independence 
            through strategic trading.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="trading-card text-center group hover:shadow-trading transition-all duration-300">
                <div className="mb-6 group-hover:animate-float">
                  {value.icon}
                </div>
                <h4 className="text-xl font-heading font-semibold mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="trading-card-premium mb-20">
          <h3 className="text-2xl font-heading font-bold text-center mb-12">
            Our Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-premium mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Contact */}
        <div className="text-center">
          <div className="trading-card inline-block">
            <MapPin className="w-6 h-6 text-primary inline-block mr-2" />
            <span className="text-lg font-medium">
              196 NAHSERA Life Camp, Abuja, Nigeria
            </span>
          </div>
          <div className="mt-8">
            <p className="text-muted-foreground mb-4">
              Connect with our community and follow our trading insights:
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Users className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">@goodhazefx</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-primary font-medium">GHFX Personal Trading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;