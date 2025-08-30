import folderIcon from "../assets/icons/navigation/folder.svg";
import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import BioContent from "../components/about/BioContent";
import InteretsContent from "../components/about/InteretsContent";
import EducationContent from "../components/about/EducationContent";
import AboutNavigation from "../components/about/AboutNavigation";
import { useAboutContext } from "../contexts/AboutContext";

export default function AboutPage() {
  const { activeTab } = useAboutContext();

  return (
    <div className="flex flex-col h-full">
      {/* En-tête mobile (caché sur desktop où FileHeader prend le relais) */}
      <div className="hidden max-[1060px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="w-4 h-4 mr-2" />
        <img src={folderIcon} alt="Dossier" className="w-4 h-4 mr-2" />
        <span className="text-text-default text-base">_a-propos-de-moi</span>
      </div>

      {/* Navigation par onglets - uniquement visible sur mobile */}
      <AboutNavigation />

      {/* Zone de contenu*/}
      <div className="flex-1 overflow-auto p-4">
        {/* Nous rendons tous les composants mais avec isActive pour contrôler l'animation */}
        <div style={{ display: activeTab === "bio" ? "block" : "none" }}>
          <BioContent isActive={activeTab === "bio"} />
        </div>
        <div style={{ display: activeTab === "interets" ? "block" : "none" }}>
          <InteretsContent isActive={activeTab === "interets"} />
        </div>
        <div style={{ display: activeTab === "education" ? "block" : "none" }}>
          <EducationContent isActive={activeTab === "education"} />
        </div>
      </div>
    </div>
  );
}
