import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

/**
 * AnimatedSection - wraps children and reveals them with a fade+slide
 * animation when they enter the viewport.
 *
 * Props:
 *   direction?: "up" | "down" | "left" | "right"  (default "up")
 *   delay?: number  CSS transition delay in ms  (default 0)
 *   className?: string
 *   style?: object
 */
export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className,
  style,
}) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const TRANSLATE = {
    up:    "translateY(40px)",
    down:  "translateY(-40px)",
    left:  "translateX(40px)",
    right: "translateX(-40px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : TRANSLATE[direction],
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
