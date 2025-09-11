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
          'Akiflow-logo-full-color.svg',
          'Capgemini_201x_logo.svg',
          'HDB_Financial_Services_logo.svg',
          'Nurole-logo.svg',
          'enthu-logo.svg',
          'flujo-logo.svg',
          'london.png',
          'nexrea-logo.png',
          'papertrail-logo.svg',
          'rbc-logo-shield.svg'
        ]);
      }
    };

    fetchImages();
  }, []);

  return <Case2 iconImages={iconImages} />;
};