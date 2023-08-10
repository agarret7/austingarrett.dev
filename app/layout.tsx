import React from "react";  
import type { Metadata } from 'next';

import Nav from "@/components/nav";
import Footer from "@/components/footer";

import 'katex/dist/katex.min.css';
import './global.css';


const CV_URL = "https://austingarrett-web.s3.amazonaws.com/Garrett_Resume_01a88211ec.pdf"

export const metadata: Metadata = {
  title: 'Austin Garrett',
  description: 'Personal website of Austin Garrett',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Nav navLinks={[
          {href: "/", name: "HOME"},
          {href: "/blog", name: "BLOG"},
          {href: CV_URL, name: "CV"}
        ]}/>
        <div className="m-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}