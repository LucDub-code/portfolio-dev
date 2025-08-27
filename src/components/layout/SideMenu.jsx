import AboutNavigation from '../about/AboutNavigation';
import { useNavigation } from '../context/NavigationContext';

export default function SideMenu() {
  const { activePage } = useNavigation();
  
  return (
    <div className="w-50 min-w-50 max-w-50 overflow-hidden border-r border-border-ide bg-bg-terminal text-text-default px-4">
      {/* Navigation par onglets pour About - uniquement visible quand la page "à propos" est active */}
      {activePage === 'a-propos' && (
        <AboutNavigation isSideMenu={true} />
      )}
    </div>
  )
}