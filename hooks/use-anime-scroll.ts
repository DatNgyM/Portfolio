"use client";

import { useEffect, useRef } from "react";
import { onScroll, ScrollObserver } from "animejs";

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
  const observerRef = useRef<ScrollObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    if (options?.once && hasAnimated.current) return;

    const observer = onScroll({
      targets: selector,
      ...animationConfig,
      ...(options?.offset && {
        offset: options.offset,
      }),
    });

    observerRef.current = observer;
    hasAnimated.current = true;

    return () => {
      if (observerRef.current) {
        observerRef.current.revert();
      }
    };
  }, [selector, options]);

  return { ref };
}

