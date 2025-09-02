"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface WorksSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function WorksSection({ children, className = "" }: WorksSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Find all image containers in this section
    const imageContainers = section.querySelectorAll('.work-image');

    imageContainers.forEach((container, index) => {
      // Initial state - hidden and translated up
      gsap.set(container, {
        y: 50,
        opacity: 0,
      });

      // Animate in when scrolled into view
      ScrollTrigger.create({
        trigger: container,
        start: "top 85%",
        end: "bottom 15%",
        once: true,
        animation: gsap.to(container, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power1.out",
        }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger && section.contains(trigger.vars.trigger as Node)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
}