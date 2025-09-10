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
        className={`glass-navbar group relative flex items-center gap-6 px-5 py-4 rounded-full transition-all duration-500 ease-out hover:scale-[1.02] ${
          isDeveloperMode ? 'text-white' : 'text-black'
        }`}
        style={{
          background: isDeveloperMode 
            ? `linear-gradient(-75deg, rgba(255,255,255,0.03), rgba(255,255,255,0.15), rgba(255,255,255,0.03))`
            : `linear-gradient(-75deg, rgba(255,255,255,0.05), rgba(255,255,255,0.25), rgba(255,255,255,0.05))`,
          backdropFilter: 'blur(clamp(8px, 1.25em, 16px)) saturate(180%)',
          WebkitBackdropFilter: 'blur(clamp(8px, 1.25em, 16px)) saturate(180%)',
          boxShadow: isDeveloperMode 
            ? `inset 0 0.125em 0.125em rgba(255,255,255,0.1),
               inset 0 -0.125em 0.125em rgba(255,255,255,0.3),
               0 0.5em 1em -0.25em rgba(0,0,0,0.4),
               0 0 0.1em 0.2em inset rgba(255,255,255,0.15)`
            : `inset 0 0.125em 0.125em rgba(255,255,255,0.2),
               inset 0 -0.125em 0.125em rgba(255,255,255,0.6),
               0 0.5em 1em -0.25em rgba(0,0,0,0.15),
               0 0 0.1em 0.25em inset rgba(255,255,255,0.25)`,
          border: isDeveloperMode 
            ? '1px solid rgba(255,255,255,0.08)'
            : '1px solid rgba(255,255,255,0.2)'
        }}
      >
        {/* Animated shine effect */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(-45deg, 
              rgba(255,255,255,0) 0%, 
              rgba(255,255,255,0.3) 40% 50%, 
              rgba(255,255,255,0) 55%)`,
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 50%',
            animation: 'shine 2s ease-in-out infinite',
            mixBlendMode: 'screen',
            zIndex: 1
          }}
        />
        
        {/* Enhanced border with subtle animation */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500"
          style={{
            background: `conic-gradient(from -75deg at 50% 50%, 
              ${isDeveloperMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}, 
              transparent 5% 40%, 
              ${isDeveloperMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 50%, 
              transparent 60% 95%, 
              ${isDeveloperMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'})`,
            padding: '1px',
            mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            maskComposite: 'xor',
            WebkitMaskComposite: 'xor',
            zIndex: 0
          }}
        />
        
        {/* Content wrapper to ensure content stays above glass effect */}
        <div className="relative z-10 flex items-center w-full">
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
        <div className="flex items-center gap-1 sm:gap-3 absolute left-1/2 transform -translate-x-1/2">
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
              isDeveloperMode ? 'bg-[#40A0FF]' : 'bg-[#12B67A]'
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
        <div className="flex items-center ml-auto">
          <a href="mailto:krishnacelupuri@gmail.com">
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 hover:cursor-pointer text-xs sm:text-sm px-2 rounded-full sm:px-4">CONTACT</Button>
          </a>
        </div>
        </div> {/* Close content wrapper */}
      </div>
    </header>
  );
};