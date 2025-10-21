import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  thumbnail: string;
  href: string;
}

export default function ProjectCard({
  title,
  subtitle,
  thumbnail,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative w-full">
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={600}
          className="w-full h-auto hover:rotate-6 transition-transform"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="mt-4 ml-2">
        <h3 className="text-2xl font-black text-black group-hover:underline">
          {title}
        </h3>
        <p className="text-sm font-light text-black mt-1">{subtitle}</p>
      </div>
    </Link>
  );
}
