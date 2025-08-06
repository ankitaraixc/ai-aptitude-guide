import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Search,
  TrendingUp,
  Users,
  Briefcase,
  Clock,
  CheckCircle,
  AlertTriangle,
  Upload,
  Eye,
  Edit3,
  Star
} from "lucide-react";

const Dashboard = () => {
  const [resumeScore] = useState(78);
  
  const recentApplications = [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      status: "interview",
      appliedDate: "2024-01-15",
      salary: "$95,000"
    },
    {
      id: 2,
      company: "StartupX",
      position: "Full Stack Developer",
      status: "under_review",
      appliedDate: "2024-01-12",
      salary: "$80,000"
    },
    {
      id: 3,
      company: "Global Systems",
      position: "React Developer",
      status: "rejected",
      appliedDate: "2024-01-08",
      salary: "$75,000"
    }
  ];

  const recommendedJobs = [
    {
      id: 1,
      company: "Innovation Labs",
      position: "Frontend Architect",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      match: 95,
      type: "Full-time"
    },
    {
      id: 2,
      company: "Digital Solutions",
      position: "Senior React Developer",
      location: "Remote",
      salary: "$90,000 - $110,000",
      match: 88,
      type: "Remote"
    },
    {
      id: 3,
      company: "Future Tech",
      position: "UI/UX Developer",
      location: "New York, NY",
      salary: "$85,000 - $105,000",
      match: 82,
      type: "Hybrid"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "interview":
        return "bg-success text-success-foreground";
      case "under_review":
        return "bg-warning text-warning-foreground";
      case "rejected":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "interview":
        return "Interview Scheduled";
      case "under_review":
        return "Under Review";
      case "rejected":
        return "Not Selected";
      default:
        return "Applied";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's your career dashboard overview</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Applications</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground mt-2">23</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-success" />
                    <span className="text-sm font-medium text-muted-foreground">Profile Views</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground mt-2">147</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-warning" />
                    <span className="text-sm font-medium text-muted-foreground">Interviews</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground mt-2">5</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm font-medium text-muted-foreground">Offers</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground mt-2">2</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Applications */}
            <Card className="shadow-card bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Recent Applications</span>
                </CardTitle>
                <CardDescription>Track your job application progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{application.position}</h3>
                        <p className="text-sm text-muted-foreground">{application.company}</p>
                        <p className="text-sm text-muted-foreground">Applied: {application.appliedDate}</p>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge className={getStatusColor(application.status)}>
                          {getStatusText(application.status)}
                        </Badge>
                        <p className="text-sm font-medium text-foreground">{application.salary}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Applications
                </Button>
              </CardContent>
            </Card>

            {/* Recommended Jobs */}
            <Card className="shadow-card bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Recommended Jobs</span>
                </CardTitle>
                <CardDescription>AI-matched opportunities based on your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedJobs.map((job) => (
                    <div key={job.id} className="p-4 border border-border rounded-lg hover:shadow-card transition-all hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{job.position}</h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                          <p className="text-sm text-muted-foreground">{job.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            <Star className="h-4 w-4 text-success" />
                            <span className="text-sm font-medium text-success">{job.match}% match</span>
                          </div>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{job.salary}</span>
                        <Button size="sm" className="shadow-elegant">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Search className="mr-2 h-4 w-4" />
                  Browse All Jobs
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resume Score */}
            <Card className="shadow-card bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Resume Score</span>
                </CardTitle>
                <CardDescription>AI analysis of your resume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-foreground">{resumeScore}/100</div>
                  <Progress value={resumeScore} className="mt-2" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Skills Match</span>
                    <span className="text-success">Good</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="text-success">Excellent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Formatting</span>
                    <span className="text-warning">Needs Work</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Button size="sm" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Update Resume
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <Edit3 className="mr-2 h-4 w-4" />
                    Get AI Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="mr-2 h-4 w-4" />
                  Find Jobs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume Analysis
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Career Counseling
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Network
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="shadow-card bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span>Career Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium text-foreground mb-1">Optimize Your Profile</p>
                    <p className="text-muted-foreground">Add more skills to increase your job match score by 15%</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium text-foreground mb-1">Follow Up</p>
                    <p className="text-muted-foreground">Send follow-up messages for applications from last week</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;