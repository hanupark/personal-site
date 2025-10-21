"use client";

import FloatingImage from "@/components/FloatingBag";
import ProjectCard from "@/components/ProjectCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if page is already loaded (no spinner visible)
    if (document.readyState === 'complete') {
      setIsLoaded(true);
    }

    // Listen for loading complete event from spinner
    const handleLoadingComplete = () => setIsLoaded(true);
    window.addEventListener('loadingComplete', handleLoadingComplete);
    return () => window.removeEventListener('loadingComplete', handleLoadingComplete);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const projects = [
    {
      title: "CollagePix",
      subtitle: "Interactive Collage-Making Camera",
      thumbnail: "/images/project1/thumbnail.png",
      href: "/projects/collagepix",
    },
    {
      title: "Pix 4.0",
      subtitle: "Analog Photoshopping Camera",
      thumbnail: "/images/project2/thumbnail.png",
      href: "/projects/pix4",
    },
    {
      title: "hAhu Chair",
      subtitle: "Typography Inspired Chair Design",
      thumbnail: "/images/chair/thumb.png",
      href: "/projects/hahu-chair",
    },
    {
      title: "Guest House",
      subtitle: "Gropius Tiny Home",
      thumbnail: "/images/tiny-home/section.png",
      href: "/projects/tiny-home",
    },
    {
      title: "Marketing Head",
      subtitle: "HackMIT 2022",
      thumbnail: "/images/hackmit/logo.png",
      href: "/projects/hack-mit",
    },
    {
      title: "Growth Engineering Intern",
      subtitle: "Nowadays AI",
      thumbnail: "/images/nowadays/logo.png",
      href: "/projects/nowadays",
    },
  ];

  useEffect(() => {
    // Check hash on mount and open corresponding section
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ["about", "projects", "blog"].includes(hash)) {
        setOpenSection(hash);
      }
    };

    // Run on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Also listen for clicks on hash links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="/#"]');
      if (link) {
        const href = link.getAttribute("href");
        if (href) {
          const hash = href.replace("/#", "");
          if (["about", "projects", "blog"].includes(hash)) {
            setOpenSection((prev) => (prev === hash ? null : hash));
          }
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <main className="flex flex-col items-center">
      <div className="h-screen relative overflow-hidden w-full mb-0">
        {/* Text content - behind bags */}
        <div className="relative z-0 flex flex-col items-center justify-center h-full text-center pointer-events-none">
          <h1 className="text-9xl font-black leading-none flex flex-col justify-center title-outline">
            <span className={isLoaded ? 'animate-dissolve-in opacity-0 [animation-delay:200ms]' : 'opacity-0'}>
              HANU
            </span>
            <span className={isLoaded ? 'animate-dissolve-in opacity-0 [animation-delay:500ms]' : 'opacity-0'}>
              HANU
            </span>
            <span className={isLoaded ? 'animate-dissolve-in opacity-0 [animation-delay:800ms]' : 'opacity-0'}>
              HANU
            </span>
          </h1>
          <p className={isLoaded ? 'text-4xl mt-6 text-solid animate-dissolve-in opacity-0 [animation-delay:1100ms]' : 'text-4xl mt-6 text-solid opacity-0'}>
            Have A Nice Update
          </p>
          <p className={isLoaded ? 'text-4xl mt-2 text-solid animate-dissolve-in opacity-0 [animation-delay:1100ms]' : 'text-4xl mt-2 text-solid opacity-0'}>
            ↓
          </p>
        </div>

        {/* Floating bags container - spans full viewport width and hero height */}
        <div className="absolute inset-0 z-10 w-screen left-1/2 -translate-x-1/2 pointer-events-none">
          <FloatingImage
            src="/images/REDTHANKUBAG.png"
            alt="Thank you bag"
            width={150}
            height={200}
            initialX={-200}
            initialVelocityX={2}
            initialVelocityY={0.5}
            initialRotation={45}
            startDelay={1500}
          />
          <FloatingImage
            src="/images/REDTHANKUBAG.png"
            alt="Thank you bag"
            width={150}
            height={200}
            initialX={
              typeof window !== "undefined" ? window.innerWidth + 50 : 2000
            }
            initialVelocityX={-1.5}
            initialVelocityY={-1}
            initialRotation={120}
            startDelay={1800}
          />
          <FloatingImage
            src="/images/REDTHANKUBAG.png"
            alt="Thank you bag"
            width={150}
            height={200}
            initialX={-200}
            initialVelocityX={1}
            initialVelocityY={1.5}
            initialRotation={270}
            startDelay={2100}
          />
        </div>
      </div>

      <hr className="w-full border-t-2 border-[#DC143C]" />

      {/* About Accordion */}
      <section id="about" className="w-full max-w-6xl px-8">
        <button
          onClick={() => toggleSection("about")}
          className="w-full py-8 px-8 flex items-center"
        >
          <span className="text-6xl font-black text-solid mr-4">
            {openSection === "about" ? "−" : "+"}
          </span>
          <h2 className="text-6xl font-black text-solid hover:rotate-3 hover:underline mr-4">
            About
          </h2>
        </button>
        {openSection === "about" && (
          <div className="pb-16 pl-8">
            <div className="relative flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-lg font-black text-black leading-relaxed">
                  hanna is hanu. MIT &apos;25 – B.S. in{" "}
                  <a
                    className="hover:underline"
                    href="https://catalog.mit.edu/degree-charts/architecture-course-4-b/"
                    target="_blank"
                  >
                    Art & Design
                  </a>
                  . obsessed with computation, product, and interaction design.
                  also addicted to the rush of making cool things. comfortable
                  with sketching, modeling, coding, prototyping, iterating, and
                  fabricating. background in computer science, media studies,
                  and architectural thinking. love learning and teaching
                </p>
              </div>
              <div className="flex-1">
                <p className="text-lg font-black text-black leading-relaxed">
                  in other news, current hanu lore:
                </p>
                <ul className="list-disc list-inside text-lg font-black text-black leading-relaxed mt-2">
                  <li>reading econ, typography, and american literature</li>
                  <li>
                    lifting, running, mobility, and calisthenics (hell yeah)
                  </li>
                  <li>
                    learning: sewing, guitar, Russian, latin dance, pet care
                  </li>
                  <li>figuring out the vibe for my instagram . . .</li>
                  <li>wanting to make a blog . . .</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      <hr className="w-full border-t-2 border-[#DC143C]" />

      {/* Projects Accordion */}
      <section id="projects" className="w-full max-w-6xl px-8">
        <button
          onClick={() => toggleSection("projects")}
          className="w-full py-8 px-8 flex items-center"
        >
          <span className="text-6xl font-black text-solid mr-4">
            {openSection === "projects" ? "−" : "+"}
          </span>
          <h2 className="text-6xl font-black text-solid hover:rotate-3 hover:underline mr-4">
            Projects
          </h2>
        </button>
        {openSection === "projects" && (
          <div className="px-8 pb-16 my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 md:px-40">
              {projects.map((project) => (
                <ProjectCard
                  key={project.href}
                  title={project.title}
                  subtitle={project.subtitle}
                  thumbnail={project.thumbnail}
                  href={project.href}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <hr className="w-full border-t-2 border-[#DC143C]" />

      {/* Blog Accordion */}
      <section id="blog" className="w-full max-w-6xl px-8">
        <button
          onClick={() => toggleSection("blog")}
          className="w-full py-8 px-8 flex items-center"
        >
          <span className="text-6xl font-black text-solid mr-4">
            {openSection === "blog" ? "−" : "+"}
          </span>
          <h2 className="text-6xl font-black text-solid hover:rotate-3 hover:underline mr-4">
            Blog?
          </h2>
        </button>
        {openSection === "blog" && (
          <div className="pb-16 pl-8">
            <p className="text-lg font-black text-black leading-relaxed">
              coming soon . . .
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
