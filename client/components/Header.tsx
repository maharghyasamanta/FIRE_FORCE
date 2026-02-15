import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
            <AlertTriangle size={20} />
          </div>
          <span className="text-foreground">FireAlert</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/alerts" className="text-foreground hover:text-primary transition-colors">
            Alerts
          </Link>
          <Link to="/resources" className="text-foreground hover:text-primary transition-colors">
            Resources
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="hidden sm:inline-flex"
          >
            <Link to="/report">Report Fire</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/emergency">Emergency</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
