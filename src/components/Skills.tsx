import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Smartphone,
  Globe,
  GitBranch,
  Wrench
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { id: "frontend", label: "Frontend", icon: Code },
    { id: "backend", label: "Backend", icon: Server },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "database", label: "Database", icon: Database },
    { id: "tools", label: "Tools", icon: Wrench },
  ];

  const skillsData = {
    frontend: [
      { name: "React", level: 50, color: "bg-blue-500" },
      { name: "TypeScript", level: 80, color: "bg-blue-600" },
      { name: "JavaScript", level: 95, color: "bg-yellow-500" },
      { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
      { name: "HTML5/CSS3", level: 95, color: "bg-orange-500" },
    ],
    backend: [
      { name: "Ruby On Rails", level: 95, color: "bg-green-600" },
      { name: "Python", level: 85, color: "bg-green-700" },
      { name: "REST APIs", level: 95, color: "bg-blue-500" },
      { name: "Microservices", level: 70, color: "bg-purple-500" },
    ],
    mobile: [
      { name: "React Native", level: 60, color: "bg-blue-500" },
      { name: "Flutter", level: 80, color: "bg-blue-400" },
    ],
  
    database: [
      { name: "PostgreSQL", level: 95, color: "bg-blue-700" },
      { name: "MongoDB", level: 80, color: "bg-green-600" },
      { name: "Redis", level: 75, color: "bg-red-500" },
      { name: "MySQL", level: 80, color: "bg-blue-600" },
    ],
    tools: [
      { name: "Git/GitHub", level: 95, color: "bg-gray-700" },
      { name: "Docker", level: 80, color: "bg-blue-500" },
      { name: "AWS", level: 75, color: "bg-orange-500" },
      { name: "CI/CD", level: 80, color: "bg-green-500" },
      { name: "Linux", level: 85, color: "bg-yellow-600" },
      { name: "Tailwind css", level: 85, color: "bg-yellow-600" },
      { name: "Vercel", level: 85, color: "bg-yellow-600" },
      { name: "DevOps", level: 85, color: "bg-yellow-600" },
      { name: "APIs", level: 85, color: "bg-yellow-600" },
      { name: "Jenkins", level: 85, color: "bg-yellow-600" },
    ],
  };

  const currentSkills = skillsData[activeCategory as keyof typeof skillsData];

  return (
    <section id="skills" className="section-padding bg-muted/10">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover-lift ${
                activeCategory === category.id
                  ? "bg-gradient-primary text-background shadow-glow-primary"
                  : "glass border-primary/20 hover:border-primary/40"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentSkills.map((skill, index) => (
            <Card
              key={skill.name}
              className="p-6 glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <Badge variant="outline" className="border-primary/20">
                  {skill.level}%
                </Badge>
              </div>
              
              <Progress 
                value={skill.level} 
                className="h-2 bg-muted/50"
              />
              
              <div className="mt-2 text-sm text-muted-foreground">
                {skill.level >= 50 ? "Intermediate" : 
                 skill.level >= 80 ? "Advanced" : 
                 skill.level >= 70 ? "Intermediate" : "Beginner"}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 glass border-primary/10">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Always Learning</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
              I regularly invest time in learning new frameworks, attending tech conferences, and contributing to open-source projects 
              to expand my skill set and deliver cutting-edge solutions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;