import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Award } from "lucide-react";

export default function About() {
  const team = [
    { icon: Target, title: "Our Mission", description: "Saving lives through real-time emergency alerts and community preparedness" },
    { icon: Heart, title: "Our Values", description: "Safety, transparency, community engagement, and continuous improvement" },
    { icon: Users, title: "Our Team", description: "Experienced emergency responders, engineers, and safety experts" },
    { icon: Award, title: "Our Commitment", description: "24/7 monitoring, rapid response, and constant system improvement" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About FireAlert
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Leading emergency alert system protecting communities across the region.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              FireAlert was founded with a single mission: to save lives by providing real-time emergency alerts to communities at risk of fire emergencies. We recognized that seconds matter in emergency situations, and residents need immediate, actionable information to make life-saving decisions.
            </p>
            <p>
              Our team brings together experienced emergency responders, software engineers, and public safety experts who understand the critical importance of reliable communication during emergencies. We've invested in cutting-edge technology and partnerships with local fire departments to ensure our alert system is always operating at peak efficiency.
            </p>
            <p>
              Today, FireAlert serves as a trusted resource for over 50,000 subscribers across 150+ square kilometers, providing 24/7 monitoring and real-time alerts that have helped countless residents stay safe. We continue to expand our services and improve our technology to better serve our communities.
            </p>
            <p>
              Our commitment is unwavering: to be the most reliable, responsive, and trusted emergency alert system in the region. We work closely with emergency management agencies, fire departments, and community organizations to ensure our services meet the highest standards of reliability and effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 text-center rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Active Subscribers</div>
            </div>
            <div className="p-6 text-center rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Square Kilometers Covered</div>
            </div>
            <div className="p-6 text-center rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">&lt;5 min</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
            <div className="p-6 text-center rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Continuous Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
