"use client";
import Image from "next/image";
import { useState } from "react";
import CircularText from "../components/CircularText";
import FloatingMenuBar from "../components/FloatingMenuBar";

export default function Home() {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);

  return (
    <div 
      className={`relative flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${
        isDeveloperMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >

      {/* Original Toggle Component */}
      <div className="flex items-center gap-6 mb-16">
        <span 
          onClick={() => setIsDeveloperMode(false)}
          className={`text-2xl font-bold tracking-wider cursor-pointer ${!isDeveloperMode ? 'text-black' : 'text-gray-500'} ${!isDeveloperMode ? 'underline' : ''}`}
        >
          DESIGNER
        </span>
        
        <button
          onClick={() => setIsDeveloperMode(!isDeveloperMode)}
          className={`relative w-20 h-10 rounded-full transition-colors duration-300 hover:cursor-pointer ${
            isDeveloperMode ? 'bg-[#38BDF8]' : 'bg-[#12B67A]'
          }`}
        >
          <div
            className={`absolute top-1 w-8 h-8 bg-white rounded-full transition-transform duration-300 ${
              isDeveloperMode ? 'translate-x-10' : 'translate-x-1'
            }`}
          />
        </button>
        
        <span 
          onClick={() => setIsDeveloperMode(true)}
          className={`text-2xl font-bold tracking-wider cursor-pointer ${isDeveloperMode ? 'text-white' : 'text-gray-500'} ${isDeveloperMode ? 'underline' : ''}`}
        >
          DEVELOPER
        </span>
      </div>
     
      <main className={`flex gap-[80px] items-center max-w-[1120px] ${
        isDeveloperMode ? 'flex-row-reverse' : 'flex-row'
      }`}>
       
       <div className="relative">
       <Image
   className="hover:grayscale transition-all duration-300 w-[338px] h-[500px] object-cover"
          src={isDeveloperMode ? "/dev-profile.png" : "/profile.png"}
          alt="Krishna Celupuri Profile Image"
          width={338}
          height={500}
          priority
        />
        
        {/* Circular Text Overlay */}
        <div className="absolute bottom-4 right-4">
          <CircularText 
            text="| KRISHNA | CELUPURI "
            radius={80}
            fontSize={20}
            animate={true}
            className="text-white opacity-80"
          />
        </div>
        </div>  {/* Image */}



<div className="flex sm:flex-col gap-8 max-w-[600px]">

{/* Heading + Description */}
<h1 className="text-[42px] leading-[62px] uppercase">
  {isDeveloperMode ? (
    <>DESIGN ENGINEER<br/>WHO CAN DESIGN<br/><span className="text-[#8C8C8C]">BASED IN LONDON,UK</span></>
  ) : (
    <>PRODUCT DESIGNER<br/>WITH 8 YRS OF EXP.<br/><span className="text-[#8C8C8C]">BASED IN LONDON,UK</span></>
  )}
</h1>
        <ol className="font-mono list-inside list-[square] text-lg text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
          {isDeveloperMode ? (
            "I'm a Design Engineer who bridges the gap between design and code."
          ) : (
            "SENIOR PRODUCT DESIGNER WITH 8 YRS OF EXP. Based in London,UK"
          )}
          </li>
          <li className="tracking-[-.01em]">
          {isDeveloperMode ? (
            "I prototype, build, and ship polished interfaces with React, TypeScript, and Tailwind. My focus is on design systems, motion, and AI-driven workflows that feel as good as they look."
          ) : (
            "A SENIOR DESIGNER WHO CAN READ & WRITE CODE SPECIALISED IN WORKING WITH SMALL & EARLY STAGE TEAMS, WORKED WITH 10+ STARTUPS & SCALEUPS FROM INDIA, ITALY, USA & UK."
          )}
          </li>
        </ol>

{/* Buttons */}
        <div className="flex gap-4 mt-8 items-center flex-col sm:flex-row">
          {isDeveloperMode ? (
            <>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-2 hover:bg-gray-200 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="https://github.com/saikrishnacelupuri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github-mark-white.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="invert"
                />
                View Github
              </a>
              <a
                className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                href="https://www.linkedin.com/in/krishnacelupuri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </>
          ) : (
            <>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                href="https://www.linkedin.com/in/krishnacelupuri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </>
          )}
        </div>

</div>



      </main>

      {/* Floating Menu Bar */}
      <FloatingMenuBar 
        isDeveloperMode={isDeveloperMode}
        setIsDeveloperMode={setIsDeveloperMode}
      />
    
    </div>
  );
}
