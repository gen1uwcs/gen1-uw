import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community",
    description: "Building a supportive network of first-gen students.",
  },
  {
    icon: Target,
    title: "Empowerment",
    description: "Providing resources to help you succeed academically and professionally.",
  },
  {
    icon: Lightbulb,
    title: "Opportunity",
    description: "Creating pathways to internships, jobs, and leadership roles.",
  },
];

export const AboutPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About GEN1
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              First to Go, <br />
              <span className="text-gradient">Leading the Way</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              GEN1 is a student organization at the Paul G. Allen School of
              Computer Science & Engineering, dedicated to supporting
              first-generation college students. We understand the unique
              challenges you face and are here to help you thrive.
            </p>

            <div className="space-y-4 mb-8">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="group">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 gradient-hero opacity-20 rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 rounded-2xl bg-lavender/30 flex items-center justify-center">
                  <span className="text-6xl">🎓</span>
                </div>
                <div className="h-56 rounded-2xl bg-coral/30 flex items-center justify-center">
                  <span className="text-6xl">💻</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-56 rounded-2xl bg-pink/30 flex items-center justify-center">
                  <span className="text-6xl">🤝</span>
                </div>
                <div className="h-40 rounded-2xl bg-gold/30 flex items-center justify-center">
                  <span className="text-6xl">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
