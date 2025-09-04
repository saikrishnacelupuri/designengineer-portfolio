"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Header1Props {
  isDeveloperMode?: boolean;
  setIsDeveloperMode?: (mode: boolean) => void;
}

export const Header1 = ({ isDeveloperMode = false, setIsDeveloperMode }: Header1Props) => {
  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-[1000px]`}>
      <div 
        className={`glass-container relative flex items-center gap-6 px-5 py-4 rounded-full backdrop-blur-xl backdrop-saturate-200 border transition-all duration-300 shadow-2xl ${
          isDeveloperMode 
            ? 'bg-black/15 border-white/10 text-white shadow-black/50' 
            : 'bg-white/15 border-white/20 text-black shadow-black/10'
        }`} 
        style={{
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)'
        }}
      >
        {/* Glass effect pseudo-element */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: `
              inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7),
              inset 0 0 3px 1px rgba(255, 255, 255, 0.7)
            `,
            WebkitBoxShadow: `
              inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7),
              inset 0 0 3px 1px rgba(255, 255, 255, 0.7)
            `,
            zIndex: 1
          }}
        />
        
        {/* Content wrapper to ensure content stays above glass effect */}
        <div className="relative z-10 flex gap-2 sm:gap-6 items-center justify-between w-full">
        {/* Avatar - Left side */}
        <div className="flex items-center">
          <Image
            src="/favicon.png"
            alt="Krishna Celupuri"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        
        {/* Mode Toggle - Center */}
        <div className="flex items-center gap-1 sm:gap-3">
          <span 
            onClick={() => setIsDeveloperMode?.(false)}
            className={`text-xs sm:text-sm font-bold tracking-wider cursor-pointer transition-colors ${
              !isDeveloperMode 
                ? (isDeveloperMode ? 'text-white' : 'text-black') 
                : 'text-gray-500'
            } ${!isDeveloperMode ? 'underline' : ''}`}
          >
            DESIGNER
          </span>
          
          <button
            onClick={() => setIsDeveloperMode?.(!isDeveloperMode)}
            className={`relative w-12 h-6 sm:w-16 sm:h-8 rounded-full transition-colors duration-300 hover:cursor-pointer ${
              isDeveloperMode ? 'bg-[#38BDF8]' : 'bg-[#12B67A]'
            }`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 sm:top-1 sm:w-6 sm:h-6 bg-white rounded-full transition-transform duration-300 ${
                isDeveloperMode ? 'translate-x-6 sm:translate-x-8' : 'translate-x-0.5 sm:translate-x-1'
              }`}
            />
          </button>
          
          <span 
            onClick={() => setIsDeveloperMode?.(true)}
            className={`text-xs sm:text-sm font-bold tracking-wider cursor-pointer transition-colors ${
              isDeveloperMode 
                ? (isDeveloperMode ? 'text-white' : 'text-black') 
                : 'text-gray-500'
            } ${isDeveloperMode ? 'underline' : ''}`}
          >
            DEVELOPER
          </span>
        </div>
        
        {/* Contact Button - Right side */}
        <div className="flex items-center">
          <a href="mailto:krishnacelupuri@gmail.com">
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 hover:cursor-pointer text-xs sm:text-sm px-2 sm:px-4">CONTACT</Button>
          </a>
        </div>
        </div> {/* Close content wrapper */}
      </div>
    </header>
  );
};