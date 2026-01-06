import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {Cloud, Code2, Cpu, Database, Paintbrush} from "lucide-react";
import {
  FaAws,
  FaCogs,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaRaspberryPi,
  FaReact,
} from "react-icons/fa";
import {
  SiArduino,
  SiDeno,
  SiDjango,
  SiFlask,
  SiGithubcopilot,
  SiGnubash,
  SiGo,
  SiGrafana,
  SiJupyter,
  SiKeras,
  SiMarkdown,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiOracle,
  SiPostgresql,
  SiPytorch,
  SiScikitlearn,
  SiSpring,
  SiSqlite,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import {TbBrandVscode} from "react-icons/tb";
import {BsGrid1X2} from "react-icons/bs";
import {FcWorkflow} from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
    <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div
              className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
              <Badge
                  key={index}
                  variant="outline"
                  className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
                <span className="font-medium">{skill.name}</span>
              </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "Java", icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
        { name: "C", icon: <FaCogs className="w-4 h-4 text-gray-300" /> },
        { name: "C#", icon: <FaCogs className="w-4 h-4 text-gray-300" /> },
        { name: "Go", icon: <SiGo className="w-4 h-4 text-[#00ADD8]" /> },
        { name: "NATURAL/COBOL", icon: <FaCogs className="w-4 h-4 text-gray-300" /> },
        { name: "Bash / Shell", icon: <SiGnubash className="w-4 h-4 text-[#4EAA25]" /> },
        { name: "Arduino Programming", icon: <SiArduino className="w-4 h-4 text-[#00979D]" /> },
        { name: "Raspberry Pi", icon: <FaRaspberryPi className="w-4 h-4 text-[#C51A4A]" /> },
      ],
    },

    {
      icon: Database,
      title: "Databases & Data Visualisation",
      color: "text-teal-400",
      skills: [
        { name: "SQL", icon: <FaDatabase className="w-4 h-4 text-[#003B57]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "Key-Value Stores", icon: <FaDatabase className="w-4 h-4 text-gray-300" /> },
        {name: "Grafana Dashboards", icon: <SiGrafana className="w-4 h-4 text-[#F46800]"/>},
        {name: "SQLite", icon: <SiSqlite className="w-4 h-4 text-[#003B57]"/>,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#4479A1]"/>,
        },
        {
          name: "OracleDB",
          icon: <SiOracle className="w-4 h-4 text-[#F80000]"/>,
        },
        {
          name: "MS Access",
          icon: <FaDatabase className="w-4 h-4 text-[#A4373A]"/>,
        },
      ],
    },

    {
      icon: Paintbrush,
      title: "Web Development",
      color: "text-green-400",
      skills: [
        { name: "Angular", icon: <FaCogs className="w-4 h-4 text-[#DD0031]" /> },
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Spring Boot", icon: <SiSpring className="w-4 h-4 text-[#6DB33F]" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Deno Fresh", icon: <SiDeno className="w-4 h-4 text-black" /> },
        { name: "Flask", icon: <SiFlask className="w-4 h-4 text-black" /> },
        { name: "Django", icon: <SiDjango className="w-4 h-4 text-[#092E20]" /> },
        { name: "HTML", icon: <FaHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6]" /> },
        { name: "JavaScript", icon: <FaJsSquare className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Markdown", icon: <SiMarkdown className="w-4 h-4 text-black" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "REST/SOAP APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
      ],
    },



    {
      icon: Cpu,
      title: "AI, Machine Learning & Computer Vision",
      color: "text-pink-400",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "PyTorch", icon: <SiPytorch className="w-4 h-4 text-[#EE4C2C]" /> },
        { name: "Keras", icon: <SiKeras className="w-4 h-4 text-[#D00000]" /> },
        { name: "scikit-learn", icon: <SiScikitlearn className="w-4 h-4 text-[#F7931E]" /> },
        { name: "Image Classification", icon: <FaCogs className="w-4 h-4 text-pink-400" /> },
        { name: "Model Training & Evaluation", icon: <FaCogs className="w-4 h-4 text-pink-400" /> },
        { name: "GitHub Copilot", icon: <SiGithubcopilot className="w-4 h-4 text-[#00C4B8]" /> },
        { name: "OpenAI Codex", icon: <SiOpenai className="w-4 h-4 text-[#00C4B8]" /> },
        { name: "Qodo", icon: <FaCogs className="w-4 h-4 text-gray-300" /> },
        { name: "Tabnine" },
      ],
    },

    {
      icon: Cloud,
      title: "Engineering Workflow & Developer Tooling",
      color: "text-teal-400",
      skills: [
        { name: "Git & Version Control", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "CLI", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "Agile & Scrum", icon: <FaCogs className="w-4 h-4 text-teal-400" /> },
        { name: "Technical Documentation", icon: <SiMarkdown className="w-4 h-4 text-black" /> },
        { name: "Jupyter Notebooks", icon: <SiJupyter className="w-4 h-4 text-[#F37626]" /> },
        { name: "JetBrains IDEs & VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Grafana Dashboards", icon: <SiGrafana className="w-4 h-4 text-[#F46800]" /> },
        { name: "Microsoft Office" },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud, DevOps & Deployment",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
      ],
    },
  ];

  return (
      <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

        <section className="container mx-auto px-4 py-11 relative z-10">
          <div className="flex justify-center items-center ">
            <IconCloudDemo />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
                <SkillCard
                    key={index}
                    icon={category.icon}
                    title={category.title}
                    skills={category.skills}
                    color={category.color}
                />
            ))}
          </div>
        </section>
        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
          .bg-grid-pattern {
            background-image: linear-gradient(
                to right,
                rgba(100, 100, 255, 0.1) 1px,
                transparent 1px
            ),
            linear-gradient(
                to bottom,
                rgba(100, 100, 255, 0.1) 1px,
                transparent 1px
            );
            background-size: 30px 30px;
          }
        `}</style>
      </main>
  );
};

export default SkillsSection;
