"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users, Award, Target, Database, Smartphone, GitBranch, Mail, MapPin, Calendar, Briefcase, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  { Icon: Code2, title: "Frontend Development", description: "React, Next.js, TypeScript" },
  { Icon: Palette, title: "UI/UX Design", description: "Figma, Design Systems" },
  { Icon: Zap, title: "Performance", description: "Optimization & Best Practices" },
  { Icon: Users, title: "Collaboration", description: "Team Work & Communication" },
  { Icon: Award, title: "Quality", description: "Clean Code & Testing" },
  { Icon: Target, title: "Problem Solving", description: "Creative Solutions" },
  { Icon: Database, title: "Database & SQL", description: "SQL, PostgreSQL, Database Management" },
  { Icon: Smartphone, title: "Mobile Development", description: "Flutter, Dart, Cross-platform" },
  { Icon: GitBranch, title: "CI/CD & DevOps", description: "Vercel, Automated Deployment" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const projects = [
  {
    id: 1,
    title: "JavaScript Documentation Website",
    description:
      "A comprehensive JavaScript documentation website with interactive examples and detailed explanations.",
    image: "bg-gradient-to-br from-black to-gray-700",
    imageUrl: "/img/project/js-documentation.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DatNgyM/JS-Document-Website",
    live: "https://datngym.github.io/JS-Document-Website/",
  },
  {
    id: 2,
    title: "Landing Page",
    description:
      "A modern and responsive landing page with beautiful design and smooth animations.",
    image: "bg-gradient-to-br from-gray-800 to-gray-600",
    imageUrl: "/img/project/lading-page.png",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/DatNgyM/Ladding_Page",
    live: "https://datngym.github.io/Ladding_Page/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A stunning portfolio website showcasing creative work with smooth animations and modern design.",
    image: "bg-gradient-to-br from-gray-700 to-black",
    imageUrl: "/img/project/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/DatNgyM/Porfolio",
    live: "https://nguyenminhdat.vercel.app/",
  },
  {
    id: 4,
    title: "NFT Website",
    description:
      "A modern NFT marketplace website featuring digital art collections and trading functionality.",
    image: "bg-gradient-to-br from-gray-600 to-gray-800",
    imageUrl: "/img/project/nft.png",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/DatNgyM/NFT_Web",
    live: "https://datngym.github.io/NFT_Web/",
  },
  {
    id: 5,
    title: "Reading App",
    description:
      "An interactive reading application with book management, reading progress tracking, and user-friendly interface.",
    image: "bg-gradient-to-br from-black to-gray-700",
    imageUrl: "/img/project/reading-app.jpg",
    technologies: ["Flutter", "Dart"],
    github: "https://github.com/DatNgyM/Reading_app",
    live: "#",
  },
  {
    id: 6,
    title: "Blog Website",
    description:
      "A full-featured blog website with content management, categories, and modern UI design.",
    image: "bg-gradient-to-br from-gray-700 to-black",
    imageUrl: "/img/project/blog.png",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/DatNgyM/Blog_Web",
    live: "https://datngym.github.io/Blog_Web/",
  },
];

export default function About() {
  const { ref, isInView } = useScrollAnimation({ amount: 0.1 });

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* Avatar Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-700/20 shadow-lg"
              >
                <Image
                  src="/img/p_v2.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <span className="gradient-text">About Me</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass dark:glass-dark rounded-2xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                I&apos;m a passionate developer and designer who loves creating
                beautiful, functional, and user-centered digital experiences.
                With a keen eye for detail and a commitment to excellence, I
                bring ideas to life through code and design.
              </p>
            </motion.div>
          </motion.div>

          {/* Personal Information Section */}
          <motion.div
            variants={itemVariants}
            className="glass dark:glass-dark rounded-2xl p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text-2">Thông Tin Cá Nhân</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Email</p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">nguyenminhdat03112003@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Location</p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Date of Birth</p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">03/11/2003</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Briefcase className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Position</p>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">Frontend Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text-2 text-center">Skills</h2>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8, rotate: [0, -1, 1, 0] }}
                className="glass dark:glass-dark rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black/0 to-gray-600/0 group-hover:from-black/10 group-hover:to-gray-600/10 transition-all duration-300"
                  initial={false}
                />
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-black/20 to-gray-600/20 group-hover:from-black/30 group-hover:to-gray-600/30 transition-all"
                  >
                    <skill.Icon className="w-6 h-6 text-black dark:text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 group-hover:gradient-text transition-all">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            </motion.div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mt-16">
            <h2 className="text-3xl font-bold mb-6 gradient-text-2 text-center">Featured Projects</h2>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl glass dark:glass-dark cursor-pointer flex flex-col h-full"
                >
                  {/* Project Image/Color */}
                  <div
                    className={`${project.imageUrl ? '' : project.image} h-48 relative overflow-hidden flex-shrink-0`}
                  >
                    {/* Project Image */}
                    {project.imageUrl && (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    
                    <motion.div
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300"
                      initial={false}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Code2 className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>
                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%", skewX: -20 }}
                      whileHover={{ x: "200%", skewX: -20 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 relative z-10 flex flex-col flex-grow">
                    <motion.h3
                      className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:gradient-text transition-all"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-4 min-h-[32px]"
                      initial="hidden"
                      whileHover="visible"
                    >
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          variants={{
                            hidden: { opacity: 0.7, scale: 1 },
                            visible: {
                              opacity: 1,
                              scale: 1.05,
                              transition: { delay: index * 0.05 },
                            },
                          }}
                          className="px-3 py-1 text-xs rounded-full glass dark:glass-dark text-gray-700 dark:text-gray-300 font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      <motion.a
                        href={project.live}
                        target={project.live !== "#" ? "_blank" : undefined}
                        rel={project.live !== "#" ? "noopener noreferrer" : undefined}
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full glass dark:glass-dark border-2 group/btn relative overflow-hidden"
                        >
                          <motion.span
                            className="relative z-10 flex items-center justify-center"
                            whileHover={{ x: 2 }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-black/10 to-gray-600/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </Button>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="glass dark:glass-dark"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </motion.a>
                    </div>
                  </div>

                  {/* Enhanced Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black/0 to-gray-600/0 group-hover:from-black/10 group-hover:to-gray-600/10 transition-all duration-300 pointer-events-none"
                    initial={false}
                  />
                  {/* Border glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black/30 dark:group-hover:border-white/30 transition-all duration-300 pointer-events-none"
                    initial={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
