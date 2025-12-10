"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code, Palette, Zap } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32"
    >
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Main Title Area */}
          <div className="relative mb-8 group">
             {/* Decorative Geometric Elements behind title */}
             <motion.div 
               className="absolute -top-10 -left-10 w-20 h-20 border-2 border-black/20 dark:border-white/20 rounded-full"
               animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
               transition={{ duration: 10, repeat: Infinity }}
             />
             <motion.div 
               className="absolute -bottom-5 -right-10 w-16 h-16 border-2 border-gray-500/20 dark:border-gray-300/20 rotate-45"
               animate={{ scale: [1, 1.1, 1], rotate: [45, 135, 45] }}
               transition={{ duration: 12, repeat: Infinity }}
             />

             <motion.h1
              className="text-7xl md:text-9xl font-bold tracking-tighter mb-2 relative z-10 mix-blend-overlay dark:mix-blend-normal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 pb-2">
                CREATIVE
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black dark:from-white dark:via-gray-300 dark:to-white">
                DEVELOPER
              </span>
            </motion.h1>
          </div>

          {/* Subtitle Card - Prism Glass Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-gray-600/10 blur-xl transform scale-110" />
            <div className="glass dark:glass-dark rounded-2xl p-8 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl relative overflow-hidden group">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                Building digital experiences at the intersection of <span className="font-semibold text-black dark:text-white">Design</span> and <span className="font-semibold text-gray-600 dark:text-gray-300">Technology</span>.
              </p>
            </div>
          </motion.div>

          {/* Feature Grid - Prismatic Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-4xl"
          >
            {[
              { icon: Code, title: "Clean Code", desc: "Optimized & Scalable", color: "from-gray-600/20 to-gray-400/20", iconColor: "text-gray-700 dark:text-gray-300" },
              { icon: Palette, title: "Modern UI", desc: "Pixel Perfect Design", color: "from-black/20 to-gray-600/20", iconColor: "text-black dark:text-white" },
              { icon: Zap, title: "Fast Performance", desc: "Lightning Speed", color: "from-gray-800/20 to-gray-500/20", iconColor: "text-gray-800 dark:text-gray-200" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass dark:glass-dark p-6 rounded-xl border border-white/10 relative overflow-hidden group cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <item.icon className={`w-8 h-8 ${item.iconColor} mb-4 relative z-10`} />
                <h3 className="text-lg font-bold mb-1 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-full px-8 h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-gray-300 dark:border-gray-700 rounded-full px-8 h-12 text-lg font-medium hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              Contact Me
            </Button>
          </motion.div>

        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
          </motion.div>
          <div className="w-px h-12 bg-gradient-to-b from-gray-300 dark:from-gray-600 to-transparent" />
        </motion.div>

      </motion.div>
    </section>
  );
}
