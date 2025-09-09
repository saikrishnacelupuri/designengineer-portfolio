"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import CircularText from "../components/CircularText";
// import { useLettersSlideUp } from "../hooks/useLettersSlideUp";

import HorizontalGallery from "../components/HorizontalGallery";
import DeveloperTimeline from "../components/DeveloperTimeline";
import { Header1 } from "../components/Header1";
import { Case2Wrapper } from "../components/Case2Wrapper";
import { Footer1 } from "../components/Footer1";
import { MouseImageTrail } from "../components/MouseImageTrail";

export default function Home() {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);
  
  // Letters slide up animation refs for work titles - COMMENTED OUT
  // const nuroleRef = useLettersSlideUp();
  // const matchingAppRef = useLettersSlideUp();
  // const assessmentRef = useLettersSlideUp();
  // const guestCheckoutRef = useLettersSlideUp();
  // const papertrailRef = useLettersSlideUp();
  // const shieldRef = useLettersSlideUp();
  // const onboardingRef = useLettersSlideUp();
  // const flujoRef = useLettersSlideUp();
  // const flujoDescRef = useLettersSlideUp();
  // const akiflowRef = useLettersSlideUp();
  // const hdbRef = useLettersSlideUp();
  // const hdbDescRef = useLettersSlideUp();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      prevent: (node) => {
        // Prevent Lenis on horizontal scroll containers
        return node.closest('[data-horizontal-scroll]') !== null;
      }
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div 
      className={`relative transition-colors duration-300 ${
        isDeveloperMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {isDeveloperMode && (
        <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      )}
      <Header1 isDeveloperMode={isDeveloperMode} setIsDeveloperMode={setIsDeveloperMode} />
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center pt-[120px] sm:pt-[280px] px-4"
      >

        {/* Bg-Pattern - Designer Mode */}
        {!isDeveloperMode && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(#d1d5db 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)',
              zIndex: 0
            }}
          ></div>
        )}

        {/* Bg-Pattern - Developer Mode */}
        {isDeveloperMode && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <Image
              src="/bg-pixels.svg"
              alt="Background pixels"
              width={1200}
              height={800}
              className="opacity-30"
            />
          </div>
        )}

      {/*  Original Toggle Component
      <div className="relative flex items-center gap-6 mb-16" style={{ zIndex: 10 }}>
        <span 
          onClick={() => setIsDeveloperMode(false)}
          className={`text-xl font-bold tracking-wider cursor-pointer ${!isDeveloperMode ? 'text-black' : 'text-gray-500'} ${!isDeveloperMode ? 'underline' : ''}`}
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
          className={`text-xl font-bold tracking-wider cursor-pointer ${isDeveloperMode ? 'text-white' : 'text-gray-500'} ${isDeveloperMode ? 'underline' : ''}`}
        >
          DEVELOPER
        </span>
      </div>

       */}
     
      <main className={`flex flex-col lg:flex-row gap-8 lg:gap-[80px] items-center max-w-[1000px] w-full ${
        isDeveloperMode ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}>
       
       <div className="relative flex-shrink-0">
       <Image
   className="hover:grayscale transition-all duration-300 w-[280px] h-[400px] sm:w-[338px] sm:h-[500px] object-cover"
          src={isDeveloperMode ? "/dev-profile.png" : "/profile.png"}
          alt="Krishna Celupuri Profile Image"
          width={338}
          height={500}
          priority
        />
        
        {/* Circular Text Overlay */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
          <CircularText 
            text="✻ KRISHNA ✻ CELUPURI "
            radius={60}
            fontSize={16}
            animate={true}
            className="text-white opacity-80 sm:radius-80 sm:fontSize-20"
          />
        </div>
        </div>  {/* Image */}



<div className="flex flex-col gap-8 max-w-[600px] w-full text-center lg:text-left">

{/* Heading + Description */}
<h1 className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.3] sm:leading-[1.4] lg:leading-[62px]">
  {isDeveloperMode ? (
    <>FRONT-END DEVELOPER<br/>WHO CAN DESIGN<br/><span className="text-[#8C8C8C]">BASED IN LONDON, UK</span></>
  ) : (
    <>KRISHNA CELUPURI ツ<br/>PRODUCT DESIGNER<br/><span className="text-[#8C8C8C]">BASED IN LONDON, UK</span></>
  )}
</h1>
        <ol className="font-mono list-inside list-[square] text-sm sm:text-base lg:text-lg">
          {isDeveloperMode ? (
            <>
              <li className="mb-2 tracking-[-.01em]">
                I&apos;m a Design Engineer who bridges the gap between design and code.
              </li>
              <li className="tracking-[-.01em]">
                I prototype, build, and ship polished interfaces with React, TypeScript, and Tailwind. My focus is on design systems, motion, and AI-driven workflows that feel as good as they look.
              </li>
            </>
          ) : (
            <>
               <li className="mb-2 tracking-[-.01em]">
                Designer who can code and bring ideas live.
              </li>
              <li className="mb-2 tracking-[-.01em]">
                Senior Product Designer with 8+ years experience
              </li>
           
              <li className="mb-2 tracking-[-.01em]">
                Specialized in scaling ideas from 0→1
              </li>
           
            </>
          )}
        </ol>

{/* Buttons */}
        <div className="flex gap-4 mt-8 items-center flex-col sm:flex-row justify-center lg:justify-start">
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
                  className="invert hover:cursor-pointer"
                />
                GitHub
              </button>
              <button
                onClick={() => window.open("https://www.linkedin.com/in/krishnacelupuri/", "_blank")}
                className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:cursor-pointer hover:bg-[#1a1a1a] hover:border-transparent hover:scale-105 text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              >
                LinkedIn
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => window.open("https://drive.google.com/file/d/1UlQuVnD0AhRsBaA_ATsA2u3BYRaeLsyJ/view?usp=sharing", "_blank")}
                className="uppercase rounded-full border hover:cursor-pointer border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full"
              >
                Download CV
              </button>
              <button
                onClick={() => window.open("https://linkedin.com/in/krishnacelupuri/", "_blank")}
                className="uppercase rounded-full border-1 border-solid border-black dark:border-white/[.145] transition-colors flex items-center justify-center hover:cursor-pointer hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full"
              >
                LinkedIn
              </button>
            </>
          )}
        </div>

</div>



      </main>
      </div>

      {/* Case2 - Trusted by market leaders */}
      {!isDeveloperMode && <Case2Wrapper />}



      {/* NUROLE Works Section */}
      {!isDeveloperMode && (
        <section className="w-full bg-black text-white py-[60px] sm:py-[120px]">
          <div className="max-w-[1000px] mx-auto px-4">
            
           {/* First Row - Header + Hero Image (50/50) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-16">
              {/* Left - Heading & Hero Image */}
              <div>
                <p className="text-white font-semibold text-sm mb-4">{/* 2020 — PRESENT */}</p>
                <h2 className="text-2xl font-bold mb-8 leading-tight">
                  <a href="https://www.nurole.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                    NUROLE.COM
                  </a>
                </h2>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/nr-team2.jpeg"
                    alt="Team Offsite - 2022 | Chester, UK"
                    fill
                    className="object-cover"
                  />
               
                </div>
                <p className="text-whtie text-sm mt-4"> ✻ TEAM OFFSITE - JUL, 2025 | WINCHESTER, UK</p>
              </div>

              {/* Right - Description */}
              <div className="flex flex-col justify-center">
                <p className="text-[#929292] text-sm mb-4">Senior Product Designer</p>
                <p className="text-[#929292] text-md leading-relaxed mb-8">
                As sole designer at Nurole, I built the design foundations, led 0→1 products, and embedded data-driven design practices that drove measurable impact.
                </p>
                <ul className="space-y-3 text-white list-inside list-[square]">
                  <li>Led 0→1 design of Matching App & Hub, cutting ops hours</li>
                  <li>Improved workflow efficiency with data-driven practices</li>
                <li>Created Product lab in code (React, Tailwindcss) for faster prototyping environment in github</li>
            
                </ul>
              </div>
            </div>

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
                  <h3 className="text-2xl font-bold text-white mb-2 leading-[48px]">
                    MATCHING APP: 0→1 INTERNAL APPLICATION TO SOURCE & TARGET CANDIDATES FOR ROLES
                  </h3>
                  <p className="text-sm text-gray-200 mb-6">
                   ✻ 0 to 1 / Data Dashboard / Matching Algorithm
                  </p>
                </div>
              </article>

               {/* Third and Fourth Projects - Side by Side */}
               <div className="flex flex-col lg:flex-row gap-8">
                <article className="w-full lg:w-[50%]">
                  <div className="relative h-[200px] sm:h-[300px]">
                    <Image
                      src="/work-designer/Candidate-Assessment-Internal-View.png.png"
                      alt="GUEST CHECKOUT"
                      fill
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 leading-10">
                    INTERNAL ASSESSMENT VIEW IN CANDIDATE ASSESSMENT TOOLING
                    </h3>
                    <p className="text-sm text-gray-200 mb-4">
                      New Feature / User Research
                    </p>
                  </div>
                </article>

                <article className="w-full lg:w-[50%]">
                  <div className="relative h-[200px] sm:h-[300px]">
                    <Image
                      src="/work-designer/share-on-public-roles.png.png"
                      alt="INTERNAL ASSESSMENT VIEW"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold leading-10 text-white mb-2">
                    GUEST CHECKOUT: ALLOWING NON-MEMBERS TO APPLY FOR ROLES
                    </h3>
                    <p className="text-sm text-gray-200 mb-4">
                      SaaS / Discovery / Data
                    </p>
                  </div>
                </article>
              </div>
          </div>
        </section>
      )}



 {/* PAPERTRAIL Section */}
 {!isDeveloperMode && (
        <section className="w-full bg-white pt-[60px] pb-[60px] sm:pt-[120px] sm:pb-[120px]">
          
          <div className="max-w-[1000px] mx-auto px-4">
      
      


  {/* First Row - Header + Hero Image (50/50) */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-16">
              {/* Left - Heading & Hero Image */}
              <div>
                <p className="text-gray-400 text-sm mb-4">{/* 2020 — 2022 */}</p>
                <h2 className="text-2xl font-bold mb-8 leading-tight">
                  <a href="https://www.papertrail.io/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                    PAPERTRAIL.IO
                  </a>
                </h2>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/papertrial/pp-team.png"
                    alt="Team Offsite - 2022 | Chester, UK"
                    fill
                    className="object-contain h-full"
                  />
                
                </div>
                <p>✻ TEAM OFFSITE - 2022 | CHESTER, UK</p>
              </div>

              {/* Right - Description */}
              <div className="flex flex-col justify-center bg-[#F4F2EC] p-8 rounded-2xl rotate-3 hover:rotate-2 hover:cursor-pointer">
                <p className="text-gray-800 text-sm mb-4">🌱 2nd Product Designer</p>
                <p className="text-gray-800 text-md leading-relaxed mb-8">
                  Led product design and research, working closely with Head of Product to influence feature roadmap and prototype new proposals.
                </p>
                <ul className="space-y-3 text-gray-800 list-inside list-[square]">
                  <li>Redesigned onboarding flow, increasing conversion by 28%</li>
                  <li>Created design system from 0→1</li>
                  <li>Introduced new card layout, resulting in 1.5% more multi-account users</li>
                </ul>
              </div>
            </div>





       

            <div className="space-y-12">
          

              {/* Third and Fourth Projects - Side by Side */}
              <div className="flex flex-col lg:flex-row gap-8">
                <article className="w-full lg:w-[50%]">
                  <div className="relative h-[200px] sm:h-[300px]">
                    <Image
                      src="/papertrial/p-card1.png"
                      alt="GUEST CHECKOUT"
                      fill
                      className="object-cover rounded-md w-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 leading-10">
  SHIELD DESIGN SYSTEM ( 0 to 1) :
  <br/> UNIFIED DESIGN LANGUAGE
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                    0 to 1 / DESIGN SYSTEM / DOCUMENTATION
                    </p>
                  </div>
                </article>

                <article className="w-full lg:w-[50%]">
                  <div className="relative h-[200px] sm:h-[300px]">
                    <Image
                      src="/papertrial/p-card2.png"
                      alt="INTERNAL ASSESSMENT VIEW"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold leading-10 text-black mb-2">
                   CUSTOMER APP: ONBOARDING REDESIGN.
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                    REDESIGN /  SAAS / INSPECTION MANAGEMENT TOOL
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      )}







      {/* FLUJO Section */}
      {!isDeveloperMode && (
        <section className="w-full bg-[#F4F2EC] pt-[60px] pb-[30px] sm:pt-[120px] sm:pb-[60px]">
          <div className="max-w-[1000px] mx-auto px-4">


         


         {/* First Row - Header + Hero Image (50/50) */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8">
              {/* Left - Heading & Hero Image */}
              <div>
                <p className="text-gray-400 text-sm mb-4">{/* 2020 — PRESENT */}</p>
                <p className="text-purple-600 text-sm mb-4">https://flujo.io/</p>
                <h2 className="text-2xl font-bold mb-8 leading-tight">
                  FLUJO.IO
                </h2>
             
              </div>

              {/* Right - Description */}
              <div className="flex flex-col justify-center">
                <p className="text-gray-800 text-sm mb-4">🌱 FOUNDING DESIGNER</p>
                <p className="text-gray-800 text-md leading-relaxed mb-8">
                Founding designer driving Saas product design,
creating comprehensive design system. Designed web
and mobile experiences, collaborating closely with
developers.
                </p>
              
              </div>
            </div>


     {/* IMAGE */}
            <div className="space-y-12">
              {/* Second Project - Matching App */}
              <article>
                <div className="relative h-[576px]">
                  <Image
                    src="/flujo-card.png"
                    alt="MATCHING APP"
                    fill
                    className="object-cover rounded-[16px]"
                  />
                </div>
                <div className="p-8">
                  
                <p className="text-sm text-gray-700 mb-2">
                0 to 1 /  SAAS / COMPLEX DATA DESIGN
                  </p>
                  <h3 className="text-xl font-bold uppercase text-black mb-2 leading-[40px]">
                  FLUJO IS A COMMUNICATION & COLLABORATION SUITE FOR TEAMS. WITH NATIVELY BUILT KEY BUSINESS ESSENTIALS.
                  </h3>
                  
                </div>
              </article>

            
            </div>

   {/* AKIFLOW */}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 pt-12 border-t-2 border-[#DFDCD6]">
              {/* Left - Heading & Hero Image */}
              <div>
                <p className="text-purple-600 text-sm mb-4">https://akiflow.com/</p>
                <h2 className="text-2xl font-bold mb-8 leading-tight flex items-center gap-3">
                AKIFLOW. (YC-S20) <span><Image src="/yc.png" alt="Y Combinator" width={40} height={40} className="rounded-md" /></span>
                </h2>
             
              </div>

              {/* Right - Description */}
              <div className="flex flex-col justify-center">
                <p className="text-gray-800 text-sm mb-4"> PRODUCT DESIGNER</p>
                <p className="text-gray-800 text-md leading-relaxed mb-8">
                I WAS WORKING WITH AKIFLOW DURING MY MASTERS IN
MILAN, ITALY. I WAS CLOSELY WORKING WITH FOUNDING
DESIGNER IN CREATING & MAINTAINING DESIGN COMPONENTS
& ASSETS. DURING MY TIME I WORKING ON THE SETTINGS &
ACCOUNT MANAGEMENT FEATURE SETS.
                </p>
              
              </div>
            </div>


               {/* HDB*/}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 pt-12 border-t-2 border-[#DFDCD6]">
              {/* Left - Heading & Hero Image */}
              <div>
                <p className="text-gray-400 text-sm mb-4">{/* 2020 - ( 6 Months ) _ */}</p>
                <h2 className="text-2xl font-bold mb-8 leading-[40px]">
                <a href="https://tinyurl.com/4yhe7cbp" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                  HDB ON THE GO <br/>[5M+ DOWNLOADS]
                </a>
                </h2>
             
              </div>

              {/* Right - Description */}
              <div className="flex flex-col justify-center">
                <p className="text-gray-800 text-sm mb-8">DESIGN CONSULTANT</p>
                <p className="text-gray-800 text-md leading-relaxed mb-8">
                HDB FINANCIAL SERVICES WAS WORKING WITH A DESIGN
AGENCY IN INDIA, AND I WAS LEADING THE DESIGN FOR
THAT PROJECT ALONG WITH 1 OTHER JUNIOR DESIGNER. I
WAS INVOLVED IN CONCEPT TO BUILD STAGE OF MOBILE APP
DEVELOPMENT. 
                </p>
              
              </div>
            </div>

              {/* IMAGE */}
              <div className="space-y-12">
              {/* Second Project - Matching App */}
              <article>
                <div className="relative h-[576px]">
                  <Image
                    src="/hdb-card.webp"
                    alt="MATCHING APP"
                    fill
                    className="object-cover rounded-[16px]"
                  />
                </div>
                <div className="p-8">
                  
                <p className="text-sm text-gray-700 mb-4">
                0 to 1 /  FINTECH / BANKING
                  </p>
                  <h3 className="text-xl font-bold uppercase text-black mb-2 leading-[40px]">
                  HDB FINANCIAL SERVICES IS A RBI REGISTERED INDIA&apos;S MOST TRUSTED LOAN PLATFORM FOR MORE THAN 17 YEARS WITH OVER 8 MILLION USERS AND 1700+ BRANCHES.
                  </h3>

              
                  
                </div>
              </article>

            
            </div>


            
          </div>
        </section>
      )}



  

      {/* Developer Timeline Section */}
      {isDeveloperMode && (
        <DeveloperTimeline />
      )}

      {/* Testimonials Section 
      {!isDeveloperMode && <TestimonialsFeature7 />} */}

   

      {/* Mouse Image Trail Section */}
      {!isDeveloperMode && <MouseImageTrail />} 
         {/* Sketching Section */}
         {!isDeveloperMode && (
      <section className="w-full bg-[#F4F2EC] py-12 sm:py-24">
        <div className="max-w-[1000px] mx-auto text-left px-4">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">
          
            🎨🌿<br/>
            ✐ SPOT ON SKETCHES!<br/>
            <span className="text-sm font-normal lowercase">ON THE SPOT</span>
          </h2>
          <p className="text-gray-600 text-md max-w-2xl mx-auto mb-16 leading-relaxed">
            These sketches were created in parks<br/>
            and in front of monuments, capturing<br/>
            moments of calm and inspiration.<br/>
            Each piece is a spontaneous<br/>
            reflection of the world as I saw it,<br/>
            drawn on the spot.
          </p>
        </div>
        
        <HorizontalGallery
          images={[
            {
              src: "/sketches/sketch01.png",
              alt: "Park Sketch 01",
              caption: "PARK SKETCHING"
            },
            {
              src: "/sketches/sketch02.png", 
              alt: "Monument Sketch 02",
              caption: "MONUMENT STUDY"
            },
            {
              src: "/sketches/sketch03.png",
              alt: "Nature Sketch 03", 
              caption: "NATURE STUDY"
            },
            {
              src: "/sketches/sketch04.png",
              alt: "Urban Sketch 04",
              caption: "URBAN SKETCHING"
            },
            {
              src: "/sketches/sketch05.png",
              alt: "Outdoor Sketch 05",
              caption: "OUTDOOR STUDY"
            },
            {
              src: "/sketches/sketch06.png",
              alt: "Landscape Sketch 06", 
              caption: "LANDSCAPE"
            },
            {
              src: "/sketches/sketch07.png",
              alt: "Street Sketch 07",
              caption: "STREET SCENE"
            }
          ]}
        />
      </section>
      )}

      {/* Footer */}
      <Footer1 />
    </div>
  );
}
