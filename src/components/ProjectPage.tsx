import Image from "next/image";

interface ProjectPageProps {
  title: string;
  subtitle: string;
  description: string;
  collaborators: string[];
  tools: string[];
  skills: string[];
  images: string[];
  video?: string;
  link?: [string, string]; // [link text, link URL]
  children?: React.ReactNode;
}

export default function ProjectPage({
  title,
  subtitle,
  description,
  collaborators,
  tools,
  skills,
  images,
  video,
  link,
  children,
}: ProjectPageProps) {
  // Split images into three columns
  const splitIntoColumns = (arr: string[], numColumns: number) => {
    const columns: string[][] = Array.from({ length: numColumns }, () => []);
    arr.forEach((item, index) => {
      columns[index % numColumns].push(item);
    });
    return columns;
  };

  const imageColumns = splitIntoColumns(images, 2);
  return (
    <main className="min-h-screen">
      {/* Title Section */}
      <section className="w-full bg-[#DC143C]">
        <div className="max-w-6xl mx-auto px-8 pt-24 pb-8">
          <h1 className="text-6xl md:text-9xl font-black leading-none text-white flex flex-row items-end gap-2 md:gap-4">
            <span>{title}</span>
            <span className="text-xl md:text-2xl font-light whitespace-nowrap">{subtitle}</span>
          </h1>
          {link && (
            <a
              href={link[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-lg md:text-xl font-black text-white hover:underline hover:rotate-[4deg]"
            >
              {link[0]} →
            </a>
          )}
        </div>
      </section>

      {/* Metadata Section */}
      <section className="w-full max-w-6xl mx-auto px-8 my-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 text-lg font-black text-black">
          {collaborators.length > 0 && (
            <div className="flex flex-col">
              <span className="text-solid">Collaborators</span>
              <span className="font-light text-sm">
                {collaborators.join(", ")}
              </span>
            </div>
          )}

          {tools.length > 0 && (
            <div className="flex flex-col">
              <span className="text-solid">Tools</span>
              <span className="font-light text-sm">{tools.join(", ")}</span>
            </div>
          )}

          {skills.length > 0 && (
            <div className="flex flex-col">
              <span className="text-solid">Skills</span>
              <span className="font-light text-sm">{skills.join(", ")}</span>
            </div>
          )}
        </div>
      </section>

      {/* Red line under metadata - spans full width */}
      <hr className="w-full border-t-2 border-[#DC143C]" />

      {/* Two column section with 1:2 ratio */}
      <section className="w-full max-w-6xl mx-auto px-8 my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {/* Column 1 - Description (1/3 width) */}
          <div className="md:col-span-1 order-1">
            <p className="text-lg font-black text-black leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Column 2 - Images (2/3 width) */}
          <div className="md:col-span-2 order-2">
            <div className="space-y-4">
              {images.map((imagePath, index) => (
                <div key={index} className="relative w-full">
                  <img
                    src={imagePath}
                    alt={`${title} image ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {video && (
        <section className="w-full max-w-6xl mx-auto px-8 my-8">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={video}
              title="Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {children}
    </main>
  );
}
