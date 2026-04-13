import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-xl rounded-[2rem] border border-border bg-card p-10 text-center shadow-[0_24px_80px_-48px_rgba(40,67,52,0.35)]">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
          Page not found
        </p>
        <h1 className="mt-4 text-5xl font-bold text-foreground md:text-6xl">
          404
        </h1>
        <p className="mt-4 text-balance text-lg text-muted-foreground">
          This page wandered off into the undergrowth. The main site is still
          right where it should be.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <a href="/">
              <ArrowLeft className="h-4 w-4" />
              Return Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
