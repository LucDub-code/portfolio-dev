import { NavLink } from "react-router-dom";
import { pagesData } from "../../data/navigationData";
import { useState, useEffect } from "react";

export default function TabNavigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Surveiller les changements de taille de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mapping direct pages vers routes
  const pageRoutes = {
    "hello-world": "/",
    "a-propos": "/about",
    projets: "/projects",
    contact: "/contact",
  };

  // Séparer les onglets en deux groupes
  const leftTabs = ["hello-world", "a-propos", "projets"];
  const rightTab = "contact";

  return (
    <div className="flex-1 flex justify-between overflow-x-auto">
      {/* Onglets alignés à gauche */}
      <div className="flex">
        {leftTabs.map((tabId) => {
          const page = pagesData[tabId];
          const route = pageRoutes[tabId];
          return (
            <NavLink
              key={page.id}
              to={route}
              end={tabId !== "a-propos"}
              className={({ isActive }) =>
                `flex items-center px-4 h-12 cursor-pointer border-r border-border-ide ${
                  isActive
                    ? "bg-bg-terminal border-b-[3px] border-b-blue-accent"
                    : "hover:bg-slate-800 border-b border-border-ide"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={page.icon}
                    alt={page.title}
                    className="w-4 h-4 mr-2"
                  />
                  <span
                    className={
                      isActive ? "text-text-selected" : "text-text-default"
                    }
                  >
                    {page.title}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Onglet aligné à droite */}
      <div>
        {(() => {
          const page = pagesData[rightTab];
          const route = pageRoutes[rightTab];
          return (
            <NavLink
              key={page.id}
              to={route}
              end
              className={({ isActive }) =>
                `flex items-center px-4 h-12 cursor-pointer ${
                  windowWidth > 1060 ? "border-l border-border-ide" : ""
                } ${
                  isActive
                    ? "bg-bg-terminal border-b-[3px] border-b-blue-accent"
                    : "hover:bg-slate-800 border-b border-border-ide"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={page.icon}
                    alt={page.title}
                    className="w-4 h-4 mr-2"
                  />
                  <span
                    className={
                      isActive ? "text-text-selected" : "text-text-default"
                    }
                  >
                    {page.title}
                  </span>
                </>
              )}
            </NavLink>
          );
        })()}
      </div>
    </div>
  );
}
