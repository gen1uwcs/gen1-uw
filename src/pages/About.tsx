import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Heart, Target, Lightbulb, Users, Image } from "lucide-react";

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
  const baseUrl = import.meta.env.BASE_URL;

  const photos = [
    { src: `${baseUrl}about-images/gamenight.jpeg`, alt: "Game night" },
    { src: `${baseUrl}about-images/graduates.JPG`, alt: "Graduates at first gen grad" },
    { src: `${baseUrl}about-images/tabling.jpg`, alt: "Ha Vi and EJ tabling" },
    { src: `${baseUrl}about-images/uber.jpeg`, alt: "Uber event" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            GEN1 at the University of Washington aims to celebrate and support the Allen School’s 
            vibrant and diverse first-generation community by providing resources and a community 
            to ensure academic, professional, and personal success. 
            </p>
          </div>
        </section>

        {/* Photo Gallery Banner */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-secondary border border-border flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover rounded-2xl" 
                    style ={{ objectPosition: "30% 20%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
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
              <div className="aspect-[4/3] rounded-2xl bg-secondary border border-border flex items-center justify-center">
                <img 
                  src={`${baseUrl}about-images/gen1-first-gen-grad-team.jpg`} 
                  alt="GEN1 First-Gen Grad Team" 
                  className="w-full h-full object-cover rounded-2xl" 
                />
              </div>
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
                  <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
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
                By definition, first-generation students are trailblazers; 
                they are one of the first in their family to pursue a Bachelor's 
                degree in the US. Many people are unaware of the first-gen community 
                and the different experiences that these students face in contrast to 
                their peers. As a club, we hope to make the community more visible and 
                ensure that our members have a place to share their stories with other 
                first-gen students. 
                </p>
                <p className="leading-relaxed">
                GEN1 hopes to not only celebrate our identity among our members, but to 
                also provide resources - such as workshops and panels - dedicated to giving 
                first-gen students extra tools for success. The issues faced by first-gen 
                students at UW can be very different from those faced by the average student, 
                and these experiences showcase the strength of our community. We aim to inspire 
                one another to thrive in the realm of higher education, and we hope that you are 
                excited to take part in celebrating first-gen students! 
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
