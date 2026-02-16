import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  Bell,
  Thermometer,
  Wind,
  Droplet,
  Radio,
  Flame,
  MapPin,
  Clock,
  Activity,
} from "lucide-react";

export default function Index() {
  const sensors = [
    {
      id: 1,
      name: "Temperature",
      value: "45°C",
      icon: Thermometer,
      status: "Critical",
      location: "Sector A1",
    },
    {
      id: 2,
      name: "Humidity",
      value: "15%",
      icon: Droplet,
      status: "Low",
      location: "Sector A1",
    },
    {
      id: 3,
      name: "Wind Speed",
      value: "28 km/h",
      icon: Wind,
      status: "High",
      location: "Sector B2",
    },
    {
      id: 4,
      name: "Smoke Density",
      value: "850 AQI",
      icon: Radio,
      status: "Critical",
      location: "Sector A1",
    },
  ];

  const currentAlerts = [
    {
      id: 1,
      title: "Wildfire Alert",
      location: "Northern Ridge Area",
      severity: "High",
      description: "Active fire spreading rapidly, evacuation recommended",
      distance: "2.5 km away",
      coordinates: "40.7128°N, 74.0060°W",
      status: "Active",
    },
    {
      id: 2,
      title: "Structure Fire",
      location: "Downtown District",
      severity: "Medium",
      description: "Fire department responding to commercial building",
      distance: "5.3 km away",
      coordinates: "40.7580°N, 73.9855°W",
      status: "Responding",
    },
    {
      id: 3,
      title: "Brush Fire",
      location: "East Valley",
      severity: "Medium",
      description: "Fire contained to brushland, monitoring in progress",
      distance: "8.1 km away",
      coordinates: "40.6892°N, 74.1445°W",
      status: "Contained",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Top Alerts Bar */}
      <section className="bg-primary/10 border-b-2 border-primary/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Bell size={18} className="text-primary animate-pulse" />
              Current Alerts:
            </div>
            {currentAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex-shrink-0 px-4 py-2 bg-card rounded-lg border border-primary/30 hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      alert.severity === "High"
                        ? "bg-red-500 animate-pulse"
                        : "bg-yellow-500"
                    }`}
                  />
                  <span className="text-xs font-medium text-foreground">
                    {alert.title}
                  </span>
                  <span className="text-xs text-muted-foreground">({alert.status})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT SIDE - Description & Sensors */}
            <div className="lg:col-span-1 space-y-6">
              {/* Description Section */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  System Overview
                </h2>
                <p className="text-muted-foreground mb-4">
                  FireAlert monitors real-time fire emergencies with advanced sensor networks and rapid response coordination.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Activity size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Real-time Monitoring</h4>
                      <p className="text-sm text-muted-foreground">24/7 sensor data collection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Radio size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Live Updates</h4>
                      <p className="text-sm text-muted-foreground">Instant alert notifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Precise Location</h4>
                      <p className="text-sm text-muted-foreground">GPS coordinates tracking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sensors Section */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Thermometer size={20} className="text-primary" />
                  Active Sensors
                </h3>
                <div className="space-y-3">
                  {sensors.map((sensor) => {
                    const Icon = sensor.icon;
                    return (
                      <div
                        key={sensor.id}
                        className="p-3 bg-background rounded-lg border border-border/50"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Icon size={16} className="text-primary" />
                            <span className="text-sm font-semibold text-foreground">
                              {sensor.name}
                            </span>
                          </div>
                          <span
                            className={`text-xs font-bold px-2 py-1 rounded ${
                              sensor.status === "Critical"
                                ? "bg-red-500/20 text-red-600"
                                : sensor.status === "High"
                                ? "bg-yellow-500/20 text-yellow-600"
                                : "bg-green-500/20 text-green-600"
                            }`}
                          >
                            {sensor.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">
                            {sensor.value}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {sensor.location}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90">
                  <Link to="/data">View All Sensor Data</Link>
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE - Current Fire Alerts */}
            <div className="lg:col-span-2">
              <div
                className="bg-card rounded-lg border border-border p-6"
                style={{
                  width: "800px",
                  height: "1000px",
                  overflow: "auto",
                }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Flame size={24} className="text-primary" />
                  Active Fire Alerts
                </h2>

                <div className="space-y-4">
                  {currentAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="p-5 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`w-3 h-3 rounded-full ${
                                alert.severity === "High"
                                  ? "bg-red-500 animate-pulse"
                                  : "bg-yellow-500"
                              }`}
                            />
                            <h3 className="font-semibold text-lg text-foreground">
                              {alert.title}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <MapPin size={14} />
                            {alert.location}
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary text-white">
                          {alert.severity}
                        </span>
                      </div>

                      <p className="text-foreground mb-4 text-sm">
                        {alert.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-background rounded-lg">
                        <div>
                          <p className="text-xs text-muted-foreground">Status</p>
                          <p className="font-semibold text-foreground">{alert.status}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Distance</p>
                          <p className="font-semibold text-foreground">{alert.distance}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-xs text-muted-foreground">Coordinates</p>
                          <p className="font-mono text-sm text-primary">
                            {alert.coordinates}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90 text-white"
                        >
                          <Link to="/emergency" className="flex items-center gap-2">
                            <Phone size={16} />
                            Report / Help
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1"
                        >
                          <Link to="/data">View Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full mt-6">
                  <Link to="/alerts" className="flex items-center gap-2">
                    View Complete Alert History
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Phone } from "lucide-react";
