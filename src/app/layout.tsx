import type { Metadata, Viewport } from "next";
import "./styles/globals.css";

import Navbar from "@/components/navbar";
import LoadingSpinner from "@/components/LoadingSpinner";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "hanu - Designer & Developer",
  description: "MIT '25 - B.S. in Art & Design. Obsessed with computation, product, and interaction design.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="cursor-none">
        <CustomCursor />
        <LoadingSpinner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
