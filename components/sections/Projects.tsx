"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Inventory Management Mobile App",
    description:
      "A mobile inventory dashboard with metrics, product highlights, and intuitive navigation—designed in Figma for a clear, modern UX.",
    image: "bg-gradient-to-br from-gray-700 to-black",
    imageUrl: "/img/project/Inventory%20Management%20Mobile.png",
    technologies: ["Figma", "UI/UX", "Mobile App"],
    github: "#",
    live: "https://www.figma.com/proto/PKOKcbFaQKtCcotxu0uI9S/Qu%E1%BA%A3n-l%C3%BD-kho?node-id=189-392&viewport=532%2C189%2C0.3&t=xM7xtC8FQQ6o1qiH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=189%3A392&page-id=189%3A391",
  },
  {
    id: 2,
    title: "Car Wash",
    description:
      "A car detailing studio landing page with hero imagery, service navigation, and gallery—designed in Figma for a clean, professional look.",
    image: "bg-gradient-to-br from-gray-800 to-gray-600",
    imageUrl: "/img/project/car-wash.png",
    technologies: ["Figma", "UI/UX", "Web"],
    github: "#",
    live: "https://www.figma.com/proto/asfDn7sJdBc1nyLKro3XCA/Car-Wash-Website?node-id=2-3&p=f&viewport=1145%2C748%2C0.22&t=rhR29O04DIib3LKi-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 3,
    title: "EasyTrips",
    description:
      "A travel landing page with hero imagery, navigation, and a booking-style search form—designed in Figma for a clean, modern trip-planning feel.",
    image: "bg-gradient-to-br from-black to-gray-700",
    imageUrl: "/img/project/easytrips.png",
    technologies: ["Figma", "UI/UX", "Web"],
    github: "#",
    live: "https://www.figma.com/proto/PVLzfhjd78HlkYVfm3xLFF/Untitled?node-id=6-2&viewport=2032%2C383%2C0.42&t=ojBIUjmEv25NTuzQ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=23%3A1087&page-id=0%3A1",
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
    title: "KOC",
    description:
      "Đi Săn Cùng Tớ — a Gen Z product review and affiliate marketing website with deals, blog reviews, and a responsive Next.js experience.",
    image: "bg-gradient-to-br from-black to-gray-700",
    imageUrl: "/img/project/koc.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/DatNgyM/KOC",
    live: "https://disancungto.vercel.app/",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Projects() {
  const { ref, isInView } = useScrollAnimation({ amount: 0.2 });

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <span className="gradient-text-2">Featured Projects</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore my latest work and creative solutions
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    {project.github !== "#" && (
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
                    )}
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
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-black to-gray-700 hover:from-gray-800 hover:to-black text-white dark:text-black dark:bg-gradient-to-r dark:from-white dark:to-gray-300 dark:hover:from-gray-200 dark:hover:to-white border-0 shadow-lg shadow-black/50 dark:shadow-white/20 relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10 flex items-center"
                  whileHover={{ x: 5 }}
                >
                  View All Projects
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
