"use client";

import { useEffect, useRef, useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface HorizontalGalleryProps {
  images: GalleryImage[];
}

const HorizontalGallery = ({ images }: HorizontalGalleryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 1; // Smooth continuous scrolling
    
    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Check if we've scrolled past the first set of images
        const singleSetWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= singleSetWidth) {
          // Seamlessly reset to the beginning (this creates infinite loop)
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };
    
    // Start auto-scrolling
    animationId = requestAnimationFrame(autoScroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full bg-[#F4F2EC] overflow-hidden">
     
      
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide" data-horizontal-scroll>
        <div 
          className="flex gap-4 sm:gap-6 pb-4 items-start"
        >
          {/* Duplicate images for seamless loop */}
          {[...images, ...images].map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 scroll-snap-align-start"
            >
              <div className="relative rounded-none">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="hover:scale-102 transition-transform duration-300 sm:max-w-[400px]"
                  style={{ maxWidth: '300px', height: 'auto' }}
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 text-left uppercase tracking-wide font-medium max-w-xs">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalGallery;