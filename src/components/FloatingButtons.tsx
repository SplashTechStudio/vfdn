import { useState, useEffect } from "react";
import { ChevronUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in learning more about VFDN's forex trading courses.");
    const phoneNumber = "2348031234567"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="bg-profit hover:bg-profit/90 text-profit-foreground rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
      </Button>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          variant="outline"
          className="bg-background/80 backdrop-blur-sm hover:bg-background rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 border-border"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default FloatingButtons;