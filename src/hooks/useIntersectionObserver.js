import { useEffect, useRef, useState } from "react";

/**
 * useIntersectionObserver - fires when element enters viewport
 * @param {IntersectionObserverInit} options
 * @returns {{ ref, isVisible }}
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, unobserve
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, ...options }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return { ref, isVisible };
}