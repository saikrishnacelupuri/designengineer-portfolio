"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FloatingMenuBar from "../../../components/FloatingMenuBar";

export default function DesignWorksPage() {
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);
  const caseStudies = [
    {
      id: 1,
      title: "NHROLE - HR & BOARD SEARCH PLATFORM",
      description: "UX PROJECT DESIGNED AS UX/UI DESIGN FOR A STARTUP I LED TO SUCCESS WITH THOUGHTFUL DESIGN SOLUTIONS & SMART UX. DESIGNED THE PLATFORM FROM GROUND UP & GUIDED ON UX RESEARCH & INSIGHTS.",
      image: "/work-designer/img_3769-2.png.png",
      category: "STARTUP • UX DESIGN • UI"
    },
    {
      id: 2,
      title: "MATCHING APP",
      subtitle: "MATCHUP APP [2.0]: INTERNAL APPLICATION TO EFFICIENTLY SOURCE & TARGET RECRUITERS FOR ROLES",
      description: "BUILT PROTOTYPE • ITERATED & DESIGNED",
      image: "/work-designer/matching-placeholder.webp.png",
      category: "UX APP STUDY"
    },
    {
      id: 3,
      title: "GUEST CHECKOUT",
      subtitle: "ALIGNING FOR NON-REGISTERED APP USERS & SMART APPLICATIONS",
      description: "& VIEW HERE",
      image: "/work-designer/Candidate-Assessment-Internal-View.png.png",
      category: "GUEST CHECKOUT • ALIGNING FOR NON-REGISTERED APP USERS"
    },
    {
      id: 4,
      title: "INTERNAL ASSESSMENT VIEW IN CANDIDATE ASSESSMENT TOOLS",
      image: "/work-designer/share-on-public-roles.png.png",
      category: "INTERNAL ASSESSMENT"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header with Back Navigation */}
      <header className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8"
          >
            ← Back to Portfolio
          </Link>
          
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-6xl font-bold mb-4">WORKS</h1>
            <p className="text-gray-600 text-xl max-w-3xl">
              Selected projects showcasing design solutions for startups and scale-ups 
              across different industries and challenges. Each project represents a unique 
              approach to solving complex user experience problems.
            </p>
          </div>
        </div>
      </header>

      {/* Case Studies Grid */}
      <main className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <article key={study.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-lg">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-medium">
                      View Case Study →
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="text-sm text-gray-600 uppercase tracking-wider font-medium">
                    {study.category}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-black leading-tight group-hover:text-gray-600 transition-colors">
                    {study.title}
                  </h2>
                  
                  {study.subtitle && (
                    <h3 className="text-lg text-gray-700 font-medium leading-relaxed">
                      {study.subtitle}
                    </h3>
                  )}
                  
                  {study.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {study.description}
                    </p>
                  )}

                  {/* Tags or additional info could go here */}
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-sm text-gray-600">
                      <span>Read more</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <section className="mt-24 text-center border-t border-gray-200 pt-16">
            <h3 className="text-3xl font-bold mb-6">Ready to work together?</h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              I'm always interested in new challenges and opportunities to create 
              meaningful design solutions. Let's discuss your project.
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
      </main>

      {/* Floating Menu Bar */}
      <FloatingMenuBar 
        isDeveloperMode={isDeveloperMode}
        setIsDeveloperMode={setIsDeveloperMode}
      />
    </div>
  );
}