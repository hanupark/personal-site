import ProjectPage from "@/components/ProjectPage";

export default function HahuChair() {
  const images = [
    "/images/chair/finalreal.JPG",
    "/images/chair/chairexp.png",
    "/images/chair/final.png",
    "/images/chair/proto2.png",
    "/images/chair/proto.png",
    "/images/chair/grah.jpg",
    "/images/chair/colorrender.jpg",
    "/images/chair/firstmodelever.png",
  ];

  return (
    <ProjectPage
      title="hAhu Chair"
      subtitle="Typography Inspired Chair Design"
      description={`I designed and built a chair from scratch, starting with 3D modeling in Rhino and ending with a full-scale, functional piece cut on a CNC machine and assembled entirely by hand. It had to be flat-packable, fit within strict size limits, and use no glue or nails -- just interlocking plywood joints and friction. It was a fun challenge in precision, structural design, and thinking like a product engineer and a maker. I learned about tolerances, material behavior, and how to make things that actually hold up when you sit on them (as well as some rendering for fun).`}
      collaborators={["--"]}
      tools={["Rhino, CNC"]}
      skills={["woodworking, 3D modeling"]}
      images={images}
    >
      {/* You can add additional content here if needed */}
    </ProjectPage>
  );
}
