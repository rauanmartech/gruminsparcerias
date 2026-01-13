import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
};

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ className, children, ...props }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn("opacity-0", isVisible && "animate-fade-in-up", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
