import Link from "next/link";

export const Footer1 = () => {
  const navigationItems = [
    {
      title: "Work",
      items: [
        {
          title: "Design Projects",
          href: "#design-work",
        },
        {
          title: "Development",
          href: "#dev-work",
        },
        {
          title: "Case Studies",
          href: "#case-studies",
        },
        {
          title: "Sketches",
          href: "#sketches",
        },
      ],
    },
    {
      title: "About",
      items: [
        {
          title: "Experience",
          href: "#experience",
        },
        {
          title: "Skills",
          href: "#skills",
        },
        {
          title: "Testimonials",
          href: "#testimonials",
        },
        {
          title: "Contact",
          href: "#contact",
        },
      ],
    },
    {
      title: "Connect",
      items: [
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/krishnacelupuri/",
        },
        {
          title: "GitHub",
          href: "https://github.com/saikrishnacelupuri",
        },
        {
          title: "Resume",
          href: "https://drive.google.com/file/d/1UlQuVnD0AhRsBaA_ATsA2u3BYRaeLsyJ/view?usp=sharing",
        },
        {
          title: "Email",
          href: "mailto:krishna@example.com",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-30 lg:py-40 bg-foreground text-background">
      <div className="container mx-auto max-w-[1000px]">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                KC ツ
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Design Engineer, based in London, UK.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>London, UK 🇬🇧</p>
             
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/terms">MADE WITH NEXT JS & TAILWINDCSS</Link>
            
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-md">{item.title}</p>
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center hover:text-background transition-colors"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};