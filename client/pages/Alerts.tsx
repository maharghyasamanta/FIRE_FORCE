import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Flame, MapPin, AlertCircle, Clock } from "lucide-react";

export default function Alerts() {
  const alerts = [
    {
      id: 1,
      title: "Wildfire Alert",
      location: "Northern Ridge Area",
      severity: "High",
      description: "Active fire spreading rapidly, evacuation recommended",
      time: "2 hours ago",
      distance: "2.5 km away",
    },
    {
      id: 2,
      title: "Structure Fire",
      location: "Downtown District",
      severity: "Medium",
      description: "Fire department responding to commercial building",
      time: "4 hours ago",
      distance: "5.3 km away",
    },
    {
      id: 3,
      title: "Brush Fire",
      location: "East Valley",
      severity: "Medium",
      description: "Fire contained to brushland, monitoring in progress",
      time: "6 hours ago",
      distance: "8.1 km away",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Active Fire Alerts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Monitor real-time fire emergencies in your area. Receive instant notifications when new alerts are issued.
          </p>
        </div>
      </section>

      {/* Alerts List */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="p-6 md:p-8 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Flame size={20} className="text-primary" />
                      <h3 className="font-semibold text-lg md:text-xl text-foreground">{alert.title}</h3>
                    </div>
                    <p className="text-muted-foreground flex items-center gap-2 mb-3">
                      <MapPin size={16} />
                      {alert.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary text-white whitespace-nowrap">
                    {alert.severity}
                  </span>
                </div>

                <p className="text-foreground mb-4">{alert.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-primary/20">
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock size={16} />
                    {alert.time}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <AlertCircle size={16} />
                    {alert.distance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="py-12 md:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-lg p-8 border-2 border-primary/30">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to Stay Informed
            </h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>Enable notifications in your account settings to receive instant alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>Set your location to receive alerts relevant to your area</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>Check this page regularly for the latest active fire emergencies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                <span>In case of emergency, always call 911 immediately</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
