"use client";

import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import { FiMousePointer } from "react-icons/fi";

export const MouseImageTrail = () => {
  return (
    <MouseImageTrailComponent
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/NR/IMG_0150.jpg",
        "/NR/IMG_0311.jpg",
        "/NR/IMG_0312.jpg",
        "/NR/IMG_0420.jpg",
        "/NR/IMG_0498.jpg",
        "/NR/IMG_20221116_092820.jpg",
        "/NR/IMG_20221129_100036.jpg",
        "/NR/IMG_20230523_085623.jpg",
        "/NR/IMG_20230523_090608.jpg",
        "/NR/IMG_20230523_091141.jpg",
        "/NR/IMG_20230726_184808_855.jpg",
        "/NR/pizza.png",
        "/NR/team1.png",
        "/NR/team2.png",
        
      ]}
    >
      <section className="relative grid h-[60vh] sm:h-screen w-full place-content-center bg-white">
        {/* Background Grid - Same as hero section */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          width="100%" 
          height="100%" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 0 }}
        >
          <defs>
            <pattern id="mouseTrailDottedGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle 
                cx="2" 
                cy="2" 
                r="1" 
                fill="rgba(0,0,0,0.2)" 
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mouseTrailDottedGrid)" />
        </svg>
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold uppercase text-black mb-4">
            PEOPLE & PLAY
          </h2>
          <p className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium text-gray-600 mb-4 sm:mb-8">
            <FiMousePointer />
            <span>Move your mouse around</span>
          </p>
          <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto px-4">
            Behind every great product is an amazing team. These moments capture the spirit of collaboration, creativity, and friendship that drives my work.
          </p>
        </div>
      </section>
    </MouseImageTrailComponent>
  );
};

interface MouseImageTrailProps {
  children: React.ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}

const MouseImageTrailComponent: React.FC<MouseImageTrailProps> = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement;
    
    if (!el) return;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-80 sm:h-48 w-auto border-8 border-white  bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Team moment ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};