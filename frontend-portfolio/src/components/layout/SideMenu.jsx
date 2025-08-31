import AboutNavigation from '../about/AboutNavigation';
import ProjectFilters from '../projects/ProjectFilters';
import { useLocation } from 'react-router-dom';

export default function SideMenu() {
  const location = useLocation();
  
  return (
    <div className="w-50 min-w-50 max-w-50 overflow-hidden border-r border-border-ide bg-bg-terminal text-text-default px-4">
      {/* Navigation par onglets pour About - uniquement visible quand on est sur /about */}
      {location.pathname === '/about' && (
        <AboutNavigation isSideMenu={true} />
      )}
      {/* Filtres pour les projets - uniquement visible quand on est sur /projects */}
      {location.pathname === '/projects' && (
        <ProjectFilters isSideMenu={true} />
      )}
    </div>
  )
}