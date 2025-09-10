'use client';

import { CursorProvider, Cursor, CursorFollow } from "@/components/ui/shadcn-io/animated-cursor";
import { useEffect, useState } from "react";

interface CustomCursorProps {
  children: React.ReactNode;
  isDeveloperMode: boolean;
}

export default function CustomCursor({ children, isDeveloperMode }: CustomCursorProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device supports hover (desktop)
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(hover: none)').matches);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <CursorProvider className="cursor-none">
      {children}
      
      {/* Main cursor SVG */}
      <Cursor>
        <svg
          className={`size-6 transition-all duration-300 ${
            isDeveloperMode 
              ? 'text-[#38BDF8]'
              : 'text-[#12B67A]'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
        >
          <path
            fill="currentColor"
            d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
          />
        </svg>
      </Cursor>

      {/* Following text label with spring physics */}
      <CursorFollow 
        align="bottom-right"
        sideOffset={15}
        transition={{ stiffness: 500, damping: 50, bounce: 0 }}
      >
        <div 
          className={`px-2 py-1 text-sm text-white transition-colors duration-300 ${
            isDeveloperMode
              ? 'bg-[#38BDF8]'
              : 'bg-[#12B67A]'
          }`}
        >
          {isDeveloperMode ? 'Developer' : 'Designer'}
        </div>
      </CursorFollow>
    </CursorProvider>
  );
}