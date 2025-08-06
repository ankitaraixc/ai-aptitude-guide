import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import AuthTabs from "@/components/ui/auth-tabs";
import { BrainCircuit, Users, Target, Zap } from "lucide-react";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") as "login" | "signup" | null;

  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Resume Analysis",
      description: "Get instant feedback and optimization suggestions for your resume"
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "Find opportunities that perfectly match your skills and career goals"
    },
    {
      icon: Users,
      title: "Career Counseling",
      description: "Receive personalized guidance from our AI career advisor"
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Track your application progress and get actionable insights"
    }
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
                Transform Your Career Journey
              </h1>
              <p className="text-lg text-muted-foreground">
                Join thousands of professionals who have found their dream jobs using our AI-powered platform. 
                Get personalized recommendations, optimize your resume, and accelerate your career growth.
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
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
                <span className="text-sm font-medium text-success">Live Statistics</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">12,847</div>
                  <div className="text-xs text-muted-foreground">Jobs Posted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">8,923</div>
                  <div className="text-xs text-muted-foreground">Candidates Hired</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">94%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Auth Form */}
          <div className="flex justify-center">
            <AuthTabs userType="jobseeker" defaultTab={tab || "login"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;