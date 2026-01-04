import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  /* const educationData = [
  {
    degree: "Secondary School Certificate (SSC)",
    school: "School 1",
    mascot: "📘",
    year: "2019-2021",
    achievements: ["GPA: 4.89", "Subject: Science"],
    skills: [""],
    description:
      "",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "School 2",
    mascot: "📗",
    year: "2021-2023",
    achievements: [""],
    skills: [""],
    description:
      "",
  },
]; */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Education & Work Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {/* TODO Edit this subtitle text to update the content as needed */}
            A comprehensive overview of my academic background and professional
            journey.
          </p>
        </motion.div>

        <section className="timeline mb-16">
  <div className="title-wrapper flex items-center gap-3 mb-4">
    <div className="icon-box">
      <BookOpen className="w-6 h-6 text-teal-500" />
    </div>
    <h3 className="h3 text-2xl font-bold text-white">Education</h3>
  </div>
  <ol className="timeline-list space-y-8">
    <li className="timeline-item">
      <div className="flex justify-between items-center">
        <h4 className="h4 timeline-item-title text-lg font-semibold text-white">
          University of Newcastle
        </h4>
        <span className="text-teal-400">2021 — 2025</span>
      </div>
      <p className="timeline-text text-gray-300 italic">BSc, Computer Science with Industrial Placement</p>
      <p className="timeline-text text-gray-300">
        Achieved: <span className="font-semibold">First Class with Honours</span>
      </p>
    </li>
    <li className="timeline-item">
      <div className="flex justify-between items-center">
        <h4 className="h4 timeline-item-title text-lg font-semibold text-white">
          Shrewsbury School
        </h4>
        <span className="text-teal-400">2016 — 2021</span>
      </div>
      {/* TODO Decide whether to call it English Literature or English Lit */}
      <p className="timeline-text text-gray-300">
      <span className="font-semibold">A Levels:</span> Business Studies (A*), Computer Science (A), Mathematics (A) <br />
        <span className="font-semibold">i/GCSEs:</span> Biology (8), Chemistry (8), Physics (8), Mathematics (8), Spanish (8), English (A), English Lit (A), Computer Science (7), Drama (7), History (B)
      </p>

    </li>
  </ol>
</section>

        <section className="timeline mb-16">
  <div className="title-wrapper flex items-center gap-3 mb-4">
    <div className="icon-box">
      <BookOpen className="w-6 h-6 text-teal-500" />
    </div>
    <h3 className="h3 text-2xl font-bold text-white">Work Experience</h3>
  </div>
  <ol className="timeline-list space-y-8">
    <li className="timeline-item">
      <div className="flex justify-between items-center mb-1">
        <h4
          className="h4 timeline-item-title text-2xl font-semibold text-white"
          style={{ flexShrink: 0 }}
        >
          Graduate Software Developer
        </h4>
        <span className="text-green-400 whitespace-nowrap">
          Aug 2025 — Present
        </span>
      </div>
      <span className="font-semibold text-white mb-2 block">
        Virgin Money (Nationwide Group), Newcastle
      </span>
      <ul className="list-disc list-outside pl-6 marker:text-gray-300 text-gray-300 space-y-1">
        <li>
          Assisted with merging systems during Virgin Money’s integration with Nationwide, ensuring smooth data migration and minimal service disruption.
        </li>
        <li>
          Designed, developed, and maintained internal software tools to automate reporting, document generation and workflow processes, improving operational efficiency across multiple business teams.
        </li>
        <li>
          Collaborated closely with senior developers, product owners and QA engineers to design, test, and deploy new features for both internal systems and customer-facing web applications, improving efficiency, sustainability and user experience.
        </li>
        <li>
          Worked within the Supernova development team on the mobile web application, contributing to fintech feature development for secure digital banking services.
        </li>
      </ul>
    </li>

    <li className="timeline-item">
      <div className="flex justify-between items-center mb-1">
        <h4
          className="h4 timeline-item-title text-2xl font-semibold text-white"
          style={{ flexShrink: 0 }}
        >
          Software Developer ISD Placement
        </h4>
        <span className="text-green-400 whitespace-nowrap">
          Aug 2023 — Aug 2024
        </span>
      </div>
      <span className="font-semibold text-white mb-2 block">
        Nissan, Sunderland
      </span>
      <ul className="list-disc list-outside pl-6 marker:text-gray-300 text-gray-300 space-y-1">
        <li>
          Led development of the Nissan Developer Web App streamlining API
          management and UAT processes using Spring Boot and Angular
        </li>
        <li>
          Organized bi-weekly Monozukuri meetings for global managers and
          directors with agendas and interactive updates
        </li>
        <li>
          Created and optimized secure SOAP and REST web services to improve
          data retrieval and error handling
        </li>
        <li>
          Supported Project Butterfly’s AI-driven inventory optimization and
          stock loss prevention with vendor collaboration
        </li>
        <li>
          Trained in NATURAL programming and mainframe interfaces, developing
          and deploying programs across environments
        </li>
        <li>
          Completed presentation skills course and applied techniques to lead
          meetings and communicate technical concepts effectively
        </li>
      </ul>
    </li>

    <li className="timeline-item">
      <div className="flex justify-between items-center mb-1">
        <h4
          className="h4 timeline-item-title text-2xl font-semibold text-white"
          style={{ flexShrink: 0 }}
        >
          Bar Staff Member
        </h4>
        <span className="text-green-400 whitespace-nowrap">
          Aug 2022 — Dec 2022
        </span>
      </div>
      <span className="font-semibold text-white mb-2 block">
        Bar Blanc, Newcastle
      </span>
      <ul className="list-disc list-outside pl-6 marker:text-gray-300 text-gray-300 space-y-1">
        <li>
          Performed daily opening and closing checklists plus housekeeping
          duties to maintain smooth operations
        </li>
        <li>
          Provided excellent customer experiences through strong mixology and
          attentive service skills
        </li>
        <li>
          Maintained high standards of cleanliness and presentation on the
          dining and bar floors consistently
        </li>
      </ul>
    </li>

    <li className="timeline-item">
      <div className="flex justify-between items-center mb-1">
        <h4
          className="h4 timeline-item-title text-2xl font-semibold text-white"
          style={{ flexShrink: 0 }}
        >
          Summer Intern
        </h4>
        <span className="text-green-400 whitespace-nowrap">
          Aug 2021 — Sep 2021
        </span>
      </div>
      <span className="font-semibold text-white mb-2 block">
        Blevins Franks Wealth Management Ltd, Marbella, Spain
      </span>
      <ul className="list-disc list-outside pl-6 marker:text-gray-300 text-gray-300 space-y-1">
        <li>
          Analyzed client database to identify portfolios needing review and
          prepared annual documentation
        </li>
        <li>
          Designed an internal holiday calendar adopted company-wide to improve
          staff scheduling
        </li>
        <li>
          Successfully completed assigned tasks with positive feedback on
          organization and time management
        </li>
      </ul>
    </li>
  </ol>
</section>

        <section className="flex justify-center">
          {/* TODO Fix and add a better download Resume button here and center it or put it at the top left */}
              <a
                href="/Ben Mulligan Resume.pdf"
                download
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                  <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                    {/* TODO Change to get resume */}
                    <span>Download Resume</span>
                    <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                  </span>
                </span>
              </a>
        </section>

        {/* TODO Education Cards - Currently Disabled */
          /*<motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>*/}
      </div>
    </section>
  );
};

export default EducationSection;
