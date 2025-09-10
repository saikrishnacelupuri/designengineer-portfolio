'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  
  // Lines with consistent short length (gray) and occasional long lines (dark) for major sections
  const sections = [
    { length: 'w-12', isDark: true },   // Hero section (long + dark)
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-12', isDark: true },   // About section (long + dark)
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-12', isDark: true },   // Projects section (long + dark)
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-12', isDark: true },   // Experience section (long + dark)
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
    { length: 'w-12', isDark: true },   // Contact section (long + dark)
    { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },   { length: 'w-6', isDark: false },
  ];
  
  const totalHeight = (sections.length - 1) * 8; // 8px spacing between lines (space-y-2)
  
  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col space-y-2 relative">
        {/* Horizontal lines representing different sections */}
        {sections.map((section, index) => (
          <div key={index} className="relative">
            <div className={`h-px ${section.length} ${section.isDark 
              ? 'bg-gray-500' 
              : 'bg-gray-300'
            }`} />
          </div>
        ))}
        
        {/* Moving triangle indicator with extending line */}
        <motion.div
          className="absolute flex items-center"
          style={{
            left: '-13px',
            top: useTransform(scrollYProgress, [0, 1], ['0px', `${totalHeight}px`]),
            transform: 'translateY(-50%)'
          }}
        >
          {/* Triangle */}
          <div
            className="w-0 h-0"
            style={{
              borderTop: '3px solid transparent',
              borderBottom: '3px solid transparent',
              borderLeft: '5px solid #ef4444',
            }}
          />
          {/* Extending horizontal line */}
          <div className="h-px w-20 bg-[#ff5800] ml-2 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}