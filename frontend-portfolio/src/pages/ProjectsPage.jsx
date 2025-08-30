import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import jsonIcon from "../assets/icons/technos/json.svg";
import ProjectCard from "../components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col h-full">
      {/* En-tête mobile (caché sur desktop où FileHeader prend le relais) */}
      <div className="hidden max-[1060px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="mr-2 w-4 h-4" />
        <img src={jsonIcon} alt="Dossier" className="mr-2 w-5 h-5" />
        <span className="text-base text-text-default">_mes-projets.json</span>
      </div>
      <div className="flex justify-center p-8">
        <div className="grid grid-cols-1 min-[770px]:grid-cols-3 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
