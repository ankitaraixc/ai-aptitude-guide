import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload, BrainCircuit, CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ResumeAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Simulate API call to backend for resume analysis
    console.log("Simulating API call for resume analysis...");
    
    // In a real application, you would send the file to your backend
    // const formData = new FormData();
    // formData.append("resume_file", selectedFile);
    //
    // const response = await fetch("/api/resumes/analyze", {
    //   method: "POST",
    //   body: formData,
    // });
    // const data = await response.json();
    // setAnalysisResult(data.analysis);
    
    setTimeout(() => {
      const result = {
        score: 85,
        feedback: [
          { type: "skills", title: "Skills Match", status: "Good", description: "Your skills align well with modern tech roles." },
          { type: "experience", title: "Experience", status: "Excellent", description: "Your work history is clear and impressive." },
          { type: "formatting", title: "Formatting", status: "Needs Work", description: "Improve consistency in bullet points and headings." }
        ],
        skillGaps: ["Machine Learning", "Cloud Security"],
        skills: ["React", "Python"] // Added skills for the next page
      };
      setAnalysisResult(result);
      localStorage.setItem('resumeAnalysisResult', JSON.stringify(result)); // Save the result to local storage
      setIsAnalyzing(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "Good":
      case "Excellent":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "Needs Work":
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Good":
      case "Excellent":
        return "bg-success/20 text-success-foreground";
      case "Needs Work":
        return "bg-destructive/20 text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Resume Analysis</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your resume and get instant, AI-powered feedback on your content,
            formatting, and skill gaps to stand out from the crowd.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="shadow-card bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Upload Your Resume</span>
                </CardTitle>
                <CardDescription>
                  Supported formats: PDF, DOCX
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                      {selectedFile ? (
                        <p className="text-sm text-foreground font-medium">{selectedFile.name}</p>
                      ) : (
                        <>
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PDF or DOCX (MAX. 5MB)
                          </p>
                        </>
                      )}
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.docx" />
                  </label>
                </div>

                <Button
                  className="w-full shadow-elegant"
                  onClick={handleAnalyze}
                  disabled={!selectedFile || isAnalyzing}
                >
                  {isAnalyzing ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Analyzing...
                    </div>
                  ) : (
                    <>
                      <BrainCircuit className="mr-2 h-4 w-4" />
                      Analyze Resume
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {analysisResult ? (
              <Card className="shadow-card bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    <span>AI Analysis Results</span>
                  </CardTitle>
                  <CardDescription>
                    Here is a detailed breakdown of your resume based on our AI's assessment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-foreground mb-2">Resume Score: {analysisResult.score}/100</h3>
                    <Progress value={analysisResult.score} className="mt-2 h-3" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {analysisResult.feedback.map((item: any) => (
                      <div key={item.title} className="flex items-start space-x-3 p-4 rounded-lg border bg-background">
                        <div className={`p-2 rounded-full ${getStatusColor(item.status)}`}>
                          {getStatusIcon(item.status)}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{item.title}: <span className="font-normal text-muted-foreground">{item.status}</span></p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Identified Skill Gaps</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Based on current industry trends, consider developing these skills to be more competitive.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {analysisResult.skillGaps.map((skill: string) => (
                        <Badge key={skill} variant="outline" className="text-muted-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-bold text-foreground mb-2">Ready to take the next step?</h3>
                    <Button className="w-full" onClick={() => navigate('/career-counseling')}>
                      Get Personalized Career Advice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex items-center justify-center p-12 text-muted-foreground">
                <p>Upload a resume to begin the analysis.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysis;