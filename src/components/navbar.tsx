"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 px-8 py-4 text-lg z-50 transition-transform duration-300 bg-white border-b-2 border-[#DC143C] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="flex justify-between items-center">
        <li className="flex">
          <Link href="/" className="hover:rotate-6 hover:underline">
            hanu
          </Link>
        </li>
        <li className="flex gap-4">
          <Link href="/#about" className="hover:rotate-6 hover:underline">
            about
          </Link>
          <Link href="/#projects" className="hover:rotate-6 hover:underline">
            projects
          </Link>
          <Link href="/#blog" className="hover:rotate-6 hover:underline">
            blog?
          </Link>
        </li>
      </ul>
    </nav>
  );
}
