import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  Bell,
  MapPin,
  Clock,
  Shield,
  Users,
  Flame,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Index() {
  const activeAlerts = [
    {
      id: 1,
      title: "Wildfire Alert",
      location: "Northern Ridge Area",
      severity: "High",
      description: "Active fire spreading rapidly, evacuation recommended",
      distance: "2.5 km away",
    },
    {
      id: 2,
      title: "Structure Fire",
      location: "Downtown District",
      severity: "Medium",
      description: "Fire department responding to commercial building",
      distance: "5.3 km away",
    },
  ];

  const features = [
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Get instant notifications about fire emergencies in your area",
    },
    {
      icon: MapPin,
      title: "Location Tracking",
      description: "See active fires on an interactive map with detailed information",
    },
    {
      icon: Clock,
      title: "Response Updates",
      description: "Monitor emergency response status and estimated arrival times",
    },
    {
      icon: Shield,
      title: "Safety Resources",
      description: "Access evacuation guides and fire safety tips from experts",
    },
  ];

  const stats = [
    { label: "Active Alerts", value: "24/7" },
    { label: "Response Time", value: "<5 min" },
    { label: "Coverage Area", value: "150+ km²" },
    { label: "Alert Subscribers", value: "PROTOTYPE-1" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-12 md:pb-24">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202201/Himveers_7_IT_1643179360122.PNG?VersionId=lhlJs2rSubV6CV9v1iU5JPjKW_p9cvPh&size=686:*)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <AlertCircle size={16} className="text-primary" />
                <span className="text-sm text-primary font-medium">Emergency Alert System</span>
              </div>

              <div>
                <h1 className="flex flex-col justify-start items-start text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                  Stay Safe with <span className="inline text-primary font-bold">Real-time</span> Fire Alerts
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Get instant notifications about fire emergencies in your area. Our advanced alert system provides critical information when seconds matter most.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Link to="/emergency" className="flex items-center gap-2">
                    Emergency Now
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link to="/alerts" className="flex items-center gap-2">
                    View Active Alerts
                    <Flame size={20} />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xl font-bold text-primary">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                {/* Animated circle background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
                <div className="absolute inset-4 rounded-xl border-2 border-primary/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Flame size={80} className="text-primary mx-auto mb-4 animate-pulse" />
                    <p className="text-foreground font-semibold">Active Emergency?</p>
                    <p className="text-muted-foreground text-sm mt-2">Call 911 Immediately</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Alerts Section */}
      <section className="py-12 md:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Active Alerts in Your Area
            </h2>
            <p className="text-muted-foreground">
              Monitor real-time fire emergencies and safety information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeAlerts.map((alert) => (
              <div
                key={alert.id}
                className="p-6 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Flame size={20} className="text-primary" />
                      <h3 className="font-semibold text-lg text-foreground">{alert.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin size={16} />
                      {alert.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary text-white">
                    {alert.severity}
                  </span>
                </div>

                <p className="text-foreground mb-4">{alert.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <AlertCircle size={16} />
                    {alert.distance}
                  </span>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/90"
                  >
                    <Link to="/alerts">View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <Link to="/alerts" className="flex items-center gap-2">
                View All Alerts
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose FireAlert
            </h2>
            <p className="text-muted-foreground">
              Advanced features designed to keep you informed and safe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-card transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Information Section */}
      <section className="py-12 md:py-20 bg-primary/10 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg p-8 md:p-12 border-2 border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={28} className="text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Emergency Contact Information
                </h2>
              </div>

              <p className="text-muted-foreground mb-8">
                If you witness a fire or are in immediate danger, take action immediately.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone size={24} className="text-primary" />
                    <h3 className="font-semibold text-lg text-foreground">Call Emergency</h3>
                  </div>
                  <p className="text-2xl font-bold text-primary mb-2">911</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                </div>

                <div className="p-6 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Bell size={24} className="text-secondary" />
                    <h3 className="font-semibold text-lg text-foreground">Get Alerts</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Enable notifications to receive instant fire alerts
                  </p>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-full"
                  >
                    <Link to="/alerts">Enable Notifications</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Safety Tip:</strong> In case of fire, evacuate immediately. Do not attempt to fight the fire unless you are trained and equipped. Leave belongings behind and focus on getting to safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Be Prepared, Stay Safe
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of residents who receive critical fire emergency alerts. Protect yourself and your community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Link to="/emergency" className="flex items-center gap-2">
                  <Users size={20} />
                  Join Our Network
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link to="/resources" className="flex items-center gap-2">
                  <Shield size={20} />
                  Learn Safety Tips
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
