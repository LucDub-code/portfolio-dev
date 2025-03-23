import { useState, useEffect } from 'react';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import closeIcon from "../../assets/icons/close.svg"
import MobileMenu from '../navigation/MobileMenu';
import TabNavigation from '../navigation/TabNavigation';
import { useNavigation } from '../context/NavigationContext';

export default function Header() {

  // Utilisation du contexte pour l'état du menu mobile
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useNavigation();

  // État pour détecter si on est en mode mobile
  const [isMobile, setIsMobile] = useState(false);
  // État pour suivre si l'initialisation est terminée
  const [isInitialized, setIsInitialized] = useState(false);

  // Effet pour mettre à jour isMobile lors du redimensionnement
  useEffect(() => {
    // Fonction pour vérifier la taille de l'écran
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 769);
    };
    
    // Première vérification avec un délai pour s'assurer que le navigateur a bien établi la taille
    const initialCheck = setTimeout(() => {
      checkIfMobile();
      setIsInitialized(true);
    }, 100);
    
    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', checkIfMobile);
    
    // Nettoyer
    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Fonction pour contrôler l'ouverture/fermeture du menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  
  // Fonction pour fermer le menu
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="border-b border-border-ide w-full bg-bg-terminal text-text-default flex items-center h-12">
      <div className={`w-50 min-w-50 max-w-50 overflow-hidden ${!isMobile ? 'border-r border-border-ide' : ''} h-full flex items-center px-4`}>
        <p className={`font-medium truncate ${isMobile ? 'text-base' : 'text-lg'}`}>lucas-dubeau</p>
      </div>

      {!isMobile && <TabNavigation />}
      
      {isMobile && (
        <button 
          className="ml-auto mr-4 w-8 h-8 flex items-center justify-center focus:outline-none text-text-default"
          onClick={toggleMobileMenu}
        >
          <img 
            src={isMobileMenuOpen ? closeIcon : hamburgerIcon} 
            alt={isMobileMenuOpen ? "Fermer menu" : "Ouvrir menu"} 
            width="24" 
            height="24" 
          />
        </button>
      )}
      
      {isMobileMenuOpen && <MobileMenu onClose={handleCloseMenu} />}
    </div>
  )
}