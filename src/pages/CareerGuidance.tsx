import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Lightbulb, TrendingUp, Book, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CareerGuidance = () => {
  const [advice, setAdvice] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCareerGuidance = async () => {
      // For a real application, you'd pass the analysis result from the ResumeAnalysis page
      // via state management. Here we use localStorage as a simple demonstration.
      const storedAnalysis = localStorage.getItem('resumeAnalysisResult');

      if (!storedAnalysis) {
        setError("Please analyze your resume first to get career guidance.");
        setIsLoading(false);
        return;
      }
      
      const analysisResult = JSON.parse(storedAnalysis);
      
      try {
        const response = await fetch("/api/ai/career-counseling", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(analysisResult),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch career guidance from the server.");
        }

        const data = await response.json();
        setAdvice(data.counseling);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCareerGuidance();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold text-destructive mb-4">Error</h1>
        <p className="text-muted-foreground">{error}</p>
        <Link to="/resume-analysis" className="mt-6">
          <Button>Go to Resume Analysis</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Personalized Career Guidance</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI career advisor has analyzed your skills and market trends to provide
            tailored recommendations and actionable next steps.
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          advice && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-card bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <span>Your Personalized Advice</span>
                  </CardTitle>
                  <CardDescription>
                    Insightful recommendations based on your unique profile.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Recommended Career Paths</h3>
                    <div className="flex flex-wrap gap-2">
                      {advice.career_paths.map((path: string) => (
                        <Badge key={path} className="bg-primary/10 text-primary hover:bg-primary/20">
                          {path}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Expert Summary</h3>
                    <p className="text-muted-foreground">{advice.advice}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Actionable Resources</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {advice.resources.map((resource: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Book className="flex-shrink-0 h-4 w-4 mt-1" />
                          <span>{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-bold text-foreground mb-2">Ready to take the next step?</h3>
                    <Button className="w-full" asChild>
                      <Link to="/jobs">
                        <User className="mr-2 h-4 w-4" />
                        Explore Job Opportunities
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="shadow-card bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Your Key Strengths</span>
                  </CardTitle>
                  <CardDescription>
                    Based on our analysis of your resume.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {advice.skills.map((skill: string) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Top Endorsements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Problem-solving abilities</li>
                      <li>Proven project management skills</li>
                      <li>Strong collaboration and communication</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          )
        )}
      </div>
    </div>
  );
};

export default CareerGuidance;