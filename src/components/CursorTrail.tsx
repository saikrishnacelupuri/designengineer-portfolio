"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const CursorTrail = () => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageIndex = useRef(0);
  const spawnCounter = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const cachedMousePos = useRef({ x: 0, y: 0 });
  const currentMousePos = useRef({ x: 0, y: 0 });
  const animationTimeout = useRef<NodeJS.Timeout | null>(null);
  const activeImagesCount = useRef(0);
  const isIdle = useRef(true);
  const zIndexVal = useRef(1);

  // Linear interpolation function for smooth transitions
  const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
  
  // Control spawn frequency (higher = slower spawning, fewer images)
  const SPAWN_FREQUENCY = 2; // Change this: 1=spawn every time, 2=spawn every 2nd time, etc.

  const trailImages = [
    '/trails/IMG_20210502_125608-scaled.jpg',
    '/trails/IMG_20210502_134142.jpg',
    '/trails/IMG_20210502_143840.jpg',
    '/trails/IMG_20211128_164710.jpg',
    '/trails/IMG_20240502_205235.jpg',
    '/trails/IMG_20240511_144753.jpg',
    '/trails/IMG_20240511_155208.jpg',
    '/trails/img1.webp',
    '/trails/img2.png',
    '/trails/img3.png',
    '/trails/img4.png',
    '/trails/img5.png',
    '/trails/img6.png',
    '/trails/img7.webp'
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    function addNewItem(x: number, y: number) {
      const newItem = document.createElement("div");
      newItem.className = "absolute w-80 h-60 overflow-hidden";
      newItem.style.zIndex = String(zIndexVal.current++);

      const img = document.createElement("img");
      img.src = trailImages[imageIndex.current];
      img.className = "w-full h-full object-cover rounded-2xl";
      img.draggable = false;
      newItem.appendChild(img);
      
      // Kill any existing tweens on this element
      gsap.killTweensOf(newItem);
      
      // Two-phase animation timeline
      const timeline = gsap.timeline({
        onStart: () => {
          activeImagesCount.current++;
          isIdle.current = false;
        },
        onComplete: () => {
          activeImagesCount.current--;
          if (activeImagesCount.current === 0) {
            isIdle.current = true;
            zIndexVal.current = 1;
          }
          if (newItem.parentNode) {
            newItem.parentNode.removeChild(newItem);
          }
        }
      });
      
      // Phase 1: Appear from cached position, move to current mouse position
      timeline.fromTo(newItem, {
        opacity: 0,
        scale: 0,
        x: cachedMousePos.current.x - 160,
        y: cachedMousePos.current.y - 120
      }, {
        duration: 0.4,
        ease: "power2",
        opacity: 1,
        scale: 1,
        x: currentMousePos.current.x - 160,
        y: currentMousePos.current.y - 120
      }, 0);
      
      // Phase 2: Fade out and return to cached position
      timeline.to(newItem, {
        duration: 0.8,
        ease: "power2",
        opacity: 0,
        scale: 0.2,
        x: cachedMousePos.current.x - 160,
        y: cachedMousePos.current.y - 120
      }, 1);
      
      // Always use current image and increment for next spawn
      imageIndex.current = (imageIndex.current + 1) % trailImages.length;

      container.appendChild(newItem);
      manageItemLimit();
    }

    function manageItemLimit() {
      while (container.children.length > 8) {
        container.removeChild(container.firstChild);
      }
    }

    // Smooth update of cached mouse position using lerp
    function updateCachedMousePos() {
      cachedMousePos.current.x = lerp(cachedMousePos.current.x, currentMousePos.current.x, 0.1);
      cachedMousePos.current.y = lerp(cachedMousePos.current.y, currentMousePos.current.y, 0.1);
      requestAnimationFrame(updateCachedMousePos);
    }
    
    // Start the smooth mouse position updating
    requestAnimationFrame(updateCachedMousePos);


    const handleMouseMove = (event: MouseEvent) => {
      const currentX = event.pageX;
      const currentY = event.pageY;
      
      // Update current mouse position for lerping
      currentMousePos.current = { x: currentX, y: currentY };
      
      // Calculate distance from last position
      const distance = Math.sqrt(
        Math.pow(currentX - lastMousePos.current.x, 2) + 
        Math.pow(currentY - lastMousePos.current.y, 2)
      );
      
      // Only spawn image if moved more than 80px
      if (distance > 80) {
        spawnCounter.current = (spawnCounter.current + 1);
        
        // Only spawn based on frequency control
        if (spawnCounter.current % SPAWN_FREQUENCY === 0) {
          addNewItem(currentX, currentY);
        }
        
        lastMousePos.current = { x: currentX, y: currentY };
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) {
        const currentX = touch.pageX;
        const currentY = touch.pageY;
        
        // Update current mouse position for lerping
        currentMousePos.current = { x: currentX, y: currentY };
        
        // Calculate distance from last position
        const distance = Math.sqrt(
          Math.pow(currentX - lastMousePos.current.x, 2) + 
          Math.pow(currentY - lastMousePos.current.y, 2)
        );
        
        // Only spawn image if moved more than 80px
        if (distance > 80) {
          spawnCounter.current = (spawnCounter.current + 1);
          
          // Only spawn based on frequency control
          if (spawnCounter.current % SPAWN_FREQUENCY === 0) {
            addNewItem(currentX, currentY);
          }
          
          lastMousePos.current = { x: currentX, y: currentY };
        }
      }
    };

    // Add event listeners only to the container
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
};

export default CursorTrail;