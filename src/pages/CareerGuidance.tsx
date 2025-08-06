import { Link } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Lightbulb,
  TrendingUp,
  Book,
  User,
  ArrowRight,
  Send,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const dummyAdvice = {
  career_paths: [
    "AI/ML Engineer",
    "Data Scientist",
    "Cloud Solutions Architect",
  ],
  advice:
    "Your strong background in Python and cloud technologies makes you an ideal candidate for high-demand roles in AI and cloud computing. Focusing on machine learning frameworks and advanced cloud certifications will significantly boost your career prospects.",
  resources: [
    "Complete the 'Machine Learning' specialization on Coursera.",
    "Achieve the AWS Certified Solutions Architect - Associate certification.",
    "Contribute to a popular open-source AI project on GitHub like TensorFlow or PyTorch.",
    "Network with AI professionals in Bengaluru through local tech meetups.",
  ],
  skills: ["Python", "AWS", "React", "FastAPI", "Docker", "SQL"],
};

const CareerGuidance = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your message! A career advisor will get back to you shortly."
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Personalized Career Guidance
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI career advisor has analyzed your skills and market trends to
            provide tailored recommendations and actionable next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
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
                  <h3 className="font-bold text-foreground mb-2">
                    Recommended Career Paths
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {dummyAdvice.career_paths.map((path: string) => (
                      <Badge
                        key={path}
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {path}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Expert Summary
                  </h3>
                  <p className="text-muted-foreground">{dummyAdvice.advice}</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Actionable Resources
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {dummyAdvice.resources.map(
                      (resource: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Book className="flex-shrink-0 h-4 w-4 mt-1" />
                          <span>{resource}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-bold text-foreground mb-2">
                    Ready to take the next step?
                  </h3>
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

            <Card className="shadow-card bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Contact a Career Advisor</span>
                </CardTitle>
                <CardDescription>
                  Have more questions? Reach out to our expert advisors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Ask your career-related questions here..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
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
                    {dummyAdvice.skills.map((skill: string) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    Top Endorsements
                  </h4>
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
      </div>
    </div>
  );
};

export default CareerGuidance;
