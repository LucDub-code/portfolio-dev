import { useNavigation } from '../context/NavigationContext';
import { pages } from '../data/navigationData';

export default function TabNavigation() {
  const { activePage, setActivePage } = useNavigation();
  
  // Séparer les onglets en deux groupes
  const leftTabs = ['hello-world', 'a-propos', 'projets'];
  const rightTab = 'contact';
  
  return (
    <div className="flex-1 flex justify-between overflow-x-auto">
      {/* Onglets alignés à gauche */}
      <div className="flex">
        {leftTabs.map((tabId) => {
          const page = pages[tabId];
          return (
            <div 
              key={page.id}
              className={`flex items-center px-4 h-12 cursor-pointer border-r border-border-ide ${
                activePage === page.id ? 'bg-bg-terminal' : 'hover:bg-slate-800'
              }`}
              onClick={() => setActivePage(page.id)}
            >
              <img src={page.icon} alt={page.title} className="w-4 h-4 mr-2" />
              <span className={activePage === page.id ? "text-text-selected" : "text-text-default"}>{page.title}</span>
            </div>
          );
        })}
      </div>
      
      {/* Onglet aligné à droite */}
      <div>
        {(() => {
          const page = pages[rightTab];
          return (
            <div 
              key={page.id}
              className={`flex items-center px-4 h-12 cursor-pointer border-l border-border-ide ${
                activePage === page.id ? 'bg-bg-terminal' : 'hover:bg-slate-800'
              }`}
              onClick={() => setActivePage(page.id)}
            >
              <img src={page.icon} alt={page.title} className="w-4 h-4 mr-2" />
              <span className={activePage === page.id ? "text-text-selected" : "text-text-default"}>{page.title}</span>
            </div>
          );
        })()}
      </div>
    </div>
  );
}