import { filtersData } from "../../data/filtersData";
import chevronDown from "../../assets/icons/navigation/nav-full-down.svg";
import filterIcon from "../../assets/icons/navigation/filter.svg";
import { useProjectsContext } from "../../contexts/ProjectsContext";

export default function ProjectsMobileFilters({isFiltersOpen, setIsFiltersOpen}) {

  const {
    tempPlatformFilters,
    setTempPlatformFilters,
    tempTechnologyFilters,
    setTempTechnologyFilters,
    applyFilters,
  } = useProjectsContext();

  return (
    <div className="hidden max-[1060px]:flex flex-col sticky top-0 z-20">
      {/* Bandeau bouton filtre */}
      <button
        className="flex gap-2 justify-center items-center p-2 w-full border-b transition-colors cursor-pointer bg-bg-terminal border-border-ide text-text-default hover:text-text-selected group"
        onClick={() => setIsFiltersOpen(!isFiltersOpen)}
      >
        <img
          src={filterIcon}
          alt="Filter"
          className="w-6 h-6 group-hover:brightness-0 group-hover:invert"
        />
        <span>Filtres</span>
      </button>
      {/* Filtres */}
      <div
        className={`absolute top-full left-0 right-0 text-text-default bg-bg-terminal border-b border-border-ide transition-all duration-300 overflow-hidden ${
          isFiltersOpen ? "max-h-120" : "max-h-0"
        }`}
      >
        {/* Plateformes */}
        <div className="flex flex-col gap-8 max-[770px]:gap-6 max-[380px]:gap-4 pt-8 max-[770px]:pt-6 max-[380px]:pt-4 items-center">
          <div className="flex gap-4 items-center">
            <img src={chevronDown} alt="Chevron" className="w-4 h-4" />
            <h3 className="font-semibold text-text-default text-base max-[770px]:text-sm">Plateformes</h3>
          </div>
          <div className="flex flex-wrap gap-8">
            {filtersData.platforms.map((platform) => (
              <div key={platform.id} className="flex items-center">
                <input
                  className="w-5 h-5 max-[770px]:w-4 max-[770px]:h-4 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative cursor-pointer"
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setTempPlatformFilters([...tempPlatformFilters, platform.id]);
                    } else {
                      setTempPlatformFilters(
                        tempPlatformFilters.filter((p) => p !== platform.id)
                      );
                    }
                  }}
                />
                <div className="flex gap-2 items-center pl-6 max-[380px]:pl-4">
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="w-6 h-6"
                  />
                  <span className="text-base max-[770px]:text-sm max-[380px]:text-xs">{platform.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-8 max-[770px]:gap-6 max-[380px]:gap-4 pt-8 max-[770px]:pt-6 items-center">
          <div className="flex gap-4 items-center">
            <img src={chevronDown} alt="Chevron" className="w-4 h-4" />
            <h3 className="font-semibold text-text-default text-base max-[770px]:text-sm">Technologies</h3>
          </div>
          <div className="grid grid-cols-3 max-[770px]:grid-cols-2 gap-y-8 gap-x-8 max-[770px]:gap-y-6 max-[380px]:gap-y-4 max-[770px]:gap-x-2 ml-16 max-[770px]:ml-8">
            {filtersData.technologies.map((technology) => (
              <div key={technology.id} className="flex items-center">
                <input
                  className="w-5 h-5 max-[770px]:w-4 max-[770px]:h-4 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative cursor-pointer"
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setTempTechnologyFilters([...tempTechnologyFilters, technology.id]);
                    } else {
                      setTempTechnologyFilters(
                        tempTechnologyFilters.filter((t) => t !== technology.id)
                      );
                    }
                  }}
                />
                <div className="flex gap-2 items-center pl-6 max-[380px]:pl-4">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-6 h-6"
                  />
                  <span className="text-base max-[770px]:text-sm max-[380px]:text-xs">{technology.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton appliquer les filtres */}
        <div className="flex justify-center py-8 max-[770px]:py-6 max-[380px]:py-4">
            <button
              type="button"
              className="px-8 py-2 max-[770px]:px-4 max-[770px]:py-1 text-white rounded border shadow-md transition-colors cursor-pointer bg-blue-accent hover:bg-focus-hover border-border-ide"
              onClick={() => {
                applyFilters();
                setIsFiltersOpen(false);
              }}
            >
              <span className="text-base max-[770px]:text-sm">Appliquer</span>
            </button>
          </div>
      </div>
    </div>
  );
}
