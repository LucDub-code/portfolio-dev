import { useProjectsContext } from "../../contexts/ProjectsContext";
import chevronRight from "../../assets/icons/navigation/nav-full.svg";
import { filtersData } from "../../data/filtersData";

export default function ProjectFilters({ isSideMenu = false }) {
  const {
    platformFilters,
    setPlatformFilters,
    technologyFilters,
    setTechnologyFilters,
  } = useProjectsContext();

  const containerClass = isSideMenu ? "flex flex-col gap-4 pt-8" : "hidden";

  return (
    <div className={containerClass}>
      {/* Filtre Desktop & Mobile */}
      <div className="flex gap-2 items-center pb-2 border-b border-border-ide">
        <img src={chevronRight} alt="Chevron" className="w-4 h-4" />
        <h3 className="font-semibold text-text-default">Plateformes</h3>
      </div>

      {filtersData.platforms.map((platform) => (
        <div key={platform.id} className="flex items-center pt-2">
          <input
            className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setPlatformFilters([...platformFilters, platform.id]);
              } else {
                setPlatformFilters(
                  platformFilters.filter((p) => p !== platform.id)
                );
              }
            }}
          />
          <div className="flex gap-2 items-center pl-6">
            <img src={platform.icon} alt={platform.name} className="w-6 h-6" />
            <span>{platform.name}</span>
          </div>
        </div>
      ))}

      {/* Filtre Technologies */}
      <div className="flex gap-2 items-center pb-2 mt-6 border-b border-border-ide">
        <img src={chevronRight} alt="Chevron" className="w-4 h-4" />
        <h3 className="font-semibold text-text-default">Technologies</h3>
      </div>

      {filtersData.technologies.map((technology) => (
        <div key={technology.id} className="flex items-center pt-2">
          <input
            className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setTechnologyFilters([...technologyFilters, technology.id]);
              } else {
                setTechnologyFilters(
                  technologyFilters.filter((t) => t !== technology.id)
                );
              }
            }}
          />
          <div className="flex gap-2 items-center pl-6">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-6 h-6"
            />
            <span>{technology.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
