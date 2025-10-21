"use client";

import ProjectPage from "@/components/ProjectPage";
import ServerPasswordProtect from "@/components/ServerPasswordProtect";
import { verifyNowadaysPassword } from "@/lib/auth";

export default function Nowadays() {
  const images = [
    "/images/nowadays/ppt.png",
    "/images/nowadays/slides.gif",
    "/images/nowadays/qrgen.png",
    "/images/nowadays/navbaradmin.png",
    "/images/nowadays/heroadmin.png",
    "/images/nowadays/hero.png",
    "/images/nowadays/schedadmin.png",
    "/images/nowadays/schedule.png",
    "/images/nowadays/venueadmin.png",
    "/images/nowadays/venue.png",
    "/images/nowadays/faqadmin.png",
    "/images/nowadays/faq.png",
    "/images/nowadays/review.png",
    "/images/nowadays/pylon.png",
    "/images/nowadays/pylontable.png",
    "/images/nowadays/floats.png",
  ];

  return (
    <ServerPasswordProtect
      verifyPassword={verifyNowadaysPassword}
      pageId="nowadays"
    >
      <ProjectPage
        title="Growth Engineering Intern"
        subtitle="Nowadays AI"
        description={`During my time as a Growth Engineering Intern, I worked across engineering, product design, and operations to build tools and systems that helped the company scale faster and operate more efficiently. I owned several end-to-end projects (from data collection pipelines and internal automation tools to branding and event planning) each contributing directly to the company's growth roadmap.

On the engineering side, I built a multi-threaded Python web scraper using Playwright to collect event data from Eventbrite, LinkedIn, and Luma—integrating thousands of data points into the company's event discovery system. I also created an automated email distribution system integrated with Supabase and Google Sheets, streamlining outreach for the operations team and saving hours of manual work each week. Additionally, I developed a Chrome extension to help the sales team track user engagement metrics in real-time, giving leadership better insight into customer behavior.

On the design side, I created the logo for The Venue Collective, a new brand launched by the company for corporate event organizers. I also designed a pool floatie concept in Figma as part of experimental branded merchandise, contributing from early sketches to final mockups. In addition, I designed internal and external assets--including decks, graphics, and presentation templates--that were used across marketing and leadership initiatives.

In addition to technical and design work, I planned a 30-person corporate offsite with a $150K budget, managing logistics, vendor coordination, and on-site execution from start to finish.

This internship taught me how to build quickly, prioritize user needs, and work cross-functionally in a fast-paced environment.`}
        collaborators={[]}
        tools={[
          "Next.js, Tailwind, Figma, Supabase, Python, Playwright, Google Cloud",
        ]}
        skills={[
          "Product Design, Frontend Development, User Research, Data Collection",
        ]}
        images={images}
      />
    </ServerPasswordProtect>
  );
}
