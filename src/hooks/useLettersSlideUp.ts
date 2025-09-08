"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLettersSlideUp = () => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Store original content
    const originalHTML = element.innerHTML;
    
    // Create a wrapper for overflow hidden
    element.style.overflow = 'hidden';
    element.style.display = 'block';

    // Split text into characters while preserving HTML structure
    const splitTextContent = (element: HTMLElement) => {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
      );

      const textNodes: Text[] = [];
      let node;
      
      while (node = walker.nextNode()) {
        if (node.textContent && node.textContent.trim()) {
          textNodes.push(node as Text);
        }
      }

      textNodes.forEach(textNode => {
        const text = textNode.textContent || '';
        const parent = textNode.parentNode;
        
        if (parent && text.trim()) {
          const fragment = document.createDocumentFragment();
          
          text.split('').forEach(char => {
            const charWrapper = document.createElement('span');
            charWrapper.className = 'char-wrapper';
            charWrapper.style.cssText = 'display: inline-block; overflow: hidden;';
            
            const charInner = document.createElement('span');
            charInner.className = 'char';
            charInner.style.cssText = 'display: inline-block; transform: translateY(100%);';
            charInner.textContent = char === ' ' ? '\u00A0' : char;
            
            charWrapper.appendChild(charInner);
            fragment.appendChild(charWrapper);
          });
          
          parent.replaceChild(fragment, textNode);
        }
      });
    };

    splitTextContent(element);

    // Find all character spans
    const chars = element.querySelectorAll('.char');

    // Create GSAP animation
    const tl = gsap.timeline({ paused: true });
    
    tl.to(chars, {
      y: 0,
      duration: 0.2,
      ease: "power1.out",
      stagger: {
        amount: 0.6,
      },
    });

    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => tl.play(),
      onLeave: () => tl.reverse(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
      element.innerHTML = originalHTML;
      element.style.overflow = '';
      element.style.display = '';
    };
  }, []);

  return textRef;
};