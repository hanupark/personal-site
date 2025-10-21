import ProjectPage from "@/components/ProjectPage";

export default function Pix4() {
  const images = [
    "/images/project2/test.png",
    "/images/project2/test2.png",
    "/images/project2/stacks.jpg",
    "/images/project2/DSC07598.JPG",
    "/images/project2/DSC07759.JPG",
    "/images/project2/DSC07736.JPG",
    "/images/project2/thumb.JPG",
    "/images/project2/DSC07726.JPG",
    "/images/project2/holding.jpg",
    "/images/project2/Title Slide.png",
    "/images/project2/flutter.jpg",
    "/images/project2/result2.jpg",
    "/images/project2/result3.jpg",
    "/images/project2/result1.jpg",
    "/images/project2/flatshot.png",
  ];

  return (
    <ProjectPage
      title="Pix 4.0"
      subtitle="Analog Photoshopping Camera"
      description={`Pix is a wooden camera that bridges analog and digital photography by using cyanotype paper as film and a customizable pixel grid overlay to create deliberately edited images. Pix embraces the slowness of cyanotype methods, transforming the 19th-century practice into a playful commentary on the modernization of photography.

The camera imagines what an "all-in-one" device means for alternative photography. Like modern cameras, Pix integrates the entire picture-taking workflow into a single wooden body. The top surface functions as an editing tray where users can arrange pixel tiles to create custom grid patterns, transforming each photograph into a unique blend of analog and digital influences. One drawer stores the pixel tiles for easy access, another keeps cyanotype paper protected from light until exposure, and the last holds the pixel-editing tweezers. The grid and paper slot directly into the camera's back for development, eliminating the need for separate darkroom equipment.

Thoughtful details enhance usability: stabilizing feet provide a steady base during long exposures, tripod compatibility allows for precise framing, integrated storage keeps supplies organized, and camera strap hooks make the object portable. The choice of wood as the primary material emphasizes craft and permanence, mirroring cyanotype's nature. The 3D printed hardware serves as the modern counterpart, similarly to the current technology found in digital cameras.

By slowing down the image-making process and introducing physical constraints (limited exposures, manual grid editing, chemical development) the camera forces intentionality. Each photograph requires planning, patience, and acceptance of unpredictability. The resulting images, with distinctive cyan-blue tones and pixelated overlays, exist at the intersection of vintage technique and digital aesthetics.

This project explores how designing for constraints can foster creativity, and how analog processes can offer meaningful alternatives to our increasingly automated visual culture.

On a realer note, I developed an awe for cyanotype (and in a larger sense film) photography while working on this project. It requires patience, commitment, and a willingness to embrace imperfection. Even on ideal sunny days, the development time took 1.5 hours and the wind knocked over the foam prototype throughout. We couldn't open the paper to check the progress until it was finished due to exposure and development. We had to commit to either dealing with a blurry picture or checking and starting over even if it was fine. It was mildly stressful but also rewarding. I appreciated the time with my project partner outside to work out the ideas and possibilities depending on how the images turned out.

Half a year later, my project partner texted me to ask if she could borrow the camera for a graduation picture. The process definitely charmed us both!`}
      collaborators={["Ava Dijstelbloem"]}
      tools={["Rhino", "cyaonotype"]}
      skills={["woodworking, 3D modeling, 3D printing"]}
      images={images}
    >
      {/* You can add additional content here if needed */}
    </ProjectPage>
  );
}
