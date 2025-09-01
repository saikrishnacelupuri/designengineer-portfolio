"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SlideInImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  delay?: number;
}

export default function SlideInImage({ 
  src, 
  alt, 
  className = "", 
  fill, 
  width, 
  height, 
  delay = 0 
}: SlideInImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    // Initial state - image off-screen to the right
    gsap.set(element, {
      x: 100,
      opacity: 0,
    });

    // Animate in from the right when scrolled into view
    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      once: true,
      animation: gsap.to(element, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: delay,
        ease: "power2.out",
      }),
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return (
    <div ref={imageRef} className={`${fill ? 'relative w-full h-full' : ''}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
}