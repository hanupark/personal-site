import ProjectPage from "@/components/ProjectPage";

export default function HackMIT() {
  const images = [
    "/images/hackmit/IMG_6600.JPG",
    "/images/hackmit/style-guide.png",
    "/images/hackmit/assets.png",
    "/images/hackmit/assetsgrp.png",
    "/images/hackmit/aboutdraft.jpg",
    "/images/hackmit/aboutdone.png",
    "/images/hackmit/outreachflyer.png",
    "/images/hackmit/banner.png",
    "/images/hackmit/featbanner.png",
    "/images/hackmit/snack.png",
    "/images/hackmit/check1.png",
    "/images/hackmit/tote.png",
    "/images/hackmit/badges.png",
  ];

  return (
    <ProjectPage
      title="HackMIT 2022"
      subtitle="Marketing Head"
      link={["Vist the Landing Page", "https://archive.hackmit.org/2022/"]}
      description={`I led the 13-person design team behind HackMIT 2022’s visual identity, spanning digital, print, and physical assets. We built a surreal sky-ocean theme (clouds with whales, astronauts at the sea floor) and carried it across the website, social media, signage, swag, and animations. I managed timelines, ran both critiques & meetings, and collaborated with dev and logistics teams to keep everything cohesive and on-brand. 

The team came from a range of design backgrounds, so a big part of my role became mentorship--balancing consistency with creative freedom, helping people grow their skills, and making space for different visual voices. It wasn’t always easy to align everyone, but the end result felt unified. 

The most rewarding moments were small: seeing attendees photograph the badges, compliment the site, or ask who made the stickers. I was incredibly proud of the marketing team at the end of it all :)`}
      collaborators={[
        "Stella Ahn, Penny Brant, Katherine He, Michael Lu, Kelly Lu, Ehosa Ohenhen, Anirudh Rahul, Jazhara Solan, Joyce Tang, Helen Wang, Lili Wilson, Jessica Xu, Hannah Zhang",
      ]}
      tools={["Adobe Illustrator", "Adobe Photoshop"]}
      skills={["management, event planning, graphic design, product design"]}
      images={images}
    >
      {/* You can add additional content here if needed */}
    </ProjectPage>
  );
}
