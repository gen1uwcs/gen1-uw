import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Heart, Target, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We believe in the power of community. By connecting first-gen students, we create a support system that helps everyone succeed.",
  },
  {
    icon: Target,
    title: "Empowerment",
    description:
      "We provide resources, workshops, and mentorship to help you develop the skills and confidence needed to thrive.",
  },
  {
    icon: Lightbulb,
    title: "Opportunity",
    description:
      "We create pathways to internships, jobs, and leadership roles that might otherwise be inaccessible.",
  },
  {
    icon: Users,
    title: "Representation",
    description:
      "We advocate for first-gen students within the Allen School and ensure our voices are heard.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About GEN1
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Supporting first-generation college students in the Paul G. Allen
              School of Computer Science & Engineering.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Empowering First-Gen Students to Succeed
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                GEN1 is dedicated to creating a supportive community for
                first-generation college students in computer science and
                engineering at the University of Washington. We understand that
                being the first in your family to attend college comes with unique
                challenges, and we're here to help you navigate them.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                What Drives Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is First-Gen */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                What Does "First-Generation" Mean?
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="leading-relaxed mb-6">
                  A first-generation college student is typically defined as
                  someone whose parents or guardians did not complete a
                  four-year college degree. This includes students whose parents
                  may have attended some college but didn't graduate, as well as
                  those whose parents earned degrees outside the United States.
                </p>
                <p className="leading-relaxed">
                  At GEN1, we welcome all students who identify with the
                  first-gen experience. If you're unsure whether you qualify,
                  we encourage you to reach out – you're likely more welcome than
                  you think!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
