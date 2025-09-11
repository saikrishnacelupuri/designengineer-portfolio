"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';

interface CurtainTransitionProps {
  isTransitioning: boolean;
  isDeveloperMode: boolean;
}

export const CurtainTransition: React.FC<CurtainTransitionProps> = ({
  isTransitioning,
  isDeveloperMode
}) => {
  // Create motion value for color transition progress - ALWAYS call this hook
  const colorProgress = useMotionValue(0);
  
  // Define color stops for the gradient transition
  const greenStart = [18, 182, 122]; // #12B67A
  const greenEnd = [5, 150, 105];   // #059669
  const blueStart = [64, 160, 255]; // #40A0FF
  const blueEnd = [30, 64, 175];    // #1e40af

  // ALWAYS call useTransform hooks (Rules of Hooks compliance)
  const startR = useTransform(colorProgress, [0, 1], [blueStart[0], greenStart[0]]);
  const startG = useTransform(colorProgress, [0, 1], [blueStart[1], greenStart[1]]);
  const startB = useTransform(colorProgress, [0, 1], [blueStart[2], greenStart[2]]);
  
  const endR = useTransform(colorProgress, [0, 1], [blueEnd[0], greenEnd[0]]);
  const endG = useTransform(colorProgress, [0, 1], [blueEnd[1], greenEnd[1]]);
  const endB = useTransform(colorProgress, [0, 1], [blueEnd[2], greenEnd[2]]);

  // Transform for the background gradient
  const backgroundGradient = useTransform(
    [startR, startG, startB, endR, endG, endB],
    ([sr, sg, sb, er, eg, eb]) =>
      `linear-gradient(135deg, rgb(${Math.round(sr)}, ${Math.round(sg)}, ${Math.round(sb)}) 0%, rgb(${Math.round(er)}, ${Math.round(eg)}, ${Math.round(eb)}) 100%)`
  );

  // Slide down/up transition variants
  const overlayVariants = {
    initial: {
      y: '-100%', // Start above the screen
    },
    slideDown: {
      y: '0%', // Slide down to cover screen
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Smooth easing
      }
    },
    slideUp: {
      y: '-100%', // Slide up to above the screen (revealing from bottom to top)
      transition: {
        duration: 0.5,
        ease: [0.64, 0, 0.78, 0], // Different easing for slide up
        delay: 0
      }
    }
  };

  // Color transition variants
  const colorTransition = {
    initial: { 
      colorProgress: isDeveloperMode ? 1 : 0 // Start from opposite color
    },
    animate: { 
      colorProgress: isDeveloperMode ? 0 : 1, // Transition to target color
      transition: {
        duration: 1.2, // Longer duration for smooth color transition
        ease: [0.25, 0.1, 0.25, 1], // Smooth color transition easing
        delay: 0.2 // Start color transition slightly after slide down begins
      }
    }
  };

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-50"
          variants={overlayVariants}
          initial="initial"
          animate="slideDown"
          exit="slideUp"
          style={{ transformOrigin: 'top' }}
          onAnimationStart={() => {
            // Animate color transition
            colorProgress.set(isDeveloperMode ? 1 : 0);
            animate(colorProgress, isDeveloperMode ? 0 : 1, {
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1
            });
          }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: backgroundGradient
            }}
          />
          
          {/* Add some texture/depth to the curtain */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-50" />
          
          {/* Color transition indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-white text-center"
            >
              {/* Simple loading text */}
              <motion.p
                className="text-lg font-medium"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};