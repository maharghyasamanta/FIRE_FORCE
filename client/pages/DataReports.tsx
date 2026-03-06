import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import {
  Thermometer,
  Wind,
  Droplet,
  Radio,
  MapPin,
  Clock,
  AlertTriangle,
  TrendingUp,
  Waves,
  Zap,
  Flame,
  Eye,
  Navigation,
} from "lucide-react";

export default function DataReports() {
  // Sensor data over time
  const temperatureData = [
    { time: "00:00", temp: 22 },
    { time: "02:00", temp: 24 },
    { time: "04:00", temp: 28 },
    { time: "06:00", temp: 35 },
    { time: "08:00", temp: 42 },
    { time: "10:00", temp: 45 },
    { time: "12:00", temp: 48 },
  ];

  const sensorComparison = [
    {
      sensor: "Temperature (°C)",
      sector_a: 45,
      sector_b: 38,
      sector_c: 32,
    },
    {
      sensor: "Humidity (%)",
      sector_a: 15,
      sector_b: 22,
      sector_c: 35,
    },
    {
      sensor: "IR Sensor (Kelvin)",
      sector_a: 2450,
      sector_b: 1850,
      sector_c: 1200,
    },
    {
      sensor: "Gas Sensor (ppm)",
      sector_a: 850,
      sector_b: 620,
      sector_c: 410,
    },
  ];

  // Individual Sensor Data Sections
  const gpsSensorData = [
    { time: "00:00", lat: 40.7128, lon: -74.0060 },
    { time: "02:00", lat: 40.7135, lon: -74.0065 },
    { time: "04:00", lat: 40.7142, lon: -74.0070 },
    { time: "06:00", lat: 40.7155, lon: -74.0080 },
    { time: "08:00", lat: 40.7168, lon: -74.0095 },
    { time: "10:00", lat: 40.7180, lon: -74.0105 },
  ];

  const irSensorData = [
    { time: "00:00", ir_a: 1200, ir_b: 900, ir_c: 800 },
    { time: "02:00", ir_a: 1400, ir_b: 1050, ir_c: 850 },
    { time: "04:00", ir_a: 1800, ir_b: 1350, ir_c: 950 },
    { time: "06:00", ir_a: 2100, ir_b: 1650, ir_c: 1100 },
    { time: "08:00", ir_a: 2350, ir_b: 1800, ir_c: 1200 },
    { time: "10:00", ir_a: 2450, ir_b: 1850, ir_c: 1200 },
  ];

  const flameSensorData = [
    { time: "00:00", flame_a: 0, flame_b: 0, flame_c: 0 },
    { time: "02:00", flame_a: 15, flame_b: 5, flame_c: 0 },
    { time: "04:00", flame_a: 45, flame_b: 20, flame_c: 5 },
    { time: "06:00", flame_a: 78, flame_b: 45, flame_c: 12 },
    { time: "08:00", flame_a: 88, flame_b: 60, flame_c: 18 },
    { time: "10:00", flame_a: 98.5, flame_b: 67.3, flame_c: 22.1 },
  ];

  const gasSensorData = [
    { time: "00:00", gas_a: 100, gas_b: 80, gas_c: 50 },
    { time: "02:00", gas_a: 200, gas_b: 120, gas_c: 70 },
    { time: "04:00", gas_a: 350, gas_b: 250, gas_c: 150 },
    { time: "06:00", gas_a: 550, gas_b: 400, gas_c: 250 },
    { time: "08:00", gas_a: 700, gas_b: 520, gas_c: 320 },
    { time: "10:00", gas_a: 850, gas_b: 620, gas_c: 410 },
  ];

  const ultrasonicSensorData = [
    { time: "00:00", distance_a: 15.2, distance_b: 25.8, distance_c: 35.5 },
    { time: "02:00", distance_a: 12.8, distance_b: 22.5, distance_c: 33.2 },
    { time: "04:00", distance_a: 9.5, distance_b: 18.3, distance_c: 28.9 },
    { time: "06:00", distance_a: 6.8, distance_b: 14.2, distance_c: 24.5 },
    { time: "08:00", distance_a: 3.9, distance_b: 8.7, distance_c: 18.2 },
    { time: "10:00", distance_a: 2.3, distance_b: 4.7, distance_c: 8.9 },
  ];

  const fireLocations = [
    {
      id: 1,
      name: "Northern Ridge Fire",
      lat: "40.7128",
      lon: "-74.0060",
      intensity: "High",
      area: "2.5 km²",
      progress: "35% contained",
      startTime: "06:30 AM",
      reportedBy: "Automated Sensor Network",
    },
    {
      id: 2,
      name: "Downtown Structure Fire",
      lat: "40.7580",
      lon: "-73.9855",
      intensity: "Medium",
      area: "0.15 km²",
      progress: "Fire department on scene",
      startTime: "11:45 AM",
      reportedBy: "Emergency Call Center",
    },
    {
      id: 3,
      name: "East Valley Brush Fire",
      lat: "40.6892",
      lon: "-74.1445",
      intensity: "Medium",
      area: "1.2 km²",
      progress: "Contained",
      startTime: "09:15 AM",
      reportedBy: "Community Alert System",
    },
  ];

  const detailedSensorData = [
    {
      location: "Sensor Array - Sector A1 (Critical Zone)",
      sensors: [
        { name: "GPS Sensor", value: "40.7128°N, 74.0060°W", status: "Critical", trend: "🔴 Active Tracking" },
        { name: "IR Sensor (Infrared)", value: "2450K", status: "Critical", trend: "↑ Extreme Heat Detected" },
        { name: "Flame Sensor", value: "98.5% Confidence", status: "Critical", trend: "🔥 Flame Detected" },
        { name: "Gas Sensor (CO/CO2)", value: "850 ppm", status: "Critical", trend: "↑ Toxic Levels" },
        { name: "Temperature Sensor", value: "45°C", status: "Critical", trend: "↑ Rising Rapidly" },
        { name: "Ultrasonic Sensor", value: "2.3 meters", status: "Critical", trend: "⚠️ Close Distance" },
      ],
    },
    {
      location: "Sensor Array - Sector B2 (Secondary Zone)",
      sensors: [
        { name: "GPS Sensor", value: "40.7580°N, 73.9855°W", status: "High", trend: "🟡 Monitoring" },
        { name: "IR Sensor (Infrared)", value: "1850K", status: "High", trend: "↑ High Heat" },
        { name: "Flame Sensor", value: "67.3% Confidence", status: "High", trend: "⚠️ Potential Flame" },
        { name: "Gas Sensor (CO/CO2)", value: "620 ppm", status: "High", trend: "→ Elevated" },
        { name: "Temperature Sensor", value: "38°C", status: "High", trend: "↑ Rising" },
        { name: "Ultrasonic Sensor", value: "4.7 meters", status: "Normal", trend: "→ Stable Distance" },
      ],
    },
    {
      location: "Sensor Array - Sector C3 (Perimeter Zone)",
      sensors: [
        { name: "GPS Sensor", value: "40.6892°N, 74.1445°W", status: "Elevated", trend: "🟢 Standby" },
        { name: "IR Sensor (Infrared)", value: "1200K", status: "Elevated", trend: "→ Moderate Heat" },
        { name: "Flame Sensor", value: "22.1% Confidence", status: "Normal", trend: "✓ No Flame" },
        { name: "Gas Sensor (CO/CO2)", value: "410 ppm", status: "Moderate", trend: "→ Normal" },
        { name: "Temperature Sensor", value: "32°C", status: "Elevated", trend: "↑ Slightly Rising" },
        { name: "Ultrasonic Sensor", value: "8.9 meters", status: "Good", trend: "→ Safe Distance" },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Critical":
        return "bg-red-500/20 text-red-600 border border-red-500/30";
      case "High":
        return "bg-orange-500/20 text-orange-600 border border-orange-500/30";
      case "Elevated":
        return "bg-yellow-500/20 text-yellow-600 border border-yellow-500/30";
      case "Limited":
        return "bg-yellow-500/20 text-yellow-600 border border-yellow-500/30";
      default:
        return "bg-green-500/20 text-green-600 border border-green-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Data & Reports
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real-time sensor data, fire coordinates, and comprehensive alert information
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 space-y-12">
          {/* Fire Locations with Coordinates */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin size={28} className="text-primary" />
              Active Fire Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fireLocations.map((fire) => (
                <div
                  key={fire.id}
                  className="p-6 bg-card rounded-lg border-2 border-primary/30 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {fire.name}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="p-3 bg-background rounded-lg border border-border">
                      <p className="text-xs text-muted-foreground">Latitude</p>
                      <p className="font-mono font-bold text-primary">{fire.lat}°N</p>
                    </div>
                    <div className="p-3 bg-background rounded-lg border border-border">
                      <p className="text-xs text-muted-foreground">Longitude</p>
                      <p className="font-mono font-bold text-primary">{fire.lon}°W</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-background rounded-lg border border-border">
                        <p className="text-xs text-muted-foreground">Intensity</p>
                        <p className={`font-semibold ${
                          fire.intensity === "High" ? "text-red-600" : "text-yellow-600"
                        }`}>
                          {fire.intensity}
                        </p>
                      </div>
                      <div className="p-3 bg-background rounded-lg border border-border">
                        <p className="text-xs text-muted-foreground">Area</p>
                        <p className="font-semibold text-foreground">{fire.area}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <span className="text-sm font-semibold text-foreground">
                        {fire.progress}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock size={14} />
                      Reported: {fire.startTime}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      By: {fire.reportedBy}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sensor Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Temperature Trend Chart */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                Temperature Trend (Critical Zone)
              </h2>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis dataKey="time" stroke="#717171" />
                  <YAxis stroke="#717171" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e5e5",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="temp"
                    stroke="#ff3300"
                    strokeWidth={2}
                    dot={{ fill: "#ff3300", r: 4 }}
                    name="Temperature (°C)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Gas Sensor Data Chart */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap size={20} className="text-primary" />
                Gas Sensor - Toxic Gas Levels (ppm)
              </h2>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={gasSensorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis dataKey="time" stroke="#717171" />
                  <YAxis stroke="#717171" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e5e5",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="gas_a" stroke="#ff3300" strokeWidth={2} name="Sector A (Critical)" />
                  <Line type="monotone" dataKey="gas_b" stroke="#f78000" strokeWidth={2} name="Sector B (Secondary)" />
                  <Line type="monotone" dataKey="gas_c" stroke="#90ee90" strokeWidth={2} name="Sector C (Perimeter)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* IR Sensor Data Chart */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Eye size={20} className="text-primary" />
                IR Sensor (Infrared) - Thermal Detection (Kelvin)
              </h2>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={irSensorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis dataKey="time" stroke="#717171" />
                  <YAxis stroke="#717171" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e5e5",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="ir_a" stroke="#ff3300" strokeWidth={2} name="Sector A (Critical)" />
                  <Line type="monotone" dataKey="ir_b" stroke="#f78000" strokeWidth={2} name="Sector B (Secondary)" />
                  <Line type="monotone" dataKey="ir_c" stroke="#90ee90" strokeWidth={2} name="Sector C (Perimeter)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Ultrasonic Sensor Data Chart */}
            <div className="bg-card p-6 rounded-lg border border-border lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Waves size={20} className="text-primary" />
                Ultrasonic Sensor - Distance to Fire Front (meters)
              </h2>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={ultrasonicSensorData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis dataKey="time" stroke="#717171" />
                  <YAxis stroke="#717171" label={{ value: "Distance (m)", angle: -90, position: "insideLeft" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e5e5",
                    }}
                    formatter={(value) => `${value.toFixed(1)}m`}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="distance_a" stroke="#ff3300" strokeWidth={2} name="Sector A (Critical)" />
                  <Line type="monotone" dataKey="distance_b" stroke="#f78000" strokeWidth={2} name="Sector B (Secondary)" />
                  <Line type="monotone" dataKey="distance_c" stroke="#90ee90" strokeWidth={2} name="Sector C (Perimeter)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Multi-Sensor Comparison Chart */}
          <div className="bg-card p-6 rounded-lg border border-border mt-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Radio size={24} className="text-primary" />
              Multi-Sensor Comparison by Sector
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sensorComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="sensor" stroke="#717171" />
                <YAxis stroke="#717171" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e5e5",
                  }}
                />
                <Legend />
                <Bar dataKey="sector_a" fill="#ff3300" name="Sector A (Critical)" />
                <Bar dataKey="sector_b" fill="#f78000" name="Sector B (Secondary)" />
                <Bar dataKey="sector_c" fill="#90ee90" name="Sector C (Perimeter)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Advanced Sensor Data Tables */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap size={28} className="text-primary" />
              Advanced Sensor Network Data
            </h2>
            <p className="text-muted-foreground mb-6">
              Real-time data from multi-spectrum sensors including GPS tracking, infrared thermography, flame detection, gas monitoring, temperature sensing, and ultrasonic distance measurement across all active fire zones.
            </p>
            <div className="space-y-6">
              {detailedSensorData.map((sector, idx) => (
                <div
                  key={idx}
                  className="bg-card p-6 rounded-lg border border-border overflow-x-auto"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {sector.location}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sector.sensors.map((sensor, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-lg ${getStatusColor(sensor.status)}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-sm">{sensor.name}</p>
                          <span className="text-xs font-bold px-2 py-1 bg-white/20 rounded">
                            {sensor.trend}
                          </span>
                        </div>
                        <p className="text-2xl font-bold">{sensor.value}</p>
                        <p className="text-xs opacity-80">Status: {sensor.status}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sensor Information Guide */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Sensor Technology Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Navigation size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">GPS Sensor</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Provides precise geographic coordinates (latitude/longitude) for fire location tracking and real-time position updates.
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Eye size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">IR Sensor</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Infrared thermal imaging sensor detects heat signatures and measures surface temperatures in Kelvin (K).
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Flame size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">Flame Sensor</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Detects visible flames and fire presence with confidence percentage. Uses UV/IR wavelength detection.
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">Gas Sensor</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Monitors toxic gases (CO/CO2) in parts per million (ppm). Critical for evaluating air quality and hazard levels.
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">Temperature Sensor</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Measures ambient air temperature in Celsius. Tracks environmental heat changes and fire progression.
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Waves size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">Ultrasonic Sensor</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Measures distance to fire front and obstacles in meters. Used for safety perimeter establishment.
                </p>
              </div>
            </div>
          </div>

          {/* Alert Summary */}
          <div className="bg-primary/10 border-2 border-primary/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle size={24} className="text-primary" />
              Report Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card p-4 rounded-lg">
                <p className="text-muted-foreground text-sm mb-1">Total Active Fires</p>
                <p className="text-3xl font-bold text-primary">3</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-muted-foreground text-sm mb-1">Total Area Affected</p>
                <p className="text-3xl font-bold text-primary">3.85 km²</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-muted-foreground text-sm mb-1">Critical Zones</p>
                <p className="text-3xl font-bold text-red-600">1</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-muted-foreground text-sm mb-1">Response Status</p>
                <p className="text-3xl font-bold text-primary">Active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
