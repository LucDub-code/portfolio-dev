import folderIcon from '../../assets/icons/navigation/folder.svg';
import chevronDown from '../../assets/icons/navigation/nav-full-down.svg';
import navIcon from '../../assets/icons/navigation/nav-light.svg';
import mdIcon from '../../assets/icons/technos/md.svg';
import BioContent from '../about/BioContent';
import InteretsContent from '../about/InteretsContent';
import EducationContent from '../about/EducationContent';
import AboutNavigation from '../about/AboutNavigation';
import { useAboutContext } from '../../context/AboutContext';

export default function AboutPage({ className }) {
  const { activeTab } = useAboutContext();

  return (
    <div className={`flex flex-col h-full ${className || ''}`}>
      {/* En-tête de la page */}
      <div className="hidden max-[426px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="w-4 h-4 mr-2" />
        <img src={folderIcon} alt="Dossier" className="w-4 h-4 mr-2" />
        <span className="text-text-default text-base">_a-propos-de-moi</span>
      </div>

      {/* Navigation par onglets - uniquement visible sur mobile */}
      <AboutNavigation />

      {/* Zone de contenu*/}
      <div className="flex-1 overflow-auto p-4">
        {activeTab === 'bio' && <BioContent />}
        {activeTab === 'interets' && <InteretsContent />}
        {activeTab === 'education' && <EducationContent />}
      </div>
    </div>
  );
}