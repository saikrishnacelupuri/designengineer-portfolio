"use client";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "MELANIE DUROUX",
    title: "Senior Product Designer @ Autogen AI",
    image: "/testimonials/md.jpeg",
    testimonial: "KRISHNA, I AM SO IMPRESSED WITH YOUR EVER GROWING PASSION IN ANYTHING THAT COULD HELP OUR FUNCTION BE MORE EFFICIENT AND FUTURE PROOF. YOUR INCREDIBLE WORK ON MIXPANEL IS INSPIRING AND WILL BE SO ADDITIVE TO EVERYTHING WE DO AND NEED TO KNOW ABOUT OUR TOOLINGS. THANK YOU SO MUCH AND PLEASE TO KEEP UP BEING SO BRILLIANT, IT IS TRULY INSPIRING. YOU ARE THE BEST TEAM MEMBER POSSIBLE WE ARE SO LUCKY TO HAVE YOU!"
  },
  {
    id: 2,
    name: "CHRIS TANNER",
    title: "Head of Product @ Papertrail.io",
    image: "/testimonials/ct.jpeg",
    testimonial: "KRISHNA'S CONTRIBUTION HAS MADE A HUGE DIFFERENCE TO OUR TEAM - IT IS SATISFYING IMPLEMENTING HIS VISION AND SEEING THE RESULTS, AND GETTING INSTANT HELP RESOLVING UI QUESTIONS. YOU CAN SEE A BIG DIFFERENCE IN THE PRODUCT TO BEFORE WE HAD A DESIGNER"
  },
  {
    id: 3,
    name: "MARY JAVIER",
    title: "Operations Manager @ Nurole",
    image: "/testimonials/mj.jpeg",
    testimonial: "KRISHNA ALWAYS TAKES EXTRA EFFORT TO COMMUNICATE WITH OPERATIONS WHEN DESIGNING ANYTHING FOR THE PLATFORM, OFTEN ASKING FOR OUR INPUT. HE TOOK THE TIME TO COMMUNICATE CHANGES IN A SIMPLE AND EASY TO UNDERSTAND WAY. WE REALLY APPRECIATE THIS INCREDIBLY USEFUL OPEN COMMUNICATION, AND I KNOW IT TAKES EXTRA EFFORT! KRISHNA ALWAYS HAS A GREAT ATTITUDE AND IS ALWAYS SUPER HELPFUL. THANK YOU SO MUCH KRISHNA!"
  },
  {
    id: 4,
    name: "ADAM SELBY",
    title: "Senior Product Manager @ Vel-AI",
    image: "/testimonials/as.jpeg",
    testimonial: "WHILST \"ON LOAN\" TO THE GROWTH SQUAD, KRISHNA MADE A SIGNIFICANT CONTRIBUTION TO OUR 'OPEN PROFILE' DISCOVERY. I WAS THOROUGHLY IMPRESSED WITH HIS ABILITY TO THINK OUTSIDE THE BOX AND PROVIDE CREATIVE SOLUTIONS TO THE CHALLENGES WE FACED. HIS INNOVATIVE APPROACH GREATLY ENHANCED OUR OVERALL PROGRESS."
  },
  {
    id: 5,
    name: "AMIYA NARULA",
    title: "Product Marketing @ BlackRock",
    image: "/testimonials/an.jpeg",
    testimonial: "I'VE BEEN WORKING WITH KRISHNA ON THE \"I'M INTERESTED\" PROTOTYPING PROJECT AND IT'S BEEN ABSOLUTELY FANTASTIC WORKING TOGETHER! HE'S EXTREMELY RELIABLE, HAS GONE OUT OF HIS WAY TO UNDERSTAND WHAT WE'RE TRYING TO DO, AND CREATED THE PROTOTYPE IN FIGMA IN RECORD TIME! LOOKING FORWARD TO SEEING WHERE THIS PROJECT GOES!!"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            WORDS, KUDOS & MESSAGES!!
          </h2>
          <p className="text-gray-500 text-sm uppercase tracking-wide">
            {/* TESTIMONIALS */}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F4F2EC] rounded-2xl p-8 flex flex-col justify-between min-h-[400px]"
            >
              {/* Testimonial Text */}
              <p className="text-black text-sm leading-relaxed mb-8 font-mono">
                {testimonial.testimonial}
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-black tracking-wider text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}