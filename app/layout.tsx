import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google'


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const outfit = Outfit(
  {
    subsets: ['latin', 'latin-ext'],
    display: 'auto'
  }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
     
    </html>
  );
}
