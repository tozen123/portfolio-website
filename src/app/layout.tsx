import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Best Portfolio",
  description: "Best Portfolio Website by Christian Serwelas",

  openGraph: {
    title: "Best Portfolio",
    description: "Portfolio Example by Christian Serwelas built with NextJs",
    url: "https://epic-portfolio-website--beta.vercel.app/",
    siteName: "My Portfolio",
    images: [
      {
        url: "https://epic-portfolio-website--beta.vercel.app/images/profile.png", 
        width: 1200,
        height: 630,
        alt: "Portfolio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
