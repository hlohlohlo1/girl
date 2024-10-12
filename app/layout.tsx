import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
        <body
           className={`${GeistSans.variable} ${GeistMono.variable} font-sans no-scrollbar dark`}
        >
           {children}
        </body>
     </html>
  );
}


