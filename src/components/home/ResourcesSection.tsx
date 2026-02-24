import { 
  GraduationCap, 
  Users, 
  Star,
  DollarSign
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: DollarSign,
    title: "Financial Aid",
    description: "Annual celebration highlighting first-gen student achievements.",
  },
  {
    icon: GraduationCap,
    title: "Academic Support",
    description: "Tutoring, study groups, and academic mentorship programs.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Meet other first-gen students in the Allen School.",
  },
  {
    icon: Star,
    title: "Opportunities",
    description: "Access exclusive opportunities within the Allen School.",
  },
];

export const ResourcesSection = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Resources to Help You Thrive
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore workshops, academic support, career preparation, and community events 
            designed to help you succeed at the Allen School and beyond. Check out all of our 
            resources on our resources page.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
          <Link to="/resources">
            <div
              key={resource.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {resource.description}
              </p>
            </div>
            </Link>
          ))}
        </div>
          <div className="text-center mt-7">
          <Link to="/resources">
            <Button size="lg" className="rounded-xl px-8">
              View All Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
