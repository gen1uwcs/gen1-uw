import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Linkedin, Mail } from "lucide-react";

const leaders = [
  {
    name: "Alex Chen",
    role: "President",
    major: "Computer Science",
    year: "Senior",
    bio: "Passionate about building inclusive tech communities and mentoring fellow first-gen students.",
    image: "🧑‍💻",
  },
  {
    name: "Maria Rodriguez",
    role: "Vice President",
    major: "Computer Engineering",
    year: "Junior",
    bio: "Focused on creating resources and events that help first-gen students thrive academically.",
    image: "👩‍💻",
  },
  {
    name: "David Kim",
    role: "Events Coordinator",
    major: "Computer Science",
    year: "Senior",
    bio: "Planning engaging events that bring our community together and provide valuable opportunities.",
    image: "🧑‍🎓",
  },
  {
    name: "Sarah Johnson",
    role: "Outreach Lead",
    major: "Informatics",
    year: "Junior",
    bio: "Working to connect GEN1 with industry partners and expand our network of supporters.",
    image: "👩‍🎓",
  },
  {
    name: "Michael Tran",
    role: "Finance Officer",
    major: "Computer Science",
    year: "Senior",
    bio: "Managing our budget and securing funding to support all of our programs and initiatives.",
    image: "🧑‍💼",
  },
  {
    name: "Emily Nguyen",
    role: "Communications",
    major: "Human-Computer Interaction",
    year: "Junior",
    bio: "Spreading the word about GEN1 and keeping our community informed and engaged.",
    image: "👩‍💼",
  },
];

const Leadership = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Leadership
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Meet the dedicated team working to support first-gen students in the
              Allen School.
            </p>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all"
                >
                  <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-5xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {leader.image}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{leader.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {leader.major} • {leader.year}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {leader.bio}
                    </p>
                    <div className="flex justify-center gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-muted-foreground" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5 text-muted-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Leadership */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Want to Join the Team?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for passionate first-gen students to help lead
                our organization. Leadership positions open up each spring quarter.
              </p>
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Benefits of Leadership
                </h3>
                <ul className="text-left space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    Develop leadership and organizational skills
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    Network with industry professionals and alumni
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    Make a meaningful impact on your community
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    Build your resume with valuable experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
