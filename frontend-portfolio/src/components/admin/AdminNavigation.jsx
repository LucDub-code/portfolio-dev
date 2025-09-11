import navIcon from "../../assets/icons/navigation/nav-light.svg";
import newIcon from "../../assets/icons/navigation/new.svg";
import projectsIcon from "../../assets/icons/navigation/projects.svg";
import { useAuth } from "../../contexts/AuthContext";
import { NavLink, useLocation } from "react-router-dom";

export default function AdminNavigation({ isSideMenu = false }) {
  const { logout } = useAuth();
  const location = useLocation();

  // Styles différents selon l'emplacement (SideMenu ou mobile)
  const containerClass = isSideMenu
    ? "min-[1060px]:block hidden pt-4 pb-3"
    : "hidden max-[1059px]:block bg-bg-terminal border-b border-border-ide pb-3";

  const itemClass = isSideMenu
    ? "flex items-center px-2 py-1.5 cursor-pointer"
    : "flex items-center px-8 py-1.5 cursor-pointer";

  const indicatorClass = isSideMenu
    ? "absolute bottom-[-3px] left-0 right-0 h-[2px] bg-orange-string"
    : "absolute bottom-[-5px] left-0 right-0 h-[3px] bg-orange-string";

  const buttonContainerClass = isSideMenu
    ? "px-2 pt-2"
    : "px-8 pt-2";

  return (
    <div className={containerClass}>
      {/* Onglets de navigation */}
      {[
        { name: "Projets", path: "/admin/projets", icon: projectsIcon },
        { name: "Nouveau", path: "/admin/nouveau", icon: newIcon }
      ].map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={itemClass}
        >
          <img src={navIcon} alt="Chevron" className="mr-1 w-4 h-4" />
          <div className="relative">
            <div className="flex items-center">
              <img
                src={tab.icon}
                alt={tab.name}
                className="mr-1 w-4 h-4"
              />
              <span
                className={`${
                  location.pathname.startsWith(tab.path)
                    ? "text-text-selected"
                    : "text-text-default"
                } text-sm`}
              >
                {tab.name}
              </span>
            </div>
            {location.pathname === tab.path && <div className={indicatorClass}></div>}
          </div>
        </NavLink>
      ))}

      {/* Bouton Connexion */}
      <div className={buttonContainerClass}>
        <button type="button" className="flex items-center px-2 py-1 cursor-pointer bg-red-500 hover:bg-red-600 rounded text-text-selected text-sm" onClick={() => {
          logout();
        }}>
          Déconnexion
        </button>
      </div>
    </div>
  );
}
