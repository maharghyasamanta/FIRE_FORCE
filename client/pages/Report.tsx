import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, MapPin, Flame, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Report() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Report a Fire
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            If you witness a fire, call 911 immediately. Use this form to provide additional information.
          </p>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="bg-primary/10 border-b-2 border-primary/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 text-foreground font-semibold">
            <AlertTriangle size={24} className="text-primary" />
            <span>Always call 911 first if you witness a fire or are in danger</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card p-8 md:p-12 rounded-lg border-2 border-primary/30 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Fire Report Form</h2>

            <form className="space-y-6">
              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  <MapPin size={16} className="inline mr-2" />
                  Location of Fire *
                </label>
                <input
                  type="text"
                  placeholder="Enter address or intersection"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  <Flame size={16} className="inline mr-2" />
                  Description of Fire *
                </label>
                <textarea
                  placeholder="Describe what you see - size, color of flames, smoke, structures affected, etc."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                  required
                />
              </div>

              {/* Fire Type */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Type of Fire *
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary">
                  <option value="">Select fire type</option>
                  <option value="structure">Structure Fire (Building)</option>
                  <option value="wildfire">Wildfire / Brush Fire</option>
                  <option value="vehicle">Vehicle Fire</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Hazards */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Hazards Present
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-foreground">Explosions or loud noises</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-foreground">Thick/dark smoke</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-foreground">People in danger</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-foreground">Power lines affected</span>
                  </label>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  <CheckCircle size={20} className="mr-2" />
                  Submit Fire Report
                </Button>
              </div>
            </form>
          </div>

          {/* Information Box */}
          <div className="bg-primary/5 p-6 rounded-lg border-2 border-primary/30">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle size={20} className="text-primary" />
              Important Information
            </h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li>✓ Call 911 immediately if you witness a fire</li>
              <li>✓ Evacuate the area and move to a safe location</li>
              <li>✓ Do not attempt to fight the fire unless trained</li>
              <li>✓ Provide emergency responders with your location</li>
              <li>✓ This form supplements but does not replace calling 911</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
