import AboutNavigation from '../about/AboutNavigation';
import { useLocation } from 'react-router-dom';

export default function SideMenu() {
  const location = useLocation();
  
  return (
    <div className="w-50 min-w-50 max-w-50 overflow-hidden border-r border-border-ide bg-bg-terminal text-text-default px-4">
      {/* Navigation par onglets pour About - uniquement visible quand on est sur /about */}
      {location.pathname === '/about' && (
        <AboutNavigation isSideMenu={true} />
      )}
    </div>
  )
}