import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  BarChart,
  Bookmark,
} from "lucide-react";

const dummyJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Bengaluru, India",
    type: "Full-time",
    salary: "₹25,00,000 - ₹35,00,000 PA",
    description:
      "Join our innovative team to build next-gen web applications using React, TypeScript, and GraphQL. 5+ years of experience required.",
    tags: ["React", "TypeScript", "GraphQL"],
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    company: "CloudNine Pvt. Ltd.",
    location: "Remote",
    type: "Remote",
    salary: "₹30,00,000 - ₹45,00,000 PA",
    description:
      "Design and implement scalable cloud infrastructure on AWS. Strong experience with IaC (Terraform) and CI/CD pipelines is a must.",
    tags: ["AWS", "Terraform", "CI/CD"],
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataMinds Analytics",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹20,00,000 - ₹28,00,000 PA",
    description:
      "Analyze large datasets to extract meaningful insights. Proficiency in Python, Pandas, and machine learning frameworks like Scikit-learn is essential.",
    tags: ["Python", "Machine Learning", "Pandas"],
  },
  {
    id: 4,
    title: "Product Manager",
    company: "InnovateX",
    location: "Pune, India",
    type: "Hybrid",
    salary: "₹22,00,000 - ₹32,00,000 PA",
    description:
      "Lead the product lifecycle from conception to launch. Strong communication and strategic thinking skills are required.",
    tags: ["Product Management", "Agile", "JIRA"],
  },
  {
    id: 5,
    title: "Junior UI/UX Designer",
    company: "Creative Pixels",
    location: "Mumbai, India",
    type: "Part-time",
    salary: "₹8,00,000 - ₹12,00,000 PA",
    description:
      "Create intuitive and visually appealing user interfaces. Proficiency in Figma and Adobe Creative Suite is a plus.",
    tags: ["UI/UX", "Figma", "Adobe XD"],
  },
];

const FindJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = dummyJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Find Your Next Opportunity
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search through thousands of job listings from top companies to find
            your perfect match.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-card bg-gradient-card border-border/50">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Job title or keyword"
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Location"
                    className="pl-10"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger>
                  <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                    <CardDescription className="mb-4">
                      {job.company} - {job.location}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end space-y-2">
                    <span className="font-semibold text-lg text-primary">
                      {job.salary}
                    </span>
                    <Badge>{job.type}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">
                  {job.description}
                </p>
                <div className="flex justify-end mt-4 space-x-2">
                  <Button variant="outline" size="sm">
                    <Bookmark className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button size="sm">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
