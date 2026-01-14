import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-12 sm:p-16 lg:p-20">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-pink/30 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Join GEN1?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8">
              Become part of a community that understands your journey. Get access
              to resources, mentorship, and opportunities designed for first-gen
              students.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
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
                className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30 px-8"
              >
                <a
                  href="https://mailman.cs.washington.edu/mailman/listinfo/gen1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Subscribe to Updates
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
