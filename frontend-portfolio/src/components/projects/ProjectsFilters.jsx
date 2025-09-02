import { useProjectsContext } from "../../contexts/ProjectsContext";
import desktopIconWhite from "../../assets/icons/platforms/desktop-w.svg";
import mobileIconWhite from "../../assets/icons/platforms/mobile-w.svg";
import chevronRight from "../../assets/icons/navigation/nav-full.svg";
import reactIcon from "../../assets/icons/technos/react.svg";
import htmlIcon from "../../assets/icons/technos/html.svg";
import cssIcon from "../../assets/icons/technos/css.svg";
import jsIcon from "../../assets/icons/technos/js.svg";
import tailwindIcon from "../../assets/icons/technos/tailwind.svg";
import sassIcon from "../../assets/icons/technos/sass.svg";
import expressIcon from "../../assets/icons/technos/express.svg";
import mongodbIcon from "../../assets/icons/technos/mongo.svg";
import nodeIcon from "../../assets/icons/technos/node.svg";

export default function ProjectFilters({ isSideMenu = false }) {
  const { platformFilters, setPlatformFilters, technologyFilters, setTechnologyFilters } = useProjectsContext();

  const containerClass = isSideMenu
    ? "flex flex-col gap-4 pt-8"
    : "hidden";

  return (
    <div className={containerClass}>
      {/* Filtre Desktop & Mobile */}
      <div className="flex items-center gap-2 border-b border-border-ide pb-2">
        <img src={chevronRight} alt="Chevron" className="w-4 h-4" />
        <h3 className="font-semibold text-text-default">
          Plateformes
        </h3>
      </div>
      <div className="flex items-center pt-2">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setPlatformFilters([...platformFilters, "desktop"]);
            } else {
              setPlatformFilters(
                platformFilters.filter((p) => p !== "desktop")
              );
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={desktopIconWhite} alt="Desktop" className="w-6 h-6" />
          <span>Desktop</span>
        </div>
      </div>
      <div className="flex items-center">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setPlatformFilters([...platformFilters, "mobile"]);
            } else {
              setPlatformFilters(platformFilters.filter((p) => p !== "mobile"));
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={mobileIconWhite} alt="Mobile" className="w-6 h-6" />
          <span>Mobile</span>
        </div>
      </div>

      {/* Filtre Technologies */}
      <div className="flex items-center gap-2 border-b border-border-ide pb-2 mt-6">
        <img src={chevronRight} alt="Chevron" className="w-4 h-4" />
        <h3 className="font-semibold text-text-default">
          Technologies
        </h3>
      </div>
      
      <div className="flex items-center pt-2">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setTechnologyFilters([...technologyFilters, "React"]);
            } else {
              setTechnologyFilters(technologyFilters.filter((t) => t !== "React"));
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={reactIcon} alt="React" className="w-6 h-6" />
          <span>React</span>
        </div>
      </div>

      <div className="flex items-center">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setTechnologyFilters([...technologyFilters, "JavaScript"]);
            } else {
              setTechnologyFilters(technologyFilters.filter((t) => t !== "JavaScript"));
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={jsIcon} alt="JavaScript" className="w-6 h-6" />
          <span>JavaScript</span>
        </div>
      </div>

      <div className="flex items-center">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setTechnologyFilters([...technologyFilters, "Tailwind"]);
            } else {
              setTechnologyFilters(technologyFilters.filter((t) => t !== "Tailwind"));
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={tailwindIcon} alt="Tailwind" className="w-6 h-6" />
          <span>Tailwind</span>
        </div>
      </div>

      <div className="flex items-center">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setTechnologyFilters([...technologyFilters, "Sass"]);
            } else {
              setTechnologyFilters(technologyFilters.filter((t) => t !== "Sass"));
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={sassIcon} alt="Sass" className="w-6 h-6" />
          <span>Sass</span>
        </div>
      </div>

      <div className="flex items-center">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setTechnologyFilters([...technologyFilters, "HTML"]);
            } else {
              setTechnologyFilters(technologyFilters.filter((t) => t !== "HTML"));
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={htmlIcon} alt="HTML" className="w-6 h-6" />
          <span>HTML</span>
        </div>
      </div>

      <div className="flex items-center">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setTechnologyFilters([...technologyFilters, "CSS"]);
            } else {
              setTechnologyFilters(technologyFilters.filter((t) => t !== "CSS"));
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={cssIcon} alt="CSS" className="w-6 h-6" />
          <span>CSS</span>
        </div>
      </div>

      <div className="flex items-center">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setTechnologyFilters([...technologyFilters, "Node.js"]);
            } else {
              setTechnologyFilters(technologyFilters.filter((t) => t !== "Node.js"));
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={nodeIcon} alt="Node.js" className="w-6 h-6" />
          <span>Node.js</span>
        </div>
      </div>

      <div className="flex items-center">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setTechnologyFilters([...technologyFilters, "Express"]);
            } else {
              setTechnologyFilters(technologyFilters.filter((t) => t !== "Express"));
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={expressIcon} alt="Express" className="w-6 h-6" />
          <span>Express</span>
        </div>
      </div>

      <div className="flex items-center">
        <input
          className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setTechnologyFilters([...technologyFilters, "MongoDB"]);
            } else {
              setTechnologyFilters(technologyFilters.filter((t) => t !== "MongoDB"));
            }
          }}
        />
        <div className="pl-6 flex gap-2 items-center">
          <img src={mongodbIcon} alt="MongoDB" className="w-6 h-6" />
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  );
}
