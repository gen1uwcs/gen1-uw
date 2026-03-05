import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold/30 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-pink/30 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-lavender/40 blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              University of Washington • Allen School
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              GEN1 at UW CSE
            </h1>

            <p className="text-xl sm:text-2xl text-primary-foreground/90 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Are you a first-generation Allen School student? Join our community
              of trailblazers navigating the path to success in computer science.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdfwHM1RJi0JgpEz045oPa3qZUL5DQjvqMetT2yJF5QJtVUjw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Become a Member
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30 px-8 py-6 text-lg"
              >
                <a
                  href="https://mailman.cs.washington.edu/mailman/listinfo/gen1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Mailing List
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xl font-bold text-primary-foreground">100+</div>
                  <div className="text-xs text-primary-foreground/80">Members</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xl font-bold text-primary-foreground">5+</div>
                  <div className="text-xs text-primary-foreground/80">Years</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xl font-bold text-primary-foreground">20+</div>
                  <div className="text-xs text-primary-foreground/80">Events</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <img 
                src="/general-images/google.png" 
                alt="GEN1 Community"
                className="aspect-[4/3] rounded-3xl object-cover border border-primary-foreground/20"
              />
              {/* Decorative smaller photos */}
              <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-2xl bg-gold/30 backdrop-blur-sm border border-primary-foreground/10 overflow-hidden">
                <img 
                  src="/general-images/grad.JPG" 
                  alt="GEN1 Event"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-xl bg-lavender/40 backdrop-blur-sm border border-primary-foreground/10 overflow-hidden">
                <img 
                  src="/general-images/amy.jpeg" 
                  alt="GEN1 Event"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
