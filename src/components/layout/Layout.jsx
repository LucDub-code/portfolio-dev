import Header from "./Header"
import Footer from "./Footer"
import SideMenu from "./SideMenu"
import EditorContent from "./EditorContent"
import { useState, useEffect } from "react"
import { useNavigation } from "../context/NavigationContext"

export default function Layout() {
  
  // État pour détecter si on est en mode mobile
  const [isMobile, setIsMobile] = useState(false);
  // État pour suivre si l'initialisation est terminée
  const [isInitialized, setIsInitialized] = useState(false);
  // Récupérer la page active et l'état du menu mobile depuis le contexte
  const { activePage, isMobileMenuOpen } = useNavigation();
  
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
  
  // Attendre l'initialisation avant d'afficher le footer
  if (!isInitialized) {
    return (
      <div className="h-screen w-full bg-bg-ui flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          {!isMobile && <SideMenu />}
          <EditorContent className="overflow-auto" />
        </div>
      </div>
    );
  }
  
  return (
    <div className="h-screen w-full bg-bg-ui flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* SideMenu uniquement en desktop */}
        {!isMobile && <SideMenu />}
        <EditorContent className="overflow-auto" />
      </div>
      {/* Footer conditionnel : 
         - En desktop: visible sur toutes les pages sauf hello-world
         - En mobile: visible uniquement quand MobileMenu est ouvert */}
      {(!isMobile && activePage !== 'hello-world') || (isMobile && isMobileMenuOpen) ? <Footer /> : null}
    </div>
  );
}