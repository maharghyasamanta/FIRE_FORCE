import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, BookOpen, AlertTriangle, MapPin, CheckCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resources() {
  const resources = [
    {
      icon: AlertTriangle,
      title: "Evacuation Planning",
      description: "Learn how to create an evacuation plan for your family and household",
      items: ["Create an evacuation route", "Identify meeting points", "Practice drills", "Prepare emergency supplies"],
    },
    {
      icon: Shield,
      title: "Fire Safety Tips",
      description: "Essential safety measures to protect yourself and your property",
      items: ["Home fire safety", "Workplace safety", "Vehicle safety", "Community preparedness"],
    },
    {
      icon: Lightbulb,
      title: "Emergency Preparedness",
      description: "Get ready before disaster strikes with these important steps",
      items: ["Build emergency kits", "Important documents", "Communication plans", "Insurance coverage"],
    },
    {
      icon: BookOpen,
      title: "Educational Materials",
      description: "In-depth guides and educational resources about fire hazards",
      items: ["Fire behavior basics", "Climate effects", "Prevention strategies", "First aid guide"],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Safety Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive guides and educational materials to help you stay safe and prepared for fire emergencies.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <div
                  key={idx}
                  className="p-6 md:p-8 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-6">{resource.description}</p>
                  <ul className="space-y-3 mb-6">
                    {resource.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-12 md:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Quick Safety Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-foreground mb-3">Before a Fire</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Install smoke alarms</li>
                <li>• Keep exits clear</li>
                <li>• Practice escape routes</li>
                <li>• Keep emergency numbers handy</li>
              </ul>
            </div>
            <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20">
              <h3 className="font-semibold text-foreground mb-3">During a Fire</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Call 911 immediately</li>
                <li>• Evacuate without delay</li>
                <li>• Don't use elevators</li>
                <li>• Stay low to avoid smoke</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-foreground mb-3">After a Fire</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Wait for all-clear signal</li>
                <li>• Help others if safe</li>
                <li>• Document damages</li>
                <li>• Contact insurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need More Information?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized safety guidance or to schedule a community workshop.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Contact Support
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
