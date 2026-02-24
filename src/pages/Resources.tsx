import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import {
  DollarSign,
  GraduationCap,
  Briefcase,
  Heart,
  BookOpen,
  Users,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const resourceCategories = [
  {
    icon: DollarSign,
    title: "Financial Aid",
    description: "Resources to help you fund your education.",
    resources: [
      {
        name: "UW Financial Aid Office",
        link: "https://www.washington.edu/financialaid/",
      },
      {
        name: "FAFSA Application",
        link: "https://studentaid.gov/h/apply-for-aid/fafsa",
      },
      {
        name: "Allen School Scholarships",
        link: "https://www.cs.washington.edu/students/ugrad/scholarships",
      },
      {
        name: "Emergency Aid",
        link: "https://www.washington.edu/emergencyaid/",
      },
    ],
  },
  {
    icon: GraduationCap,
    title: "Academic Support",
    description: "Get help with your coursework and academic success.",
    resources: [
      {
        name: "CSE Peer Advising",
        link: "https://www.cs.washington.edu/academics/undergraduate/advising/peer-advising/",
      },
      {
        name: "CLUE Study Sessions",
        link: "https://academicsupport.uw.edu/clue/",
      },
      {
        name: "Writing Center",
        link: "https://www.washington.edu/owrc/",
      },
      {
        name: "Undergraduate Research",
        link: "https://www.washington.edu/undergradresearch/",
      },
      {
        name: "CSE Research Opportunities",
        link: "https://www.cs.washington.edu/academics/undergraduate/research-opportunities/",
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Career Development",
    description: "Prepare for your future career in tech.",
    resources: [
      {
        name: "Allen School Career Center",
        link: "https://www.cs.washington.edu/students/career",
      },
      {
        name: "UW Career & Internship Center",
        link: "https://careers.uw.edu/",
      },
      {
        name: "LinkedIn Learning (Free for UW)",
        link: "https://www.linkedin.com/learning/",
      },
      {
        name: "Handshake Job Board",
        link: "https://uw.joinhandshake.com/",
      },
    ],
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Take care of your mental and physical health.",
    resources: [
      {
        name: "Counseling Center",
        link: "https://www.washington.edu/counseling/",
      },
      {
        name: "Hall Health Center",
        link: "https://wellbeing.uw.edu/medical/",
      },
      {
        name: "UW Food Pantry",
        link: "https://www.washington.edu/anyhungryhusky/",
      },
      {
        name: "Disability Resources",
        link: "https://depts.washington.edu/uwdrs/",
      },
    ],
  },
  {
    icon: BookOpen,
    title: "First-Gen Specific",
    description: "Resources designed for first-generation students.",
    resources: [
      {
        name: "First Gen @ UW",
        link: "https://firstgen.uw.edu/",
      },
      {
        name: "McNair Scholars Program",
        link: "https://www.washington.edu/omad/gsps/trio-mcnair-scholars/",
      },
      {
        name: "TRIO Programs",
        link: "https://depts.washington.edu/omadcs/trio-sss/about-trio-sss/",
      },
      {
        name: "I'm First Resources",
        link: "https://imfirst.org/resources/",
      },
    ],
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with other student organizations.",
    resources: [
      {
        name: "Allen School Student Orgs",
        link: "https://www.cs.washington.edu/academics/undergraduate/student-life/student-organizations/",
      },
      {
        name: "HUB Student Activities",
        link: "https://hub.washington.edu/get-involved/sao/",
      },
      {
        name: "Diversity at UW",
        link: "https://www.washington.edu/diversity/",
      },
    ],
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Resources
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              A curated collection of resources to help you succeed as a
              first-generation student.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category) => (
                <div
                  key={category.title}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.resources.map((resource) => (
                      <li key={resource.name}>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group"
                        >
                          <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need More Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Reach out to us and we'll help
              connect you with the right resources.
            </p>
            <Button asChild className="gradient-cta border-0">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
