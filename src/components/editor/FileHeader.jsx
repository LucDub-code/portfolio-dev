import { useNavigation } from '../context/NavigationContext';
import { pages } from '../data/navigationData';

export default function FileHeader() {
  const { activePage } = useNavigation();
  const currentPage = pages[activePage];
  
  // Reste du code inchangé
  return (
    <div className="flex items-center pt-1 pb-1 px-2 text-text-default text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm bg-bg-ui w-full border-b border-border-ide tracking-wide">
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