
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  Code,
  Database,
  FileText,
  GraduationCap,
  CheckSquare,
  ExternalLink,
  Globe,
  Server,
  Settings,
  Smartphone,
  BookOpen,
  TrendingUp,
  Github,
  UserCheck,
  Lightbulb,
  Zap,
} from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  icon: React.ReactNode;
  logo?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const SkillsAndCertifications = () => {
  const [activeView, setActiveView] = useState<"skills" | "certifications">("skills");

  const certifications: Certification[] = [
    {
      id: "c1",
      title: "C# (Basic)",
      issuer: "HackerRank",
      date: "Dec 2024",
      credentialId: "065CFDB4FE48",
      skills: [
        "Optical Character Recognition (OCR)",
        "Artificial Intelligence (AI)",
        "C#",
        "WinForms",
        "Internet Message Access Protocol (IMAP)",
      ],
      icon: <Code className="h-10 w-10 text-primary" />,
      logo: "/hackerrank-logo.svg",
    },
    {
      id: "c2",
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "Nov 2024",
      credentialId: "EF92ED38C3CF",
      skills: ["SQL Server Management Studio"],
      icon: <Database className="h-10 w-10 text-primary" />,
      logo: "/hackerrank-logo.svg",
    },
    {
      id: "c3",
      title: "Software Engineer",
      issuer: "HackerRank",
      date: "Oct 2024",
      credentialId: "D754AFCAEA21",
      skills: ["Python (Programming Language)", "C#", "Agile Methodologies"],
      icon: <Award className="h-10 w-10 text-primary" />,
      logo: "/hackerrank-logo.svg",
    },
    {
      id: "c4",
      title: "Python Zero to Hero",
      issuer: "GUVI Geek Networks, IITM Madras",
      date: "Sep 2024",
      credentialId: "60211b22yLRH57688k",
      skills: [
        "Optical Character Recognition (OCR)",
        "Python (Programming Language)",
        "Artificial Intelligence (AI)",
        "Pandas (Software)",
      ],
      icon: <FileText className="h-10 w-10 text-primary" />,
      logo: "/guvi-logo.svg",
    },
    {
      id: "c5",
      title: "HTML and CSS",
      issuer: "GUVI Geek Networks, IITM Madras",
      date: "Sep 2024",
      credentialId: "iN1769765u20rD9vmy",
      skills: [
        "Cascading Style Sheets (CSS)",
        "HTML",
        "ASP.NET MVC",
        "Bootstrap (Framework)",
      ],
      icon: <Code className="h-10 w-10 text-primary" />,
      logo: "/guvi-logo.svg",
    },
    {
      id: "c6",
      title: "JavaScript",
      issuer: "GUVI Geek Networks, IITM Madras",
      date: "Sep 2024",
      credentialId: "6O7i1v7V3GF8b92673",
      skills: ["Artificial Intelligence (AI)", "ASP.NET MVC", "jQuery"],
      icon: <Code className="h-10 w-10 text-primary" />,
      logo: "/guvi-logo.svg",
    },

  ];

  const skillCategories: SkillCategory[] = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "Jquery 3 / Javascript", level: 95 },
        { name: "React Js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "BootStrap 5", level: 85 },

      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Python", level: 75 },
        { name: "C#", level: 80 },
        { name: ".NET Core", level: 90 },
        { name: "MVC Architecture", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "HTTP Client", level: 70 },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "SQLite 3", level: 70 },

      ],
    },
    {
      id: "other",
      name: "Other",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "UI/UX Design", level: 70 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Testing", level: 75 },
        { name: "Performance Optimization", level: 80 },
        { name: "SEO", level: 65 },
        { name: "Cybersecurity", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto">
        <h2 className="section-title gradient-text text-center">
          Technical Skills & Certifications
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-10">
          My expertise spans multiple technologies with professional certifications that validate my commitment to continuous learning.
        </p>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-secondary/50 shadow-inner">
            <Button
              variant={activeView === "skills" ? "default" : "ghost"}
              className={`rounded-md ${activeView === "skills" ? "shadow-md" : ""}`}
              onClick={() => setActiveView("skills")}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Skills
            </Button>
            <Button
              variant={activeView === "certifications" ? "default" : "ghost"}
              className={`rounded-md ${activeView === "certifications" ? "shadow-md" : ""}`}
              onClick={() => setActiveView("certifications")}
            >
              <Award className="mr-2 h-4 w-4" />
              Certifications
            </Button>
          </div>
        </div>

        {activeView === "skills" ? (
          <div className="animate-fade-in">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-8 bg-secondary/30 p-1 rounded-xl">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="animate-fade-in"
                >
                  <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden shadow-lg">
                    <CardHeader className="border-b border-primary/5 bg-secondary/20">
                      <CardTitle className="flex items-center gap-2">
                        {category.icon}
                        {category.name} Skills
                      </CardTitle>
                      <CardDescription>
                        My technical expertise in {category.name.toLowerCase()} technologies
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.skills.map((skill, idx) => (
                          <div key={idx} className="group">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium group-hover:text-primary transition-colors flex items-center gap-1">
                                {idx % 2 === 0 && <Zap className="h-3 w-3 text-primary" />}
                                {skill.name}
                              </span>
                              <span className="text-primary font-medium">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-1000 group-hover:opacity-90 relative"
                                style={{ width: `${skill.level}%` }}
                              >
                                <div className="absolute top-0 left-0 right-0 bottom-0 shine-effect"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 to-blue-400/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <CardHeader className="flex flex-row items-center gap-4 border-b border-primary/5">
                    <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                      {cert.icon}
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        {/* <span>{cert.issuer}</span>
                        <span className="text-xs">•</span>
                        <span>{cert.date}</span> */}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-foreground/70">
                        <CheckSquare className="h-4 w-4 mr-2 text-primary" />
                        <span>Credential ID: {cert.credentialId}</span>
                      </div>
                      <div className="flex items-center text-sm text-foreground/70">
                        <CheckSquare className="h-4 w-4 mr-2 text-primary" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center text-sm text-foreground/70">
                        <CheckSquare className="h-4 w-4 mr-2 text-primary" />
                        <span>Date : {cert.date}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center justify-between">
                          <span className="flex items-center gap-1">
                            <Lightbulb className="h-3 w-3 text-primary" />
                            Skills
                          </span>
                          <Button variant="link" className="p-0 h-auto text-primary text-xs flex items-center">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Show credential
                          </Button>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="bg-secondary/50 hover:bg-secondary group-hover:border-primary/30 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-secondary/50 rounded-full shadow-md glass-effect">
            <BookOpen className="h-5 w-5 text-primary mr-2" />
            <span className="mr-2 font-medium">Always learning:</span>
            <div className="flex flex-wrap justify-center items-center gap-2">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none shadow-sm hover:shadow transition-all">
                <Github className="h-3 w-3 mr-1" />
                GitHub
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none shadow-sm hover:shadow transition-all">
                <UserCheck className="h-3 w-3 mr-1" />
                LeetCode
              </Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none shadow-sm hover:shadow transition-all">
                <Award className="h-3 w-3 mr-1" />
                GUVI
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndCertifications;
