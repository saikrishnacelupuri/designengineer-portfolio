"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useWordsSlideFromRight = () => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Store original content
    const originalHTML = element.innerHTML;
    
    // Split text into words while preserving HTML structure
    const splitWordsContent = (element: HTMLElement) => {
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
          
          // Split by words (spaces)
          const words = text.split(/(\s+)/);
          
          words.forEach(word => {
            if (word.trim()) {
              // Create word wrapper
              const wordWrapper = document.createElement('span');
              wordWrapper.className = 'word-wrapper';
              wordWrapper.style.cssText = 'display: inline-block; overflow: hidden;';
              
              const wordInner = document.createElement('span');
              wordInner.className = 'word';
              wordInner.style.cssText = 'display: inline-block; opacity: 0; transform: translateX(1em);';
              wordInner.textContent = word;
              
              wordWrapper.appendChild(wordInner);
              fragment.appendChild(wordWrapper);
            } else if (word) {
              // Preserve whitespace
              const spaceNode = document.createTextNode(word);
              fragment.appendChild(spaceNode);
            }
          });
          
          parent.replaceChild(fragment, textNode);
        }
      });
    };

    splitWordsContent(element);

    // Find all word spans
    const words = element.querySelectorAll('.word');

    // Create GSAP animation that runs immediately
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.to(words, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
    });

    // Cleanup function
    return () => {
      element.innerHTML = originalHTML;
    };
  }, []);

  return textRef;
};