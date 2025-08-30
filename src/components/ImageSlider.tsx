"use client";
import { useState } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: { src: string; alt: string; caption?: string }[];
  className?: string;
}

export default function ImageSlider({ images, className = "" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={`relative ${className}`}>
      {/* Image Container */}
      <div className="relative h-[260px] overflow-hidden rounded-md">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
        />
      </div>

      {/* Caption */}
      {images[currentIndex].caption && (
        <p className="mt-4">
          {images[currentIndex].caption}
        </p>
      )}

      {/* Dots Navigation */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? "bg-black" 
                  : "bg-gray-300 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}