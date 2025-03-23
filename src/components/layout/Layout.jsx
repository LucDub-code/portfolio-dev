import Header from "./Header"
import Footer from "./Footer"
import SideMenu from "./SideMenu"
import EditorContent from "./EditorContent"
import { useState, useEffect } from "react"
import { useNavigation } from "../context/NavigationContext"

export default function Layout() {
  
  // État pour détecter si on est en mode mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  // État pour détecter si l'écran est assez grand en hauteur
  const [isLargeHeight, setIsLargeHeight] = useState(window.innerHeight > 950);
  // Récupérer la page active depuis le contexte
  const { activePage } = useNavigation();
  
  // Effet pour mettre à jour isMobile et isLargeHeight lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
      setIsLargeHeight(window.innerHeight > 950);
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
      {/* Footer visible en desktop s'il ne s'agit pas de la page hello-world OU si on est sur hello-world avec un grand écran */}
      {!isMobile && (activePage !== 'hello-world' || isLargeHeight) && <Footer />}
    </div>
  );
}