import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-primary)] px-8 py-4 text-lg">
      <div className="flex justify-between items-center">
        <div className="text-white font-black">
          <p>© {new Date().getFullYear()} HANU</p>
        </div>
        <div className="flex gap-6 text-white text-2xl">
          <a
            href="https://www.linkedin.com/in/hanupark/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:rotate-6 hover:underline"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/hanu.works/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:rotate-6 hover:underline"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
