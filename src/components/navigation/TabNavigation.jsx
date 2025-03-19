import { useNavigation } from '../context/NavigationContext';
import { pages } from '../data/navigationData';
import { useState, useEffect } from 'react';

export default function TabNavigation() {
  const { activePage, setActivePage } = useNavigation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Surveiller les changements de taille de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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
                activePage === page.id 
                  ? 'bg-bg-terminal border-b-[3px] border-b-blue-accent' 
                  : 'hover:bg-slate-800 border-b border-border-ide'
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
              className={`flex items-center px-4 h-12 cursor-pointer ${
                windowWidth > 1060 ? 'border-l border-border-ide' : ''
              } ${
                activePage === page.id 
                  ? 'bg-bg-terminal border-b-[3px] border-b-blue-accent' 
                  : 'hover:bg-slate-800 border-b border-border-ide'
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