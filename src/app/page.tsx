"use client";
import Image from "next/image";
import { useState } from "react";
import CircularText from "../components/CircularText";
import FloatingMenuBar from "../components/FloatingMenuBar";
import ImageSlider from "../components/ImageSlider";
import HorizontalGallery from "../components/HorizontalGallery";

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
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(#d1d5db 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)',
              zIndex: -1
            }}
          ></div>
        )}

        {/* Bg-Pattern - Only in Developer Mode */}
        {isDeveloperMode && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 1 }}
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
            "SENIOR PRODUCT DESIGNER WITH 8 YRS OF EXP. Based in London,UK 🇬🇧"
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
              <button
                onClick={() => window.open("https://github.com/saikrishnacelupuri", "_blank")}
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-2 hover:bg-gray-200 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              >
                <Image
                  src="/github-mark-white.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="invert"
                />
                View Github
              </button>
              <button
                onClick={() => window.open("https://www.linkedin.com/in/krishnacelupuri/", "_blank")}
                className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              >
                LinkedIn
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => window.open("https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", "_blank")}
                className="uppercase rounded-full border hover:cursor-pointer border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              >
                Download CV
              </button>
              <button
                onClick={() => window.open("https://www.linkedin.com/in/krishnacelupuri/", "_blank")}
                className="uppercase rounded-full border-1 border-solid border-black dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              >
                LinkedIn
              </button>
            </>
          )}
        </div>

</div>



      </main>
      </div>

      {/* Works Section */}
      {!isDeveloperMode && (
        <section className="w-full bg-[#F4F2EC] pt-[120px]">
          <div className="max-w-[1000px] mx-auto">
            <div className="pb-[80px]">
              <h2 className="text-4xl font-bold mb-8 leading-16">NUROLE — UK's LEADING BOARD SEARCH PLATFORM
              </h2>
              <p className="text-gray-600 text-md max-w-3xl">
                Selected projects showcasing design solutions for startups and scale-ups 
                across different industries and challenges. Each project represents a unique 
                approach to solving complex user experience problems.
              </p>
            </div>

          </div>
        </section>
      )}

  

      {/* Remaining Works Section */}
      {!isDeveloperMode && (
        <section className="w-full bg-[#F4F2EC] pb-[60px]">
          <div className="max-w-[1000px] mx-auto">
            <div className="space-y-12">
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
                <article className="w-[50%]">
                  <div className="relative h-[300px]">
                    <Image
                      src="/work-designer/Candidate-Assessment-Internal-View.png.png"
                      alt="GUEST CHECKOUT"
                      fill
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 leading-10">
                      GUEST CHECKOUT : ALLOWING NON-MEMBERS TO APPLY ROLES
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      NEW FEATURE / USER RESEARCH
                    </p>
                  
                  </div>
                </article>

                <article className="w-[50%]">
                  <div className="relative h-[300px]">
                    <Image
                      src="/work-designer/share-on-public-roles.png.png"
                      alt="INTERNAL ASSESSMENT VIEW"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold leading-10 text-black mb-2">
                      INTERNAL ASSESSMENT VIEW IN CANDIDATE ASSESSMENT TOOLING
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      SAAS / DISCOVERY / DATA
                    </p>
                
                  </div>
                </article>
              </div>

             
            </div>
          </div>
        </section>
      )}

    {/* Full Width Horizontal Gallery */}
    {!isDeveloperMode && (
        <section className="w-full bg-[#F4F2EC]">
          <HorizontalGallery
                      images={[
                      
                        {
                          src: "/NR/IMG_0312.jpg",
                          alt: "Team Offsite - 2024 | Lympne, UK", 
                          caption: "TEAM OFFSITE - 2024 | LYMPNE, UK"
                        },
                        {
                          src: "/NR/IMG_0420.jpg",
                          alt: "Desk Pictures",
                          caption: "DESK PICTURES"
                        },
                        {
                          src: "/NR/IMG_0498.jpg",
                          alt: "Desk Pictures",
                          caption: "DESK PICTURES"
                        },
                       
                        {
                          src: "/NR/team1.png",
                          alt: "Team Lunch",
                          caption: "LUNCHES"
                        },
                      
                        {
                          src: "/NR/IMG_0150.jpg",
                          alt: "Team Lunch",
                          caption: "LUNCHES"
                        },

                        {
                          src: "/NR/team2.png",
                          alt: "Team Lunch",
                          caption: "LUNCHES"
                        },
                        {
                          src: "/NR/pizza.png",
                          alt: "Team Offsite - 2023 | Lympne, UK",
                          caption: "TEAM OFFSITE - 2023 | LYMPNE, UK"
                        },
                     
                        {
                          src: "/NR/IMG_20221116_092820.jpg",
                          alt: "Team Meeting",
                          caption: "TEAM MEETINGS"
                        },
                        {
                          src: "/NR/IMG_20221129_100036.jpg",
                          alt: "Office Space",
                          caption: "OFFICE SPACE"
                        },
                        {
                          src: "/NR/IMG_20230523_085623.jpg",
                          alt: "Team Event",
                          caption: "TEAM EVENTS"
                        },
                        {
                          src: "/NR/IMG_20230523_090608.jpg",
                          alt: "Team Event",
                          caption: "TEAM EVENTS"
                        },
                        {
                          src: "/NR/IMG_20230523_091141.jpg",
                          alt: "Team Event",
                          caption: "TEAM EVENTS"
                        },
                        {
                          src: "/NR/IMG_20230726_184808_855.jpg",
                          alt: "Evening Event",
                          caption: "EVENING EVENTS"
                        }
                      ]}
                    />
        </section>
      )}

       {/* Bottom CTA Section */}
       <section className="mt-24 text-center pb-24">
                <h3 className="text-3xl font-bold mb-6">READY TO WORK TOGETHER?</h3>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  I&apos;m always interested in new challenges and opportunities to create 
                  meaningful design solutions. Let&apos;s discuss your project.
                </p>
                <div className="flex gap-4 justify-center">
                  <button className="bg-black hover:cursor-pointer text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                    GET IN TOUCH
                  </button>
                  <button className="border hover:cursor-pointer border-black text-black px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                    VIEW RESUME
                  </button>
                </div>
              </section>


      {/* Floating Menu Bar */}
      <FloatingMenuBar 
        isDeveloperMode={isDeveloperMode}
        setIsDeveloperMode={setIsDeveloperMode}
      />
    
    </div>
  );
}
