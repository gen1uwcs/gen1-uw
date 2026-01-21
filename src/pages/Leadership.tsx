import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Linkedin, Mail, User } from "lucide-react";

const leaders = [
  {
    name: "Czarin Dela Cruz",
    role: "Chair",
    pronouns: "she/her",
    major: "Computer Science & Data Science",
    year: "Senior",
    favClass: "CSE 340",
    favLang: "Java",
    askAbout: "Current watchlist + Cafes",
    funFact: "Dream travel destination: Tokyo",
  },
  {
    name: "Deetya Kamat",
    role: "Vice Chair",
    pronouns: "she/her",
    major: "Computer Science, Minor in Business Administration",
    year: "Junior",
    favClass: "CSE 333",
    favLang: "Python",
    askAbout: "My latest read!",
    funFact: "Dream travel destination: Edinburgh",
  },
  {
    name: "Raghavi Putluri",
    role: "Secretary",
    pronouns: "she/her",
    major: "Computer Science",
    year: "Senior",
    favClass: "CSE 331",
    favLang: "Python",
    askAbout: "Study spots @ UW",
    funFact: "Dream travel destination: Barcelona",
  },
  {
    name: "Krish Doshi",
    role: "Student Relations",
    pronouns: "he/him",
    major: "Computer Science + Statistics (Data Science), Minor in Business Administration and Music",
    year: "Sophomore",
    favClass: "CSE 332",
    favLang: "Java + Python",
    askAbout: "Husky Marching Band",
    funFact: "Dream travel destination: Japan",
  },
  {
    name: "David Guzman Valente",
    role: "Media Director",
    pronouns: "he/him",
    major: "Computer Science",
    year: "Junior",
    favClass: "CSE 457",
    favLang: "C++, C#",
    askAbout: "Animes",
    funFact: "Favorite Song: Dile Que Tu Quieres by Ozuna",
  },
  {
    name: "Kevin Kim",
    role: "Public Relations",
    pronouns: "he/him",
    major: "Computer Science + Economics, Minor in Entrepreneurship",
    year: "Junior",
    favClass: "CSE 344",
    favLang: "Java",
    askAbout: "Investments, Korea",
    funFact: "I can whistle any song",
  },
  {
    name: "Vanya Jain",
    role: "Graphics Director",
    pronouns: "she/her",
    major: "Computer Science",
    year: "Sophomore",
    favClass: "CSE 311",
    favLang: "Javascript",
    askAbout: "Music + Coffee",
    funFact: "Favorite TV Show: Severance",
  },
  {
    name: "Gordon Huang",
    role: "Treasurer",
    pronouns: "he/him",
    major: "Computer Science, Minor in Data Science",
    year: "Senior",
    favClass: "CSE 473",
    favLang: "Java",
    askAbout: "My study abroad in Japan",
    funFact: "Ultimate Comfort food: Miso ramen + soft boiled egg",
  },
  {
    name: "Christy Nguyen",
    role: "Media Director",
    pronouns: "she/her",
    major: "Computer Science",
    year: "Junior",
    favClass: "CSE 332",
    favLang: "Typescript",
    askAbout: "The best view points",
    funFact: "Ultimate Comfort Food: Taco Time",
  },
  {
    name: "Mira Lee",
    role: "Public Relations",
    pronouns: "she/her",
    major: "Computer Science",
    year: "Junior",
    favClass: "CSE 332",
    favLang: "Python",
    askAbout: "Hikes in WA",
    funFact: "Ultimate Comfort food: Boiling Point",
  },
  {
    name: "Becky Jiang",
    role: "GEN1ntern",
    pronouns: "she/her",
    major: "Computer Science",
    year: "Sophomore",
    favClass: "CSE 311",
    favLang: "Java",
    askAbout: "Hikes in WA, Tennis",
    funFact: "Ultimate Comfort food: Tomato Egg Stir-fry",
  },
  {
    name: "Raiden Santos",
    role: "GEN1ntern",
    pronouns: "he/him",
    major: "Computer Science + Philosophy",
    year: "Junior",
    favClass: "CSE 331",
    favLang: "Python",
    askAbout: "Billiards, Boxing",
    funFact: "I have a life-sized Bruce Lee statue",
  },
  {
    name: "Michael Lin",
    role: "GEN1ntern",
    pronouns: "he/him",
    major: "Computer Science",
    year: "Freshman",
    favClass: "CSE 121",
    favLang: "Python",
    askAbout: "Food spots @ UW",
    funFact: "I've been to 23 countries",
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
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              The dedicated leaders working to support first-gen students in the
              Allen School.
            </p>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all"
                >
                  {/* Photo Placeholder */}
                  <div className="w-32 h-32 rounded-full bg-secondary border-4 border-lavender/50 flex items-center justify-center mb-5 mx-auto group-hover:scale-105 group-hover:border-primary/50 transition-all overflow-hidden">
                    <User className="w-16 h-16 text-muted-foreground/50" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-1">{leader.role}</p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {leader.pronouns}
                    </p>
                    
                    <div className="space-y-2 text-left bg-secondary/50 rounded-lg p-3 mb-4">
                      <p className="text-xs">
                        <span className="font-medium text-foreground">Major:</span>{" "}
                        <span className="text-muted-foreground">{leader.major}</span>
                      </p>
                      <p className="text-xs">
                        <span className="font-medium text-foreground">Year:</span>{" "}
                        <span className="text-muted-foreground">{leader.year}</span>
                      </p>
                      <p className="text-xs">
                        <span className="font-medium text-foreground">Fav Class:</span>{" "}
                        <span className="text-muted-foreground">{leader.favClass}</span>
                      </p>
                      <p className="text-xs">
                        <span className="font-medium text-foreground">Fav Language:</span>{" "}
                        <span className="text-muted-foreground">{leader.favLang}</span>
                      </p>
                      <p className="text-xs">
                        <span className="font-medium text-foreground">Ask Me About:</span>{" "}
                        <span className="text-muted-foreground">{leader.askAbout}</span>
                      </p>
                    </div>
                    
                    <p className="text-xs text-accent font-medium italic mb-4">
                      {leader.funFact}
                    </p>
                    
                    <div className="flex justify-center gap-2">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 text-muted-foreground" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4 text-muted-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Club Photos Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              GEN1 in Action
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl bg-secondary border border-border flex items-center justify-center overflow-hidden group hover:shadow-lg transition-all"
                >
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-lavender/30 flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-primary/50" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Club Photo {i}
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      Upload to replace
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Leadership */}
        <section className="py-24 bg-background">
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
                    <span className="text-gold font-bold">•</span>
                    Develop leadership and organizational skills
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">•</span>
                    Network with industry professionals and alumni
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">•</span>
                    Make a meaningful impact on your community
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">•</span>
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
