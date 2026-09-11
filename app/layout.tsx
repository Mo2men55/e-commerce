import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Nav from "./_component/NavBar/Nav";
import Footer from "./_component/Footer/Footer";

const Exofont = Exo({
  variable: "--font-Exo",
  weight:['100','400' ,'700']
});

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "A simple e-commerce application built with Next.js 13 and TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${Exofont.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <Nav />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
