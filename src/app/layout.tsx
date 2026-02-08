import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";
import ScrollIndicator from "@/components/ScrollIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KRISHNA CELUPURI | DESIGN ENGINEER, UK",
  description: "Portfolio of Krishna Celupuri – a Design Engineer in the UK bridging design and code through UI prototyping, creative coding, and product design.",
  keywords: [
    "Design Engineer",
    "Product Designer", 
    "React Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Krishna Celupuri",
    "London",
    "UK",
    "Portfolio",
    "Next.js",
    "TailwindCSS",
    "GSAP",
    "Framer Motion"
  ],
  authors: [{ name: "Krishna Celupuri" }],
  creator: "Krishna Celupuri",
  metadataBase: new URL("https://krishnacelupuri.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KRISHNA CELUPURI | DESIGN ENGINEER, UK",
    description: "Portfolio of Krishna Celupuri – a Design Engineer in the UK bridging design and code through UI prototyping, creative coding, and product design.",
    url: "https://krishnacelupuri.com",
    siteName: "Krishna Celupuri Portfolio",
    images: [
      {
        url: "/krishnacelupuri.com - opengraph.png",
        width: 1200,
        height: 630,
        alt: "Krishna Celupuri - Design Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KRISHNA CELUPURI | DESIGN ENGINEER, UK",
    description: "Portfolio of Krishna Celupuri – a Design Engineer in the UK bridging design and code through UI prototyping, creative coding, and product design.",
    images: ["/krishnacelupuri.com - opengraph.png"],
    creator: "@krishnacelupuri",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", type: "image/png" }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Boldonse&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/t8jdwpko2d";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script");
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} antialiased`}
      >
        <ScrollIndicator />
        {children}
      </body>
    </html>
  );
}
