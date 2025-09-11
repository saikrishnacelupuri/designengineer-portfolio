"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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

export const TestimonialsFeature7 = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000); // Slower scroll for reading testimonials

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto max-w-[1000px]">
        <div className="w-full">
            <Carousel 
              setApi={setApi} 
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {Array.from({ length: 15 }).map((_, index) => {
                  const testimonial = testimonials[index % testimonials.length];
                  return (
                    <CarouselItem
                      className="basis-4/5 md:basis-3/5 lg:basis-2/5"
                      key={index}
                    >
                      <div className="pr-1">
                        <div className="bg-[#F4F2EC] h-[400px] w-full rounded-md p-6 flex justify-between flex-col">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {testimonial.testimonial}
                            </p>
                            <h3 className="text-lg tracking-normal mt-4 font-semibold mb-1">{testimonial.name}</h3>
                            <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
        </div>
      </div>
    </div>
  );
};