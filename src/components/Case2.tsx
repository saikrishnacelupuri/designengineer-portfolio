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
  const [current, setCurrent] = useState(0);
  
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

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="relative w-full">
          <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 25 }).map((_, index) => (
                <CarouselItem
                  className="basis-1/4 lg:basis-1/6"
                  key={index}
                >
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-4">
                    {displayImages[index % displayImages.length] && (
                      <div className="relative w-full h-full bg-gray-100 rounded-md p-2 flex items-center justify-center">
                        <div className="relative max-w-[120px] max-h-[120px] w-full h-full">
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