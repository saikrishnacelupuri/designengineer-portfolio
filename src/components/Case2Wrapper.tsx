"use client";

import { useEffect, useState } from 'react';
import { Case2 } from './Case2';

export const Case2Wrapper = () => {
  const [iconImages, setIconImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/3d-images');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIconImages(data.images || []);
      } catch (error) {
        console.error('Error fetching 3D images:', error);
        // Fallback to default images if fetch fails
        setIconImages([
          'image-2MLaG7Y7XlI9xoRE9VgxBxmJ7blNcZ.png',
          'image-9iSf9bvlKAMKSc1j4tYpRJKbRj82fv.png',
          'image-KkjncelYCZtsiEAnAoRvgs20nEB7IH.png',
          'image-T3qYlSLKV0Nh0PeSRW3YIPVgA0Mkqy.png',
          'image-gH8Ua0YoFx9LOY2UXyPX3Rj2HFFhmF.png',
          'london.png'
        ]);
      }
    };

    fetchImages();
  }, []);

  return <Case2 iconImages={iconImages} />;
};