"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Case2Props {
  iconImages?: string[];
}

export const Case2 = ({ iconImages = [] }: Case2Props) => {
  const [api, setApi] = useState<CarouselApi>();
  
  // Fallback images if none provided
  const defaultImages = [
    'image-2MLaG7Y7XlI9xoRE9VgxBxmJ7blNcZ.png',
    'image-KkjncelYCZtsiEAnAoRvgs20nEB7IH.png',
    'image-T3qYlSLKV0Nh0PeSRW3YIPVgA0Mkqy.png',
    'image-gH8Ua0YoFx9LOY2UXyPX3Rj2HFFhmF.png',
    'london.png'
  ];
  
  const displayImages = iconImages.length > 0 ? iconImages : defaultImages;

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="relative w-full">
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 25 }).map((_, index) => (
                <CarouselItem
                  className="basis-1/4 lg:basis-1/7"
                  key={index}
                >
                  <div className="flex rounded-md aspect-square items-center justify-center p-2">
                    {displayImages[index % displayImages.length] && (
                      <div className="relative w-full h-full rounded-md p-1 flex items-center justify-center">
                        <div className="relative max-w-[240px] max-h-[124px] w-full h-full">
                          <Image
                            src={`/3D/${displayImages[index % displayImages.length]}`}
                            alt={`3D Icon ${index + 1}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};