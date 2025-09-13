import { useLocation } from "react-router-dom";
import { pagesData } from "../../data/navigationData";

export default function FileHeader() {
  const location = useLocation();

  // Mapping direct routes vers pages
  const routeToPageKey = {
    "/": "hello-world",
    "/about": "a-propos",
    "/about/bio": "a-propos",
    "/about/interets": "a-propos",
    "/about/education": "a-propos",
    "/projects": "projets",
    "/contact": "contact",
    "/login": "login",
    "/admin": "admin",
    "/admin/nouveau": "admin",
    "/admin/projets": "admin",
  };

  const currentPageKey = routeToPageKey[location.pathname] ||
    (location.pathname.startsWith('/admin/projets/') ? 'admin' : 'notFound');

  const currentPage = pagesData[currentPageKey];

  return (
    <div className="flex items-center pt-1 pb-1 px-2 text-text-default text-xs max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] sm:text-sm bg-bg-ui w-full border-b border-border-ide tracking-wide">
      <span className="text-gray-inactive mr-1">&gt;</span>
      {currentPage && (
        <div className="flex items-center">
          <img
            src={currentPage.icon}
            alt={`Icône ${currentPage.title}`}
            className="w-4 h-4 mr-1"
          />
          <span>{currentPage.title}</span>
        </div>
      )}
    </div>
  );
}
