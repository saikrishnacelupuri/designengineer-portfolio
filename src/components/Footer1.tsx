import Link from "next/link";

export const Footer1 = () => {
  const navigationItems = [
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
      ],
    },
  ];

  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-[1000px] mx-auto py-16 lg:py-24 px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                KC ツ
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Design Engineer, based in London, UK.
              </p>
            </div>
            <div className="flex gap-12 flex-row flex-wrap">
              <div className="flex flex-col text-sm leading-relaxed tracking-tight text-background/75">
                <p>London, UK 🇬🇧</p>
              </div>
              <div className="flex flex-col text-sm leading-relaxed tracking-tight text-background/75">
                <p>MADE WITH NEXT JS & TAILWINDCSS</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start lg:justify-end">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-3 flex-col items-start"
              >
                <div className="flex flex-col gap-3">
                  <p className="text-lg font-medium">{item.title}</p>
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-background/75 hover:text-background transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};