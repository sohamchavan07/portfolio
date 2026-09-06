import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRubyonrails,
  SiRuby,
  SiPhp,
  SiSidekiq,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiJenkins,
  SiNginx,
  SiClaude,
  SiGooglegemini,
  SiOpenai,
  SiGit,
  SiGithub,
  SiPostman,
  SiNotion,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { Database, Zap, Globe, Wrench, Cpu, Sparkles } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML", icon: SiHtml5, color: "#E34F26", cat: "frontend" },
  { name: "CSS", icon: SiCss, color: "#1572B6", cat: "frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", cat: "frontend" },
  { name: "React", icon: SiReact, color: "#61DAFB", cat: "frontend" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", cat: "frontend" },
  // Backend
  { name: "Ruby on Rails", icon: SiRubyonrails, color: "#CC0000", cat: "backend" },
  { name: "Ruby", icon: SiRuby, color: "#CC342D", cat: "backend" },
  { name: "PHP", icon: SiPhp, color: "#777BB4", cat: "backend" },
  { name: "Sidekiq", icon: SiSidekiq, color: "#EF4444", cat: "backend" },
  // Database
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", cat: "database" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", cat: "database" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", cat: "database" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", cat: "database" },
  // DevOps
  { name: "Docker", icon: SiDocker, color: "#2496ED", cat: "devops" },
  { name: "AWS", icon: FaAws, color: "#FF9900", cat: "devops" },
  { name: "Jenkins", icon: SiJenkins, color: "#D33833", cat: "devops" },
  { name: "Nginx", icon: SiNginx, color: "#009639", cat: "devops" },
  // AI
  { name: "Claude Code", icon: SiClaude, color: "#D97757", cat: "ai" },
  { name: "Gemini CLI", icon: SiGooglegemini, color: "#8E75FF", cat: "ai" },
  { name: "OpenAI", icon: SiOpenai, color: "#74AA9C", cat: "ai" },
  // Tools
  { name: "Git", icon: SiGit, color: "#F05032", cat: "tools" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF", cat: "tools" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC", cat: "tools" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", cat: "tools" },
  { name: "Notion", icon: SiNotion, color: "#FFFFFF", cat: "tools" },
];

const categories = [
  { id: "frontend", label: "Frontend", icon: Cpu, accent: "#61DAFB" },
  { id: "backend", label: "Backend", icon: Zap, accent: "#CC0000" },
  { id: "database", label: "Database", icon: Database, accent: "#4169E1" },
  { id: "devops", label: "DevOps", icon: Globe, accent: "#2496ED" },
  { id: "ai", label: "AI & GenAI", icon: Sparkles, accent: "#D97757" },
  { id: "tools", label: "Tools", icon: Wrench, accent: "#F05032" },
];

const SkillBadge = ({ skill }: { skill: (typeof skills)[0] }) => {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all duration-200 group">
      <Icon
        className="w-5 h-5 flex-shrink-0"
        style={{ color: skill.color }}
      />
      <span className="text-sm text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">03 / 06</span>
            <span className="h-px w-8 bg-zinc-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Skills & <span className="text-lime-400">Technologies</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base max-w-xl">
            Stack I work with daily — from full-stack Rails to modern AI tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.cat === cat.id);
            const catIcon = cat.icon;
            return (
              <div key={cat.id} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${cat.accent}15`, border: `1px solid ${cat.accent}30` }}
                  >
                    <catIcon className="w-4 h-4" style={{ color: cat.accent }} />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-300 tracking-wide uppercase text-xs">
                    {cat.label}
                  </h3>
                  <span className="h-px flex-1 bg-zinc-800" />
                  <span className="text-xs text-zinc-600 font-mono">{catSkills.length}</span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {catSkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 flex items-center gap-3 text-zinc-500 text-sm">
          <Zap className="w-4 h-4 text-lime-400" />
          <span>Always learning, always shipping.</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
