import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { 
  BrainCircuit, 
  Menu, 
  X, 
  User, 
  Building2,
  Search,
  FileText,
  TrendingUp
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: BrainCircuit },
    { href: "/find-jobs", label: "Find Jobs", icon: Search },
    { href: "/resume-analysis", label: "Resume Analysis", icon: FileText },
    { href: "/career-counseling", label: "Career Guidance", icon: TrendingUp },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-primary p-2 rounded-lg shadow-glow group-hover:animate-glow transition-all duration-300">
              <BrainCircuit className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CareerAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300",
                  "hover:bg-muted hover:text-primary",
                  isActive(item.href)
                    ? "bg-primary/10 text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/auth?tab=login" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Job Seeker</span>
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/employer-auth" className="flex items-center space-x-2">
                <Building2 className="h-4 w-4" />
                <span>Employer</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                  "hover:bg-muted",
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/auth?tab=login" onClick={() => setIsOpen(false)}>
                  <User className="mr-3 h-4 w-4" />
                  Job Seeker Login
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/employer-auth" onClick={() => setIsOpen(false)}>
                  <Building2 className="mr-3 h-4 w-4" />
                  Employer Portal
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
