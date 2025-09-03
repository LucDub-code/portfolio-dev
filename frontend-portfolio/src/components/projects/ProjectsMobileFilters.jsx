import { filtersData } from "../../data/filtersData";
import chevronDown from "../../assets/icons/navigation/nav-full-down.svg";
import filterIcon from "../../assets/icons/navigation/filter.svg";
import { useProjectsContext } from "../../contexts/ProjectsContext";

export default function ProjectsMobileFilters({
  isFiltersOpen,
  setIsFiltersOpen,
}) {
  const {
    platformFilters,
    setPlatformFilters,
    technologyFilters,
    setTechnologyFilters,
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
        <div className="flex flex-col gap-8 pt-8 items-center">
          <div className="flex gap-4 items-center">
            <img src={chevronDown} alt="Chevron" className="w-4 h-4" />
            <h3 className="font-semibold text-text-default">Plateformes</h3>
          </div>
          <div className="flex flex-wrap gap-8">
            {filtersData.platforms.map((platform) => (
              <div key={platform.id} className="flex items-center">
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
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="w-6 h-6"
                  />
                  <span>{platform.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-8 pt-8 items-center">
          <div className="flex gap-4 items-center">
            <img src={chevronDown} alt="Chevron" className="w-4 h-4" />
            <h3 className="font-semibold text-text-default">Technologies</h3>
          </div>
          <div className="grid grid-cols-3 gap-8 ml-16">
            {filtersData.technologies.map((technology) => (
              <div key={technology.id} className="flex items-center">
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
        </div>

        {/* Bouton appliquer les filtres */}
        <div className="flex justify-center py-8">
            <button
              type="button"
              className="px-8 py-2 text-white rounded border shadow-md transition-colors cursor-pointer bg-blue-accent hover:bg-focus-hover border-border-ide"
            >
              Appliquer
            </button>
          </div>
      </div>
    </div>
  );
}
