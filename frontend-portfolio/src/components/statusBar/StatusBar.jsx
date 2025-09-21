import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function StatusBar({ isMobileMenuOpen = false }) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);
  const [isTinyScreen, setIsTinyScreen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 770);
      setIsVerySmall(window.innerWidth <= 380);
      setIsTinyScreen(window.innerWidth <= 320);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Ne pas afficher si le menu mobile est ouvert
  if (isMobile && isMobileMenuOpen) {
    return null;
  }

  const statusMessages = {
    "/": "// Posez votre question à Vigeo 🤖",
    "/about": "// Utilisez les onglets pour naviguer",
    "/projects": "// Découvrez mes projets et filtrez par technologie",
    "/contact": "// Utilisez ce formulaire pour me contacter",
  };

  const getTextClass = () => {
    if (isTinyScreen) return "text-[0.55rem]";
    if (isVerySmall) return "text-[0.625rem]";
    return isMobile ? "text-xs" : "text-sm";
  };

  const getHeightClass = () => {
    if (isTinyScreen) return "h-3";
    if (isVerySmall || isMobile) return "h-4";
    return "h-5";
  };

  const getPositionClass = () => {
    return isMobile ? "fixed bottom-0 left-0 right-0 z-50" : "";
  };

  return (
    <div
      className={`${getHeightClass()} bg-statusBar-background border-t border-border-ide text-text-default px-4 flex items-center justify-center ${getTextClass()} ${getPositionClass()}`}
    >
      {statusMessages[location.pathname] || statusMessages["/"]}
    </div>
  );
}
