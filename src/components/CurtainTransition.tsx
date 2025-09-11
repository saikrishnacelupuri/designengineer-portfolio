"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrambleText from './ScrambleText';

interface CurtainTransitionProps {
  isTransitioning: boolean;
}

export const CurtainTransition: React.FC<CurtainTransitionProps> = ({
  isTransitioning
}) => {

  // Slide down/up transition variants
  const overlayVariants = {
    initial: {
      y: '-100%', // Start above the screen
    },
    slideDown: {
      y: '0%', // Slide down to cover screen
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Smooth easing
      }
    },
    slideUp: {
      y: '-100%', // Slide up to above the screen (revealing from bottom to top)
      transition: {
        duration: 0.5,
        ease: [0.64, 0, 0.78, 0] as [number, number, number, number], // Different easing for slide up
        delay: 0
      }
    }
  };

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#121212]"
          variants={overlayVariants}
          initial="initial"
          animate="slideDown"
          exit="slideUp"
          style={{ transformOrigin: 'top' }}
        >
          {/* Loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-white text-center text-lg font-medium"
            >
              <ScrambleText>Loading...</ScrambleText>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};