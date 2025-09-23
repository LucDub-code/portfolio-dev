import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import jsonIcon from "../assets/icons/technos/json.svg";
import ProjectCard from "../components/projects/ProjectCard";
import { useProjectsContext } from "../contexts/ProjectsContext";
import ProjectsMobileFilters from "../components/projects/ProjectsMobileFilters";
import { useState } from "react";

export default function ProjectsPage() {
  const { projects } = useProjectsContext();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-20">
        {/* En-tête mobile (caché sur desktop où FileHeader prend le relais) */}
        <div className="hidden max-[1060px]:flex items-center px-3 py-2 h-10 bg-bg-terminal border-b border-border-ide">
          <img src={chevronDown} alt="Chevron" className="mr-2 w-4 h-4" />
          <img src={jsonIcon} alt="Dossier" className="mr-2 w-5 h-5" />
          <span className="text-base text-text-default">_mes-projets.json</span>
        </div>
        {/* Filtres mobile */}
        <ProjectsMobileFilters isFiltersOpen={isFiltersOpen} setIsFiltersOpen={setIsFiltersOpen} />
      </div>

      {/* Conteneur des projets */}
      <div className="flex justify-center pt-8 pb-8 max-[770px]:pb-32 relative">
        {/* Overlay */}
        {isFiltersOpen && <div className="absolute inset-0 bg-black opacity-50 z-10" onClick={() => setIsFiltersOpen(false)} />}
        {/* Cartes */}
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[880px]:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
