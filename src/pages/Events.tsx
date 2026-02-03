import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, ExternalLink, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const upcomingEvents = [
  {
    title: "First-Gen Week Kickoff",
    date: "November 4, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Bill & Melinda Gates Center",
    description:
      "Join us to celebrate First-Generation College Student Week with food, networking, and fun activities!",
    type: "Social",
  },
  {
    title: "FAFSA Workshop",
    date: "November 12, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "CSE 003",
    description:
      "Get help filling out your FAFSA application with guidance from financial aid advisors.",
    type: "Workshop",
  },
  {
    title: "Resume Review Night",
    date: "November 18, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "CSE 403",
    description:
      "Bring your resume for personalized feedback from industry professionals and senior students.",
    type: "Career",
  },
  {
    title: "Tech Company Panel",
    date: "December 2, 2024",
    time: "5:30 PM - 7:30 PM",
    location: "Gates Commons",
    description:
      "Hear from first-gen professionals working at top tech companies about their career journeys.",
    type: "Panel",
  },
];

const pastEvents = [
  {
    title: "Welcome Back BBQ",
    date: "September 28, 2024",
    type: "Social",
  },
  {
    title: "Interview Prep Workshop",
    date: "October 15, 2024",
    type: "Career",
  },
  {
    title: "Mental Health & Wellness Panel",
    date: "October 22, 2024",
    type: "Panel",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Social":
      return "bg-pink/20 text-pink";
    case "Workshop":
      return "bg-lavender/50 text-primary";
    case "Career":
      return "bg-coral/20 text-coral";
    case "Panel":
      return "bg-gold/20 text-gold";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Events
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join us for workshops, panels, socials, and more throughout the year.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Coming Up
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Upcoming Events
              </h2>
            </div>

            <div className="grid gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Event Flyer Placeholder */}
                    <div className="lg:w-48 flex-shrink-0">
                      <AspectRatio ratio={4 / 5} className="bg-muted rounded-xl border-2 border-dashed border-border overflow-hidden">
                        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                          <Image className="w-10 h-10 mb-2" />
                          <span className="text-xs text-center px-2">Event Flyer</span>
                        </div>
                      </AspectRatio>
                    </div>
                    
                    <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                              event.type
                            )}`}
                          >
                            {event.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <Button className="gradient-cta border-0 self-start lg:self-center">
                        RSVP
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Archive
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Past Events
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.title}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getTypeColor(
                      event.type
                    )}`}
                  >
                    {event.type}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
