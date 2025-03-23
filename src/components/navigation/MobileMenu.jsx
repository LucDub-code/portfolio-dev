import { useNavigation } from '../context/NavigationContext';
import { pages } from '../data/navigationData';
import chevronRight from '../../assets/icons/navigation/nav-full.svg';

export default function MobileMenu({ onClose }) {
  const { activePage, setActivePage } = useNavigation();
  
  // Fonction pour gérer la navigation
  const handleNavigation = (pageId) => {
    setActivePage(pageId);
    onClose(); // Ferme le menu après la sélection
  };

  return (
    <div className="fixed inset-0 top-12 z-40 flex flex-col">
      <div className="w-full bg-bg-terminal shrink-0">
        {Object.values(pages).map((page) => (
          <div 
            key={page.id} 
            className={`flex items-center p-3 border-b border-border-ide cursor-pointer ${
              activePage === page.id ? 'bg-slate-800' : ''
            }`}
            onClick={() => handleNavigation(page.id)}
          >
            <img src={chevronRight} alt="Chevron" className="w-4 h-4 mr-2" />
            <img src={page.icon} alt={`Icône ${page.title}`} className="w-6 h-6 mr-2" />
            <span className={activePage === page.id ? "text-text-selected" : "text-text-default"}>{page.title}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-bg-ui" style={{ height: 'calc(100vh - 12rem - 3rem)' }}></div>
    </div>
  );
}