import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import jsonIcon from "../assets/icons/technos/json.svg";
import ProjectCard from "../components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col h-full">
      {/* En-tête mobile (caché sur desktop où FileHeader prend le relais) */}
      <div className="hidden max-[769px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="w-4 h-4 mr-2" />
        <img src={jsonIcon} alt="Dossier" className="w-5 h-5 mr-2" />
        <span className="text-text-default text-base">_mes-projets.json</span>
      </div>
      <div className="p-8 flex justify-center">
        <div className="grid grid-cols-3 gap-6">
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
