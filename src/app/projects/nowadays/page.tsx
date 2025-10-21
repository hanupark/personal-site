import ProjectPage from "@/components/ProjectPage";
import PasswordProtect from "@/components/PasswordProtect";

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
    <PasswordProtect password="hanuluvsu<3" pageId="nowadays">
      <ProjectPage
        title="Growth Engineering Intern"
        subtitle="Nowadays AI"
        description={`During my time as a Growth Engineering Intern, I worked across engineering, product design, and operations to build tools and systems that helped the company scale faster and operate more efficiently. I owned several end-to-end projects (from data collection pipelines and internal automation tools to branding and event planning) each contributing directly to the company’s growth roadmap.

To support the company’s expansion into new markets, I built automated data collection pipelines using Python and Playwright to gather venue data from publicly accessible sources. These scripts were deployed across parallel virtual machines on Google Cloud to increase efficiency and scale. The data was stored in Supabase, helping the team centralize and expand its internal venue database for operational use.

I also created several internal tools to streamline workflows across the team. This included an automatic PowerPoint exporter that pulled relevant data into templated decks for executive meetings, replacing a time-consuming manual process. I built a branded QR code generator to save time and ensure design consistency, and I developed a custom page builder that allowed the team to create tailored landing pages for clients in under 10 minutes without needing engineering support.

On the design side, I created the logo for The Venue Collective, a new brand launched by the company for corporate event organizers. I also designed a pool floatie concept in Figma as part of experimental branded merchandise, contributing from early sketches to final mockups. In addition, I designed internal and external assets--including decks, graphics, and presentation templates--that were used across marketing and leadership initiatives.

In addition to technical and design work, I planned a 30-person corporate offsite with a $150K budget, managing logistics, vendor coordination, and on-site execution from start to finish.

This internship taught me how to build quickly, prioritize user needs, and work cross-functionally in a fast-paced environment.`}
        collaborators={[]}
        tools={[
          "Next.js, Tailwind, Figma, Supabase, Python, Playwright Google Cloud",
        ]}
        skills={[
          "Product Design, Frontend Development, User Research, Data Collection",
        ]}
        images={images}
      >
        {/* You can add additional content here if needed */}
      </ProjectPage>
    </PasswordProtect>
  );
}
