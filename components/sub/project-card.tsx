import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#2A0E61] bg-[#0c0724]/70 shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#120a33]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-gray-300 [display:-webkit-box] [-webkit-line-clamp:7] [-webkit-box-orient:vertical] overflow-hidden">
          {description}
        </p>
      </div>
    </Link>
  );
};
