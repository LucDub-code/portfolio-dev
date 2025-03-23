import Header from "./Header"
import Footer from "./Footer"
import SideMenu from "./SideMenu"
import EditorContent from "./EditorContent"
import { useState, useEffect } from "react"
import { useNavigation } from "../context/NavigationContext"

export default function Layout() {
  
  // État pour détecter si on est en mode mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  // Récupérer la page active
  const { activePage } = useNavigation();
  // État pour suivre l'état du menu mobile (synchronisé avec le Header)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Effet pour mettre à jour isMobile lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Méthode pour mise à jour de l'état du menu mobile
  const setMobileMenuState = (isOpen) => {
    setIsMobileMenuOpen(isOpen);
  };
  
  return (
    <div className="h-screen w-full bg-bg-ui flex flex-col overflow-hidden">
      <Header onMobileMenuChange={setMobileMenuState} />
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