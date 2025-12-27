import { Phone, MessageCircle, MapPin, Clock, Leaf, Shield, Users, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";

const Index = () => {
  const phoneNumber = "+27123456789";
  const whatsappNumber = "27123456789";

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-border md:hidden">
        <div className="flex gap-3 max-w-md mx-auto">
          <Button variant="call" size="lg" className="flex-1" asChild>
            <a href={`tel:${phoneNumber}`}>
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
          <Button variant="whatsapp" size="lg" className="flex-1" asChild>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Cannabis Café interior with comfortable seating and warm ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 py-12 max-w-2xl mx-auto animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4 text-cannabis-light" />
            <span className="text-cannabis-light text-sm font-medium">Worcester, Western Cape</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-4 leading-tight">
            Cannabis Café
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/90 mb-8 font-light">
            Your Local Cannabis Café in Worcester
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href={`tel:${phoneNumber}`}>
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="https://maps.google.com/?q=Worcester+South+Africa" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-6 h-6" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-cream/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cream/50 rounded-full animate-pulse-soft" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-slide-up">
            Welcome to Cannabis Café
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-up animation-delay-100">
            Nestled in the heart of Worcester, Cannabis Café is your go-to destination for quality products and a truly relaxed atmosphere. 
            Whether you're a local or just passing through, our friendly team is here to help you find exactly what you need. 
            Experience the best of what the cannabis community has to offer in a welcoming, comfortable space.
          </p>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-16 md:py-24 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Browse our selection of premium products
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Flower", icon: Leaf, description: "Premium strains" },
              { name: "Pre-rolls", icon: Coffee, description: "Ready to enjoy" },
              { name: "Edibles", icon: Coffee, description: "Tasty treats" },
              { name: "Drinks", icon: Coffee, description: "Refreshing options" },
            ].map((item, index) => (
              <div 
                key={item.name}
                className={`gradient-card rounded-2xl p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-slide-up animation-delay-${(index + 1) * 100}`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8 text-sm">
            Full menu available in-store
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: MapPin, 
                title: "Trusted Local Spot", 
                description: "Proudly serving the Worcester community with quality and care." 
              },
              { 
                icon: Users, 
                title: "Chill Environment", 
                description: "Relax in our comfortable space designed for your enjoyment." 
              },
              { 
                icon: Shield, 
                title: "Quality Products", 
                description: "We source only the finest products for our customers." 
              },
              { 
                icon: MapPin, 
                title: "Easy to Find", 
                description: "Conveniently located in the heart of Worcester." 
              },
            ].map((item, index) => (
              <div 
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16 md:py-24 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Visit Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-card h-64 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52890.86873435665!2d19.4047437!3d-33.6469508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcd0a3e5a9e1527%3A0x1f0bcdf6813a9e60!2sWorcester%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "256px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cannabis Café Location in Worcester, South Africa"
              />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Worcester, Western Cape<br />
                  South Africa
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Opening Hours</h3>
                </div>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday – Friday: 9:00 AM – 8:00 PM</p>
                  <p>Saturday: 10:00 AM – 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="call" size="lg" className="flex-1" asChild>
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" className="flex-1" asChild>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-hero py-12 px-6 pb-28 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-cannabis-light" />
              <span className="text-xl font-semibold text-cream">Cannabis Café</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-cream/70 text-sm">
              © {new Date().getFullYear()} Cannabis Café. All rights reserved.
            </p>
            <p className="text-cream/50 text-xs mt-2">
              Please consume responsibly. Must be 18+ years old.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
