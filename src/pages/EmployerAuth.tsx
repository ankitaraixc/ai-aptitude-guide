import Navigation from "@/components/ui/navigation";
import AuthTabs from "@/components/ui/auth-tabs";
import { Building2, Users, Target, BarChart3, CheckCircle } from "lucide-react";

const EmployerAuth = () => {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Candidate Screening",
      description: "Automatically screen and rank candidates based on job requirements"
    },
    {
      icon: Users,
      title: "Smart Talent Matching",
      description: "Find the perfect candidates with our advanced matching algorithms"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Get detailed analytics on your job postings and candidate pipeline"
    },
    {
      icon: Building2,
      title: "Company Branding",
      description: "Showcase your company culture and attract top talent"
    }
  ];

  const benefits = [
    "Reduce hiring time by 60% with AI screening",
    "Access to verified candidate profiles",
    "Real-time application tracking",
    "Advanced search and filtering options",
    "Dedicated account management support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground lg:text-4xl mb-4">
                Find Top Talent with AI
              </h1>
              <p className="text-lg text-muted-foreground">
                Streamline your hiring process with our intelligent platform. Post jobs, screen candidates automatically, and find the perfect match for your team using advanced AI algorithms.
              </p>
            </div>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg border border-border/50 shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Why Employers Choose CareerAI</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Companies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">15K+</div>
                  <div className="text-sm opacity-90">Jobs Posted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Auth Form */}
          <div className="flex justify-center">
            <AuthTabs userType="employer" defaultTab="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerAuth;