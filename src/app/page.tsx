"use client";
import Image from "next/image";
import { useState } from "react";
import CircularText from "../components/CircularText";
import FloatingMenuBar from "../components/FloatingMenuBar";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);

  return (
    <div 
      className={`relative transition-colors duration-300 ${
        isDeveloperMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-screen"
      >

        {/* Bg-Pattern - Only in Designer Mode */}
        {!isDeveloperMode && (
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)'
            }}
          ></div>
        )}

        {/* Bg-Pattern - Only in Developer Mode */}
        {isDeveloperMode && (
          <div
            className="absolute inset-0 z-0 flex items-center justify-center"
          >
            <Image
              src="/bg-pixels.svg"
              alt="Background pixels"
              width={800}
              height={600}
            />
          </div>
        )}

      {/* Original Toggle Component */}
      <div className="relative flex items-center gap-6 mb-16" style={{ zIndex: 10 }}>
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
     
      <main className={`relative z-10 flex gap-[80px] items-center max-w-[1120px] ${
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
      </div>

      {/* Works Section */}
      {!isDeveloperMode && (
        <section className="w-full bg-[#F4F2EC] py-[120px]">
          <div className="max-w-[1000px] mx-auto">
            <div className="border-[#DFDCD6] border-b-2 pb-8 mb-12">
              <h2 className="text-4xl font-bold mb-8 leading-16">WORKS</h2>
              <p className="text-gray-600 text-md max-w-3xl">
                Selected projects showcasing design solutions for startups and scale-ups 
                across different industries and challenges. Each project represents a unique 
                approach to solving complex user experience problems.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="space-y-16">
              
              {/* First Project - NUROLE */}
              <article className="">
                <div className="flex  gap-6 align-top items-start justify-between ">
                  <div className="w-[40%] flex flex-col justify-between h-full min-h-[400px]">
                  <h1 className="text-xl leading-7 uppercase mb-6">NUROLE — UK&apos;s LEADING BOARD SEARCH
                  PLATFORM</h1>
                    <ImageSlider
                      images={[
                        {
                          src: "/work-designer/img_3769-2.png.png",
                          alt: "NHROLE - HR & BOARD SEARCH PLATFORM",
                          caption: "// TEAM OFFSITE – 2024 | Lympne, UK 🇬"
                        },
                        {
                          src: "/nr-team2.jpeg",
                          alt: "NHROLE Team Offsite 2024",
                          caption: "TEAM OFFSITE 2025 | WINCHESTER, UK"
                        }
                      ]}
                    />
                 
                  </div>

                  <div className="w-[60%] p-12 flex flex-col justify-between bg-white shadow-md rounded-[24px]" style={{ transform: 'rotate(15deg)' }}>
                    <div>
                      <div className="mb-4">
                        <span className="text-sm text-gray-500">{/* 2022 — PRESENT */}2022 — PRESENT</span>
                        <div className="flex items-center mt-2">
                          <span className="text-lg font-bold">🥈 2ND PRODUCT DESIGNER</span>
                        </div>
                      </div>
                      <ol className="font-mono list-inside list-[square] text-14 text-center sm:text-left">
                       <li className="mb-2 tracking-[-.01em] text-[14px]">
          As the 2nd Design hire in the company I Led the
design and development from (0 to1) of Matching
App & NR Hub (Admin system replacement) that
significantly reduced operational hours &
irrelevant role notifications.
          </li>
          <li className="tracking-[-.01em] text-[14px]">
          Owned Mixpanel tracking for new features,
          advocating for data-driven decision-making.
          </li>
          <li className="tracking-[-.01em] text-[14px]">
          Owned Mixpanel tracking for new features,
          advocating for data-driven decision-making.
          </li>
          <li className="tracking-[-.01em] text-[14px]">
          Created data dashboards for the Platform Squad
and helped other squads set upproduct analytics
tracking.
          </li> 
          <li className="tracking-[-.01em] text-[14px]">
          Designed and integrated a new feature set into
Candidate Assessment Tooling (CAT),
enhancing platform capabilities.
          </li>
        </ol>
                    </div>
                  
                  </div>
                </div>
             
              </article>

              {/* Second Project - Matching App */}
              <article>
                <div className="relative h-[576px]">
                  <Image
                    src="/work-designer/matching-placeholder.webp.png"
                    alt="MATCHING APP"
                    fill
                    className="object-cover rounded-[16px]" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2 leading-[48px]">
                    MATCHING APP : (0→1) INTERNAL APPLICATION TO EFFECTIVELY SOURCE & TARGET CANDIDATES FOR ROLES.
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    0 TO 1 / DATA-DASHBOARD / MATCHING ALGORITHM
                  </p>
                 
                </div>
              </article>

              {/* Third and Fourth Projects - Side by Side */}
              <div className="flex gap-8">
                <article className="w-[50%] bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-[300px]">
                    <Image
                      src="/work-designer/Candidate-Assessment-Internal-View.png.png"
                      alt="GUEST CHECKOUT"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">
                      GUEST CHECKOUT : ALLOWING NON-MEMBERS TO APPLY ROLES
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      NEW FEATURE / USER RESEARCH
                    </p>
                    <button className="border border-gray-400 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                      💡 COMING SOON
                    </button>
                  </div>
                </article>

                <article className="w-[50%] bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-[300px]">
                    <Image
                      src="/work-designer/share-on-public-roles.png.png"
                      alt="INTERNAL ASSESSMENT VIEW"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">
                      INTERNAL ASSESSMENT VIEW IN CANDIDATE ASSESSMENT TOOLING
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      SAAS / DISCOVERY / DATA
                    </p>
                    <button className="bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 transition-colors">
                      🔒 PRIVATE
                    </button>
                  </div>
                </article>
              </div>

              {/* Bottom CTA Section */}
              <section className="mt-24 text-center border-t border-gray-200 pt-16">
                <h3 className="text-3xl font-bold mb-6">Ready to work together?</h3>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  I&apos;m always interested in new challenges and opportunities to create 
                  meaningful design solutions. Let&apos;s discuss your project.
                </p>
                <div className="flex gap-4 justify-center">
                  <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                    GET IN TOUCH
                  </button>
                  <button className="border border-black text-black px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                    VIEW RESUME
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      )}

      {/* Floating Menu Bar */}
      <FloatingMenuBar 
        isDeveloperMode={isDeveloperMode}
        setIsDeveloperMode={setIsDeveloperMode}
      />
    
    </div>
  );
}
