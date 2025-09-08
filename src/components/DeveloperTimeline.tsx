"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Globe, Flask, BookOpen, Folder } from "@phosphor-icons/react";

const projects = [
  {
    id: 1,
    title: "AISHARE",
    description: "A web platform showcasing AI-related resources and experiments, built to demonstrate polished front-end UI and smooth interactions.",
    tags: ["Next.js", "React", "TailwindCSS", "Vercel"],
    date: "2024",
    type: "project",
    image: "/work-designer/Works section design.png",
    buttonText: "VIEW WEBSITE",
    buttonUrl: "https://www.aishare.website/"
  },
  {
    id: 2,
    title: "TIER2 SPONSORS UK", 
    description: "A web app that helps users explore UK Tier 2 visa sponsor companies. Focused on accessibility, performance, and data presentation.",
    tags: ["Next.js", "React", "TailwindCSS", "Vercel"],
    date: "2024",
    type: "project",
    image: "/OG_tier2.png",
    buttonText: "VIEW APPLICATION",
    buttonUrl: "https://tier2-sponsors-uk.vercel.app/"
  },
  {
    id: 3,
    title: "ART & FILTERS EXPERIMENTS",
    description: "A personal playground for design and engineering experiments — animations, GSAP effects, interaction prototypes, and creative coding explorations.",
    tags: ["Next.js", "React", "GSAP", "Framer Motion", "TailwindCSS"],
    date: "2023", 
    type: "experiment",
    image: "/art-experiments.gif",
    buttonText: "VIEW EXPERIMENTS",
    buttonUrl: "https://krishna-experiments.vercel.app/"
  },
  {
    id: 4,
    title: " NDS: NUROLE DESIGN SYSTEM",
    description: "A scalable React + Tailwind design system with Storybook, built for component reusability, consistent UI, and rapid prototyping.",
    tags: ["React", "TailwindCSS", "Storybook", "Component Libraries"],
    date: "2023",
    type: "system",
    image: "/NDS-demo.gif",
    buttonText: "CONFIDENTIAL",
    buttonUrl: ""
  
  
  },
  {
    id: 5,
    title: "DESIGN ENGINEER PORTFOLIO (KRISHNCELUPURI.COM)",
    description: "A living portfolio site that blends design and engineering — custom animations, UI polish, and interactive elements that highlight hybrid skills.",
    tags: ["Next.js", "React", "TailwindCSS", "GSAP", "Framer Motion", "Vercel"],
    date: "2024",
    type: "project",
    image: "/krishnacelupuri.com - opengraph.png",
    buttonText: "VIEW SOURCE CODE",
    buttonUrl: "https://github.com/saikrishnacelupuri/designengineer-portfolio"
  }
];

const ProjectIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'project':
      return <Globe size={16} weight="regular" />;
    case 'experiment':
      return <Flask size={16} weight="regular" />;
    case 'system':
      return <BookOpen size={16} weight="regular" />;
    default:
      return <Folder size={16} weight="regular" />;
  }
};

export default function DeveloperTimeline() {
  useEffect(() => {
    function updateSvgHeight() {
      const section = document.getElementById('dev-timeline-section');
      const svg = document.getElementById('dev-timeline-svg');

      if (section && svg) {
        const sectionHeight = section.offsetHeight;
        svg.setAttribute('height', `${sectionHeight}px`);
      }
    }

    updateSvgHeight();
    window.addEventListener('resize', updateSvgHeight);

    const observer = new ResizeObserver(updateSvgHeight);
    const section = document.getElementById('dev-timeline-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      window.removeEventListener('resize', updateSvgHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-[#131313] text-white pt-[120px] pb-[120px] relative mt-[160px]">
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: 'url(/noise.webp)',
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      />
      <div className="max-w-[1000px] mx-auto relative z-10">
        {/* Header */}
        <div className="pb-[80px]">
          <h2 className="text-4xl font-bold mb-8 leading-tight">
          SIDE PROJECTS, PROTOTYPES & PLAY
          </h2>
          <p className="text-gray-300 text-md max-w-3xl">
            Selected development projects showcasing full-stack solutions, design systems, 
            and interactive experiences. Each project represents a unique approach to 
            solving complex technical and design challenges.
          </p>
        </div>

        {/* Timeline */}
        <section id="dev-timeline-section" className="relative flex flex-col gap-8 opacity-0 translate-y-2 animate-[fadeInUp_0.3s_ease-out_0.7s_forwards]">
          {/* Vertical dotted line */}
          <div className="absolute top-0 left-5 h-full z-0" style={{maskImage: 'linear-gradient(to bottom, black calc(100% - 40%), transparent)'}}>
            <svg id="dev-timeline-svg" width="2" height="100%" className="text-gray-500">
              <defs>
                <pattern id="dev-dotted-line" patternUnits="userSpaceOnUse" x="0" y="0" width="2" height="8">
                  <line
                    x1="1"
                    y1="0"
                    x2="1" 
                    y2="4"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeDasharray="2 4"
                  />
                </pattern>
              </defs>
              <rect
                width="2"
                height="100%"
                fill="url(#dev-dotted-line)"
              />
            </svg>
          </div>

          {/* Projects */}
          {projects.map((project, index) => (
            <div key={project.id} id={`dev-post-${index + 1}`} className="relative z-10 group flex gap-2 md:gap-6">
              {/* Icon rail */}
              <aside className="w-10 h-10 bg-black border-2 border-gray-600 rounded-full grid place-items-center text-gray-400 relative z-10">
                <ProjectIcon type={project.type} />
              </aside>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-4 pt-3">
                {/* Project info section */}
                <div className="flex flex-col gap-4">
                  <small className="text-xs font-mono uppercase text-gray-400">
                    {project.type.toUpperCase()} • {project.date}
                  </small>
                  
                  {/* Heading */}
                  <h2 className="text-base uppercase font-medium text-white">
                    {project.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-300 text-balance leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <button
                    onClick={() => window.open(project.buttonUrl, "_blank")}
                    className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent text-white font-medium text-sm h-10 px-5 w-fit"
                  >
                    {project.buttonText}
                  </button>
                </div>

                {/* Project image/media */}
                {project.id === 1 ? (
                  <div className="relative h-[640px] rounded-xl overflow-hidden bg-gray-800/50 border border-gray-800">
                    <iframe
                      src="https://www.aishare.website/"
                      className="w-full h-full border-0"
                      style={{ objectFit: 'contain' }}
                      title="AIshare Website"
                      loading="lazy"
                    />
                  </div>
                ) : project.id === 2 ? (
                  <div className="relative h-[640px] rounded-xl overflow-hidden bg-gray-800/50 border border-gray-800">
                    <iframe
                      src="https://tier2-sponsors-uk.vercel.app/"
                      className="w-full h-full border-0"
                      style={{ objectFit: 'contain' }}
                      title="Tier2 Sponsors UK Website"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="relative h-[640px] rounded-xl overflow-hidden bg-gray-800/50 border border-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-opacity duration-300"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}