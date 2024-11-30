import type { Metadata } from "next";
import "./globals.css";
import {Roboto_Slab} from 'next/font/google'


const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  weight: ["400", "700"],
  fallback: ["sans-serif"],
  subsets: ["latin"]
}) 



export const metadata: Metadata = {
  title: "Vishal Suryavanshi - Full Stack Web Developer Portfolio",
  description: "Vishal Suryavanshi is a skilled Full-Stack MERN (MongoDB, Express.js, React (Next.js), Node.js) Developer specializing in creating dynamic and user-friendly websites. With expertise in modern tools and technologies like Tailwind CSS, Vanilla CSS, JavaScript, and SQL databases, he has developed a range of impressive projects showcased in this portfolio.",
  keywords: [
    "Vishal Suryavanshi",
    "Full Stack Developer",
    "MERN Stack",
    "Web Development",
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "Tailwind CSS",
    "JavaScript",
    "SQL",
    "Portfolio"
  ],
  authors: [
    {
      name: "Vishal Suryavanshi",
      url: "https://example.com",
    }
  ],
  openGraph: {
    type: 'website',
    url: 'https://example.com',
    title: 'Vishal Suryavanshi - Full Stack Web Developer Portfolio',
    description: 'Explore the portfolio of Vishal Suryavanshi, a skilled Full-Stack MERN Developer with a passion for creating dynamic and user-friendly websites.',
    // images: [
    //   {
    //     url: 'https://example.com/og-image.jpg',
    //     alt: 'Vishal Suryavanshi Portfolio',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishal Suryavanshi - Full Stack Web Developer Portfolio',
    description: 'Explore the portfolio of Vishal Suryavanshi, a skilled Full-Stack MERN Developer with a passion for creating dynamic and user-friendly websites.',
    // images: ['https://example.com/twitter-image.jpg'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} antialiased grid`}
      >
        {children}
      </body>
    </html>
  );
}
