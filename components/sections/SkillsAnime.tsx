"use client";

import { useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  { name: "React/Next.js", level: 95, color: "from-black to-gray-700" },
  { name: "TypeScript", level: 90, color: "from-gray-800 to-gray-600" },
  { name: "UI/UX Design", level: 85, color: "from-gray-700 to-gray-500" },
  { name: "Tailwind CSS", level: 95, color: "from-gray-600 to-black" },
  { name: "Framer Motion", level: 88, color: "from-black to-gray-700" },
  { name: "Node.js", level: 80, color: "from-gray-800 to-black" },
  { name: "SQL/Database", level: 75, color: "from-gray-700 to-gray-500" },
  { name: "PostgreSQL", level: 70, color: "from-gray-600 to-gray-800" },
  { name: "Flutter", level: 70, color: "from-gray-600 to-black" },
  { name: "CI/CD (Vercel)", level: 85, color: "from-black to-gray-700" },
];

export default function SkillsAnime() {
  const { ref, isInView } = useScrollAnimation({ amount: 0.1 });
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || typeof window === 'undefined') return;
    
    let timer: NodeJS.Timeout | null = null;
    
    // Dynamic import anime.js để tránh SSR issues và chunk loading errors
    import("animejs").then((anime) => {
      // animejs v4 sử dụng named exports
      const { animate, stagger } = anime;
      
      if (!animate || !stagger) {
        console.warn("animejs animate or stagger not available");
        return;
      }
    
      // Đợi một chút để đảm bảo DOM đã render
      timer = setTimeout(() => {
        hasAnimated.current = true;

        // Animate header
        if (headerRef.current) {
          animate(headerRef.current, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 500,
            easing: 'easeOutExpo',
          });
        }

        // Animate title
        if (titleRef.current) {
          animate(titleRef.current, {
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 500,
            delay: 50,
            easing: 'easeOutExpo',
          });
        }

        // Animate cards entrance với stagger
        const cardElements = document.querySelectorAll('.skill-card');
        if (cardElements.length > 0) {
          animate(cardElements, {
            opacity: [0, 1],
            translateX: [-50, 0],
            scale: [0.95, 1],
            duration: 500,
            delay: stagger(50, { from: 'first' }),
            easing: 'easeOutExpo',
          });
        }

        // Animate counter badges trước để hiển thị ngay
        const counterBadges = document.querySelectorAll('.counter-badge');
        if (counterBadges.length > 0) {
          animate(counterBadges, {
            opacity: [0, 1],
            scale: [0, 1],
            duration: 300,
            delay: stagger(30, { start: 100 }),
            easing: 'easeOutBack',
          });
        }

        // Animate progress bars và counters đồng thời
        progressBarsRef.current.forEach((bar, index) => {
          if (!bar) return;
          const skill = skills[index];
          const startDelay = index * 50 + 150; // Giảm delay giữa các skill
          
          // Animate progress bar
          animate(bar, {
            width: [`0%`, `${skill.level}%`],
            duration: 1200, // Giảm duration
            delay: startDelay,
            easing: 'easeOutExpo',
          });

          // Animate counter cùng lúc với progress bar
          const counter = countersRef.current[index];
          if (counter) {
            animate(counter, {
              innerText: [0, skill.level],
              duration: 1200, // Cùng duration với progress bar
              delay: startDelay, // Cùng delay với progress bar
              easing: 'easeOutExpo',
              round: 1,
            });
          }
        });

        // Shine effect trên progress bars
        const shineElements = document.querySelectorAll('.progress-shine');
        if (shineElements.length > 0) {
          animate(shineElements, {
            translateX: ['-100%', '200%'],
            duration: 1500,
            delay: stagger(50, { start: 1200 }),
            easing: 'easeInOutQuad',
          });
        }
      }, 50); // Giảm timeout từ 100ms xuống 50ms
    }).catch((err) => {
      console.error("Failed to load anime.js:", err);
    });
    
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isInView]);

  // Hover effects với anime.js
  const handleCardHover = (index: number, isEntering: boolean) => {
    if (typeof window === 'undefined') return;
    const card = cardsRef.current[index];
    if (!card) return;

    import("animejs").then((anime) => {
      const { animate } = anime;
      if (animate) {
        animate(card, {
          scale: isEntering ? 1.02 : 1,
          translateX: isEntering ? 5 : 0,
          duration: 300,
          easing: 'easeOutQuad',
        });
      }
    }).catch((err) => {
      console.error("Failed to load animejs for hover:", err);
    });
  };

  const handleCounterHover = (index: number, isEntering: boolean) => {
    if (typeof window === 'undefined') return;
    const counter = countersRef.current[index];
    if (!counter) return;

    import("animejs").then((anime) => {
      const { animate } = anime;
      if (animate) {
        animate(counter, {
          scale: isEntering ? 1.2 : 1,
          duration: 200,
          easing: 'easeOutQuad',
        });
      }
    }).catch((err) => {
      console.error("Failed to load animejs for hover:", err);
    });
  };

  return (
    <section 
      ref={ref}
      id="skills" 
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header với anime.js */}
          <div 
            ref={headerRef}
            className="text-center mb-16"
            style={{ opacity: 0 }}
          >
            <h2 
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ opacity: 0 }}
            >
              <span className="gradient-text-3">Skills & Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Technologies I work with daily
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="skill-card glass dark:glass-dark rounded-xl p-6 group cursor-pointer relative overflow-hidden"
                style={{ opacity: 0 }}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-gray-600/0 group-hover:from-black/5 group-hover:to-gray-600/5 transition-all duration-300" />
                
                <div className="flex justify-between items-center mb-3 relative z-10">
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:gradient-text transition-all">
                    {skill.name}
                  </span>
                  <span
                    ref={(el) => {
                      countersRef.current[index] = el;
                    }}
                    className="counter-badge text-sm font-medium gradient-text"
                    style={{ opacity: 0 }}
                    onMouseEnter={() => handleCounterHover(index, true)}
                    onMouseLeave={() => handleCounterHover(index, false)}
                  >
                    0%
                  </span>
                </div>
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    ref={(el) => {
                      progressBarsRef.current[index] = el;
                    }}
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    style={{ width: '0%' }}
                  >
                    {/* Shine effect */}
                    <div className="progress-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

