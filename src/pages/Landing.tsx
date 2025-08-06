import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import {
  BrainCircuit,
  Zap,
  Target,
  Users,
  FileText,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Search,
  Building2,
  User
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI Resume Analysis",
      description: "Get instant feedback on your resume with our advanced AI that analyzes formatting, content, and optimization suggestions."
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "Our AI matches your skills and experience with the most relevant job opportunities, increasing your chances of success."
    },
    {
      icon: TrendingUp,
      title: "Career Counseling",
      description: "Receive personalized career guidance based on your strengths, interests, and market trends."
    },
    {
      icon: Zap,
      title: "Skill Gap Analysis",
      description: "Identify missing skills and get recommendations on how to bridge the gap for your dream career."
    },
    {
      icon: Users,
      title: "Employer Portal",
      description: "Employers can post jobs and use AI to screen candidates efficiently and find the best matches."
    },
    {
      icon: FileText,
      title: "Application Tracking",
      description: "Track your job applications and get insights on your application status and performance."
    }
  ];

  const benefits = [
    "85% faster job matching with AI-powered algorithms",
    "Comprehensive resume analysis with actionable feedback",
    "Personalized career recommendations based on your profile",
    "Real-time application tracking and status updates",
    "Direct connection with top employers and recruiters",
    "Continuous skill development recommendations"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-background/5"></div>
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary animate-fade-in">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered Career Solutions
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground lg:text-6xl xl:text-7xl animate-slide-up">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-primary-glow to-success-glow bg-clip-text text-transparent">
                Career Match
              </span>
            </h1>
            
            <p className="mb-8 max-w-3xl text-lg text-primary-foreground/80 lg:text-xl animate-fade-in" style={{animationDelay: '0.2s'}}>
              Leverage AI to analyze your resume, discover perfect job matches, and get personalized career counseling. Transform your career journey with intelligent insights.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300" asChild>
                <Link to="/auth?tab=signup" className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Start as Job Seeker
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20" asChild>
                <Link to="/employer-auth" className="flex items-center">
                  <Building2 className="mr-2 h-5 w-5" />
                  Employer Portal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl mb-4">
              Intelligent Career Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform revolutionizes how you search for jobs, analyze resumes, and plan your career trajectory.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl mb-6">
                Why Choose CareerAI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform combines cutting-edge AI technology with deep career expertise to provide you with unparalleled job search and career development experience.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button size="lg" className="shadow-elegant" asChild>
                  <Link to="/auth?tab=signup">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-primary p-8 shadow-glow">
                <div className="h-full w-full rounded-xl bg-background p-6 shadow-card">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-3 w-3 rounded-full bg-success"></div>
                      <span className="text-sm font-medium">Resume Score: 92/100</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-2 bg-gradient-primary rounded-full w-[92%]"></div>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Job Matches Found</span>
                        <span className="font-medium">247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Applications Sent</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interview Requests</span>
                        <span className="font-medium text-success">8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground lg:text-4xl mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already discovered their perfect career match with our AI-powered platform.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-glow" asChild>
              <Link to="/auth?tab=signup">
                <Search className="mr-2 h-5 w-5" />
                Find Jobs Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/resume-analysis">
                <FileText className="mr-2 h-5 w-5" />
                Analyze Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-primary p-2 rounded-lg">
                  <BrainCircuit className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">CareerAI</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Intelligent career solutions powered by AI technology.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/jobs" className="hover:text-primary transition-colors">Find Jobs</Link></li>
                <li><Link to="/resume-analysis" className="hover:text-primary transition-colors">Resume Analysis</Link></li>
                <li><Link to="/career-counseling" className="hover:text-primary transition-colors">Career Guidance</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/employer-auth" className="hover:text-primary transition-colors">Post Jobs</Link></li>
                <li><Link to="/employer-dashboard" className="hover:text-primary transition-colors">Find Candidates</Link></li>
                <li><Link to="/employer-dashboard" className="hover:text-primary transition-colors">AI Screening</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CareerAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;