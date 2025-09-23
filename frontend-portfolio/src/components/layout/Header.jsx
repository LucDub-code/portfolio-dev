import { useState, useEffect } from "react";
import hamburgerIcon from "../../assets/icons/hamburger.svg";
import closeIcon from "../../assets/icons/close.svg";
import MobileMenu from "../navigation/MobileMenu";
import TabNavigation from "../navigation/TabNavigation";

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1060);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1060);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="border-b border-border-ide w-full bg-bg-terminal text-text-default flex items-center h-12 max-[425px]:h-10">
      <div
        className={`w-50 min-w-50 max-w-50 overflow-hidden ${
          !isMobile ? "border-r border-border-ide" : ""
        } h-full flex items-center px-4`}
      >
        <p
          className={`font-medium truncate ${
            isMobile ? "text-base" : "text-lg"
          }`}
        >
          lucas-dubeau
        </p>
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
  );
}
