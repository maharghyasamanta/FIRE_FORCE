import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, AlertTriangle, Radio, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Emergency() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Emergency Alert Banner */}
      <section className="bg-primary/10 border-b-2 border-primary/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <AlertTriangle size={28} className="text-primary animate-pulse" />
            <div>
              <h2 className="font-bold text-foreground text-lg">In Case of Emergency</h2>
              <p className="text-muted-foreground">Always call 911 first for immediate help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Emergency Call */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-card p-8 md:p-12 rounded-lg border-2 border-primary/30">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                Emergency Assistance
              </h1>

              <div className="bg-primary/5 p-8 rounded-lg border-2 border-primary/30 mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Phone size={48} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Call Immediately</p>
                    <p className="text-4xl font-bold text-primary">911</p>
                  </div>
                </div>
                <p className="text-center text-foreground font-semibold mb-4">
                  If you are in immediate danger, call 911 right now
                </p>
                <p className="text-center text-sm text-muted-foreground">
                  Available 24 hours a day, 7 days a week for all emergencies
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">What to Tell the Dispatcher:</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">1.</span>
                    <span className="text-foreground">Your location (address, intersection, or landmark)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">2.</span>
                    <span className="text-foreground">Type of emergency (fire, medical, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">3.</span>
                    <span className="text-foreground">What you are witnessing and any hazards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">4.</span>
                    <span className="text-foreground">Number of people affected (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">5.</span>
                    <span className="text-foreground">Your contact number if they call back</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Additional Emergency Contacts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <Radio size={28} className="text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Fire Department</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Non-emergency fire department services and inquiries
                </p>
                <a href="tel:5551234567" className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                  (555) 123-4567
                </a>
              </div>

              <div className="p-6 md:p-8 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={28} className="text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">Emergency Center</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Visit our emergency operations center for assistance
                </p>
                <p className="text-sm text-foreground">
                  123 Fire Station Road<br />
                  City, State 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Instructions */}
      <section className="py-12 md:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">During a Fire Emergency</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="font-bold text-foreground mb-3">Evacuation Instructions</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>✓ Alert occupants immediately</li>
                <li>✓ Use stairs, never elevators</li>
                <li>✓ Feel doors before opening (use back of hand)</li>
                <li>✓ Stay low to avoid smoke</li>
                <li>✓ Close doors behind you</li>
                <li>✓ Go to your predetermined meeting point</li>
                <li>✓ Never re-enter the building</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-secondary/5 border border-secondary/20">
              <h3 className="font-bold text-foreground mb-3">If Trapped Inside</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>✓ Close all doors between you and fire</li>
                <li>✓ Cover cracks under doors with wet cloth</li>
                <li>✓ Signal from windows if possible</li>
                <li>✓ Call 911 and tell them your exact location</li>
                <li>✓ Avoid opening windows (creates draft)</li>
                <li>✓ Remain calm and patient for rescue</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="font-bold text-foreground mb-3">After Evacuation</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>✓ Go to your designated meeting place</li>
                <li>✓ Account for all family members</li>
                <li>✓ Call emergency services if needed</li>
                <li>✓ Stay away from the fire area</li>
                <li>✓ Follow instructions from emergency personnel</li>
                <li>✓ Document damages for insurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
