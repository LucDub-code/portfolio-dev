import navIcon from "../../assets/icons/navigation/nav-light.svg";
import mdIcon from "../../assets/icons/technos/md.svg";
import { NavLink, useLocation } from "react-router-dom";

export default function AboutNavigation({ isSideMenu = false }) {
  const location = useLocation();

  // Styles différents selon l'emplacement (SideMenu ou mobile)
  const containerClass = isSideMenu
    ? "min-[1060px]:block hidden pt-4 pb-3"
    : "hidden max-[1059px]:block bg-bg-terminal border-b border-border-ide pb-2";

  const itemClass = isSideMenu
    ? "flex items-center px-2 py-1.5 cursor-pointer hover:bg-bg-selected rounded"
    : "flex items-center px-8 py-2 cursor-pointer";

  const indicatorClass = isSideMenu
    ? "absolute bottom-[-3px] left-0 right-0 h-[2px] bg-orange-string"
    : "absolute bottom-[-5px] left-0 right-0 h-[3px] bg-orange-string";

  return (
    <div className={containerClass}>
      {/* Onglets de navigation */}
      {[
        { name: "bio", path: "/about/bio" },
        { name: "interets", path: "/about/interets" },
        { name: "education", path: "/about/education" }
      ].map((tab) => (
        <NavLink key={tab.name} to={tab.path} className={itemClass}>
          <img src={navIcon} alt="Chevron" className="w-4 h-4 mr-1" />
          <div className="relative">
            <div className="flex items-center">
              <img src={mdIcon} alt="Markdown" className="w-4 h-4 mr-1" />
              <span
                className={`${location.pathname.startsWith(tab.path) ? "text-text-selected" : "text-text-default"
                  } text-sm`}
              >
                {tab.name}.md
              </span>
            </div>
            {location.pathname.startsWith(tab.path) && <div className={indicatorClass}></div>}
          </div>
        </NavLink>
      ))}
    </div>
  );
}
