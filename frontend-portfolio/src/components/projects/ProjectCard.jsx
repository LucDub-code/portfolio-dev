import githubIcon from "../../assets/icons/socials/github.svg";
import externalLinkIcon from "../../assets/icons/navigation/external-link.svg";
import PlatformBadge from "./PlatformBadge";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-bg-terminal border border-border-ide text-text-default rounded-lg overflow-hidden w-80 h-96 max-[1280px]:w-64 max-[1280px]:h-80 flex flex-col">
      {/* Zone image */}
      <div className="relative h-1/2">
        <img
          src={project.imageUrl}
          alt=""
          className="object-cover w-full h-full"
        />
        {/* Badges plateformes - haut gauche */}
        <div className="absolute top-2 left-2 flex gap-1">
          {project.platforms.map((platform) => (
            <PlatformBadge key={platform} platform={platform} />
          ))}
        </div>

        {/* Badges technologies - haut droite */}
        <div className="absolute top-2 right-2 flex gap-1">
          {project.mainTechnologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
      {/* Zone contenu */}
      <div className="flex-1 p-4 max-[1280px]:p-3">
        <h3 className="text-lg max-[1280px]:text-sm text-text-selected font-bold pb-2">
          {project.title}
        </h3>
        <p className="text-sm max-[1280px]:text-xs pb-4">
          {project.description}
        </p>
        <div className="flex justify-around">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-text-default hover:bg-text-selected text-bg-terminal px-4 py-2 max-[1280px]:px-3 max-[1280px]:py-1.5 max-[1280px]:text-sm rounded-lg cursor-pointer flex items-center gap-2 max-[1280px]:gap-1.5"
          >
            Le projet
            <img
              src={externalLinkIcon}
              alt="External Link"
              className="w-4 max-[1280px]:w-3"
            />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-text-default hover:bg-text-selected text-bg-terminal px-4 py-2 max-[1280px]:px-3 max-[1280px]:py-1.5 max-[1280px]:text-sm rounded-lg flex items-center gap-2 max-[1280px]:gap-1.5 cursor-pointer"
          >
            Le code
            <img
              src={githubIcon}
              alt="GitHub"
              className="invert w-5 max-[1280px]:w-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
