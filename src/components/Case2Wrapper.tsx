"use client";

import { useEffect, useState } from 'react';
import { Case2 } from './Case2';

export const Case2Wrapper = () => {
  const [iconImages, setIconImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/3d-images');
        const data = await response.json();
        setIconImages(data.images || []);
      } catch (error) {
        console.error('Error fetching 3D images:', error);
      }
    };

    fetchImages();
  }, []);

  return <Case2 iconImages={iconImages} />;
};