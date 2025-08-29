import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import StatusBar from "../statusBar/StatusBar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  // État pour détecter si on est en mode mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  // État pour détecter si l'écran est assez grand en hauteur
  const [isLargeHeight, setIsLargeHeight] = useState(window.innerHeight > 950);
  // État pour le menu mobile (centralisé ici)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Récupérer l'URL actuelle pour savoir sur quelle page on est
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Effet pour mettre à jour isMobile et isLargeHeight lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
      setIsLargeHeight(window.innerHeight > 950);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen w-full bg-bg-ui flex flex-col overflow-hidden">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        {/* SideMenu uniquement en desktop */}
        {!isMobile && <SideMenu />}
        {/* Le contenu vient de React Router */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-auto">{children}</div>
          {/* StatusBar géré globalement ici */}
          <StatusBar isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </div>
      {/* Footer visible en desktop sauf sur page d'accueil avec petit écran */}
      {!isMobile && (!isHomePage || isLargeHeight) && <Footer />}
    </div>
  );
}
