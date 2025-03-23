import Header from "./Header"
import Footer from "./Footer"
import SideMenu from "./SideMenu"
import EditorContent from "./EditorContent"
import { useState, useEffect } from "react"
import { useNavigation } from "../context/NavigationContext"

export default function Layout() {
  
  // État pour détecter si on est en mode mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  // Récupérer la page active et l'état du menu mobile depuis le contexte
  const { activePage, isMobileMenuOpen } = useNavigation();
  
  // Effet pour mettre à jour isMobile lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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