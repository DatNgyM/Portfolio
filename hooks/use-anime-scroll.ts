"use client";

import { useEffect, useRef } from "react";

interface UseAnimeScrollOptions {
  threshold?: number;
  once?: boolean;
  offset?: [string, string];
}

/**
 * Custom hook for scroll-triggered animations using anime.js Scroll Observer
 * Provides smooth, performant scroll animations with anime.js
 */
export function useAnimeScroll(
  selector: string,
  animationConfig: any,
  options?: UseAnimeScrollOptions
) {
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<any>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;
    if (options?.once && hasAnimated.current) return;

    // Dynamic import để tránh SSR issues và chunk loading errors
    import("animejs").then((anime) => {
      const { onScroll } = anime;
      
      if (!onScroll) {
        console.warn("animejs onScroll is not available");
        return;
      }

      const observer = onScroll({
        targets: selector,
        ...animationConfig,
        ...(options?.offset && {
          offset: options.offset,
        }),
      });

      observerRef.current = observer;
      hasAnimated.current = true;
    }).catch((err) => {
      console.error("Failed to load animejs:", err);
    });

    return () => {
      if (observerRef.current && typeof observerRef.current.revert === 'function') {
        observerRef.current.revert();
      }
    };
  }, [selector, options, animationConfig]);

  return { ref };
}

