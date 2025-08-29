import { NavLink } from "react-router-dom";
import { pages } from "../../data/navigationData";
import chevronRight from "../../assets/icons/navigation/nav-full.svg";

export default function MobileMenu({ onClose }) {
  // Mapping direct pages vers routes
  const pageRoutes = {
    "hello-world": "/",
    "a-propos": "/about",
    projets: "/projects",
    contact: "/contact",
  };

  return (
    <div className="fixed inset-0 top-12 z-40 flex flex-col">
      <div className="w-full bg-bg-terminal shrink-0">
        {Object.values(pages).map((page) => {
          const route = pageRoutes[page.id];
          return (
            <NavLink
              key={page.id}
              to={route}
              onClick={onClose} // Ferme le menu après la sélection
              className={({ isActive }) =>
                `flex items-center p-3 border-b border-border-ide cursor-pointer ${
                  isActive ? "bg-slate-800" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={chevronRight}
                    alt="Chevron"
                    className="w-4 h-4 mr-2"
                  />
                  <img
                    src={page.icon}
                    alt={`Icône ${page.title}`}
                    className="w-6 h-6 mr-2"
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
      <div
        className="flex-1 bg-bg-ui"
        style={{ height: "calc(100vh - 12rem - 3rem)" }}
      ></div>
    </div>
  );
}
