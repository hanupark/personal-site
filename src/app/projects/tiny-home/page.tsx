import ProjectPage from "@/components/ProjectPage";

export default function TinyHome() {
  const images = [
    "/images/tiny-home/d.jpeg",
    "/images/tiny-home/a.jpeg",
    "/images/tiny-home/c.jpeg",
    "/images/tiny-home/b.jpeg",
    "/images/tiny-home/total.png",
    "/images/tiny-home/3b.png",
    "/images/tiny-home/3a.png",
    "/images/tiny-home/3.png",
    "/images/tiny-home/2a.png",
    "/images/tiny-home/2.png",
    "/images/tiny-home/1a.png",
    "/images/tiny-home/1.png",
    "/images/tiny-home/init.png",
  ];

  return (
    <ProjectPage
      title="Guest House"
      subtitle="Gropius Tiny Home"
      description={`Inspired by the Bauhaus principles of the Gropius House, this tiny home is designed as an aesthetic architectural experience in a compact footprint. The project uses laser-cut Masonite panels and 3D-printed windows to capture material detail and form. A physical section model was crafted to explore spatial dynamics and light within the tiny structure, emphasizing thoughtful design at a small scale.`}
      collaborators={[""]}
      tools={["Rhino", "Climate Studio, LuBan"]}
      skills={["woodworking, metalworking, 3D modeling, 3D printing"]}
      images={images}
    >
      {/* You can add additional content here if needed */}
    </ProjectPage>
  );
}
