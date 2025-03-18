import { useState } from 'react';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import closeIcon from "../../assets/icons/close.svg"
import MobileMenu from '../navigation/MobileMenu';
// import TabNavigation from '../navigation/TabNavigation';

export default function Header() {

  // État pour contrôler l'ouverture/fermeture du menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fonction pour contrôler l'ouverture/fermeture du menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="border-b border-border-ide w-full bg-bg-terminal text-text-default px-4 py-2 flex justify-between items-center h-12">
      <p className="font-medium text-lg ml-1">lucas-dubeau</p>
      <button 
      className="md:hidden w-8 h-8 flex items-center justify-center focus:outline-none text-text-default"
      onClick={toggleMobileMenu}
      >
        <img 
          src={isMobileMenuOpen ? closeIcon : hamburgerIcon} 
          alt={isMobileMenuOpen ? "Fermer menu" : "Ouvrir menu"} 
          width="24" 
          height="24" 
        />
      </button>
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
    </div>
  )
}