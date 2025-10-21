import ProjectPage from "@/components/ProjectPage";

export default function CollagePix() {
  const images = [
    "/images/project1/Scanned_Documents.png",
    "/images/project1/DSC09196.JPG",
    "/images/project1/DSC09195.JPG",
    "/images/project1/DSC09185.JPG",
    "/images/project1/DSC09157.JPG",
    "/images/project1/DSC09165.JPG",
    "/images/project1/DSC09176.JPG",
    "/images/project1/DSC09215.JPG",
    "/images/project1/DSC09216.JPG",
    "/images/project1/DSC09218.JPG",
    "/images/project1/cropping.png",
    "/images/project1/collage_005.png",
    "/images/project1/collage_001.png",
    "/images/project1/collage_002.png",
    "/images/project1/DSC09228.JPG",
  ];

  return (
    <ProjectPage
      title="CollagePix"
      subtitle="Interactive Collage-Making Camera"
      description={`our relationship with photography has become complicated. Research shows that constant picture-taking can actually impair our memory of experiences, reduce our engagement with the present moment, and create overwhelming data loads. This thesis explores an alternative: a prototype camera that uses digital collaging to help users stay present while still capturing meaningful memories.

        The camera addresses the "photo-taking impairment effect" by focusing on details rather than perfect shots, encouraging intentional photography, and reducing cognitive load through minimal, intuitive design. Users select from five categories—People, Transit, Animals, Food, and Furniture—using a tactile external gear. The camera automatically crops subjects from each photo using YOLO object detection, then collages them into a single artistic composition at the end of an experience. This transforms dozens of low-effort captures into one high-effort, interpretive artwork that serves as a memory cue.

Drawing inspiration from Dada collage artists like Hannah Höch, who used fragmented imagery to create new narratives, the prototype emphasizes creative interpretation over photographic realism. It's designed for detail-oriented, narrative experiences that unfold over time—like a weekend trip or food tour—rather than formal documentation. The compact, 3D-printed design features a simple button interface, LED feedback, and intentionally no screen to avoid distraction.

Testing revealed both successes and limitations. The camera effectively encouraged attention to overlooked details and reduced the pressure of finding the "perfect" shot. However, the automated collaging process limited personal expression—users couldn't control image placement or scaling, which are essential to traditional collage's interpretive nature. Future iterations could incorporate user input into the composition algorithm, smarter layout logic, and expanded object recognition to unlock fuller creative potential.

This work contributes to experience-capturing technology by offering a subjective, narrative-driven alternative to conventional photography—one that prioritizes presence, reflection, and meaning over realism.`}
      collaborators={["Ava Dijstelbloem"]}
      tools={["Rhino", "Arduino", "YOLO"]}
      skills={["3D modeling", "3D printing", "electronics", "programming"]}
      images={images}
      link={[
        "Read the Thesis",
        "https://docs.google.com/document/d/1dXGj3M9xH1dcH6TvwEP9AbMHZQbcQk716aJFjl91TjQ/edit?usp=sharing",
      ]}
    >
      {/* You can add additional content here if needed */}
    </ProjectPage>
  );
}
