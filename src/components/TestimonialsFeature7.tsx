"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    name: "MELANIE DUROUX",
    title: "Senior Product Designer @ Autogen AI",
    image: "/testimonials/md.jpeg",
    testimonial: "KRISHNA, I AM SO IMPRESSED WITH YOUR EVER GROWING PASSION IN ANYTHING THAT COULD HELP OUR FUNCTION BE MORE EFFICIENT AND FUTURE PROOF. YOUR INCREDIBLE WORK ON MIXPANEL IS INSPIRING AND WILL BE SO ADDITIVE TO EVERYTHING WE DO AND NEED TO KNOW ABOUT OUR TOOLINGS.",
    featured: true
  },
  {
    id: 2,
    name: "CHRIS TANNER",
    title: "Head of Product @ Papertrail.io",
    image: "/testimonials/ct.jpeg",
    testimonial: "KRISHNA'S CONTRIBUTION HAS MADE A HUGE DIFFERENCE TO OUR TEAM - IT IS SATISFYING IMPLEMENTING HIS VISION AND SEEING THE RESULTS, AND GETTING INSTANT HELP RESOLVING UI QUESTIONS."
  },
  {
    id: 3,
    name: "MARY JAVIER",
    title: "Operations Manager @ Nurole",
    image: "/testimonials/mj.jpeg",
    testimonial: "KRISHNA ALWAYS TAKES EXTRA EFFORT TO COMMUNICATE WITH OPERATIONS WHEN DESIGNING ANYTHING FOR THE PLATFORM, OFTEN ASKING FOR OUR INPUT."
  },
  {
    id: 4,
    name: "ADAM SELBY",
    title: "Senior Product Manager @ Vel-AI",
    image: "/testimonials/as.jpeg",
    testimonial: "WHILST \"ON LOAN\" TO THE GROWTH SQUAD, KRISHNA MADE A SIGNIFICANT CONTRIBUTION TO OUR 'OPEN PROFILE' DISCOVERY. I WAS THOROUGHLY IMPRESSED WITH HIS ABILITY TO THINK OUTSIDE THE BOX."
  },
  {
    id: 5,
    name: "AMIYA NARULA",
    title: "Product Marketing @ BlackRock",
    image: "/testimonials/an.jpeg",
    testimonial: "I'VE BEEN WORKING WITH KRISHNA ON THE \"I'M INTERESTED\" PROTOTYPING PROJECT AND IT'S BEEN ABSOLUTELY FANTASTIC WORKING TOGETHER! HE'S EXTREMELY RELIABLE."
  }
];

export const TestimonialsFeature7 = () => (
  <div className="w-full py-20 lg:py-40 bg-white">
    <div className="container mx-auto max-w-[1000px]">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>✻ TESTIMONIALS</Badge>
          </div>
          <div className="pb-[80px]">               
            <p className="text-gray-600 text-md mb-4">                  
              {/* 2022 - PRESENT */}               
              </p>               
              <h2 className="text-4xl font-bold mb-8 uppercase leading-16">WORDS, KUDOS & MESSAGES!!            
                </h2>               
          <p className="text-gray-600 text-md max-w-3xl">                 
            Selected projects showcasing design solutions for startups and scale-ups                  
            cross different industries and challenges. Each project represents a unique                  
            approach to solving complex user experience problems.               
            </p>             
            </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {/* Featured testimonial - spans 2 columns and 2 rows */}
          <div className="bg-muted h-full w-full rounded-md aspect-square p-6 flex justify-between flex-col lg:col-span-2 lg:row-span-2">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight font-bold mb-2">{testimonials[0].name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{testimonials[0].title}</p>
              <p className="text-muted-foreground max-w-md text-base leading-relaxed">
                {testimonials[0].testimonial}
              </p>
            </div>
          </div>

          {/* Regular testimonials */}
          {testimonials.slice(1).map((testimonial) => (
            <div key={testimonial.id} className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg tracking-tight font-bold mb-1">{testimonial.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{testimonial.title}</p>
                <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                  {testimonial.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);