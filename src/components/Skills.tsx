import { Card } from "@/components/ui/card";
import { Globe, Database, Server, Share2, MousePointer2, Rocket } from "lucide-react";
import {
  SiRubyonrails, SiRuby, SiGit, SiGithub,
  SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiDocker, SiSidekiq, SiJenkins, SiNginx, SiPostman,
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiPhp,
  SiClaude, SiNotion, SiGooglegemini
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Ruby on Rails", icon: SiRubyonrails, color: "#CC0000" },
        { name: "Ruby", icon: SiRuby, color: "#CC342D" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Sidekiq", icon: SiSidekiq, color: "#ef4444" },
      ],
    },
    {
      title: "Database Systems",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "RDBMS", icon: Database, color: "#6366f1" },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
        { name: "Nginx", icon: SiNginx, color: "#009639" },
      ],
    },
    {
      title: "AI Development",
      skills: [
        { name: "Claude Code", icon: SiClaude, color: "#D97757" },
        { name: "Gemini CLI", icon: SiGooglegemini, color: "#8E75FF" },
        { name: "Antigravity", icon: Rocket, color: "#FFB000" },
        { name: "Cursor", icon: MousePointer2, color: "#FFFFFF" },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Notion", icon: SiNotion, color: "#FFFFFF" },
      ],
    }
  ];

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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 sm:p-8 bg-[#151515] rounded-3xl border-transparent shadow-xl hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-white mb-8">{category.title}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-10">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 w-[72px]">
                    <skill.icon
                      className="w-12 h-12 transition-transform duration-300 hover:scale-110"
                      style={skill.color ? { color: skill.color } : {}}
                    />
                    <span className="text-[13px] text-gray-400 text-center font-medium leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
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