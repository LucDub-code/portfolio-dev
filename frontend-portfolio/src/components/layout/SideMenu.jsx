import AboutNavigation from '../about/AboutNavigation';
import ProjectsFilters from '../projects/ProjectsFilters';
import AdminNavigation from '../admin/AdminNavigation';
import { useLocation, useMatch } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function SideMenu() {

  const location = useLocation();

  const { isAuthenticated, authLoading } = useAuth();
  
  return (
    <div className="w-50 min-w-50 max-w-50 overflow-hidden border-r border-border-ide bg-bg-terminal text-text-default px-4">
      {/* Navigation par onglets pour About - uniquement visible quand on est sur /about */}
      {location.pathname.startsWith('/about') && (
        <AboutNavigation isSideMenu={true} />
      )}
      {/* Filtres pour les projets - uniquement visible quand on est sur /projects */}
      {location.pathname === '/projects' && (
        <ProjectsFilters isSideMenu={true} />
      )}
      {/* Navigation du mode admin - uniquement visible quand on est sur /admin */}
      {useMatch('/admin/*') && isAuthenticated && !authLoading && (
        <AdminNavigation isSideMenu={true} />
      )}
    </div>
  )
}