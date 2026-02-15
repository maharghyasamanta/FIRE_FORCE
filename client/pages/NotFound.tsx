import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center py-12 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="mb-8">
            <AlertTriangle size={80} className="text-primary mx-auto mb-6" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-4">Page Not Found</p>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. This might be a placeholder for a future section, or the link may be broken.
          </p>

          <div className="bg-primary/5 p-6 rounded-lg border-2 border-primary/30 mb-8">
            <p className="text-sm text-foreground">
              <strong>Requested path:</strong> <code className="text-primary">{location.pathname}</code>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link to="/" className="flex items-center gap-2">
                <Home size={20} />
                Return Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <Link to="/alerts">View Alerts</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
