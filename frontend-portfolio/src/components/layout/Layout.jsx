import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import StatusBar from "./StatusBar";
import FileHeader from "../editor/FileHeader";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1060);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 425);
  const [isLargeHeight, setIsLargeHeight] = useState(window.innerHeight > 950);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { authLoading } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1060);
      setIsSmallMobile(window.innerWidth <= 425);
      setIsLargeHeight(window.innerHeight > 950);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-bg-ui">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && <SideMenu />}

        <div className="flex flex-col flex-1 overflow-hidden">
          {(!isSmallMobile) &&
            ((!isMobile) || isHomePage) &&
            !(location.pathname === "/admin" && authLoading) && <FileHeader />}

          <div className="flex-1 overflow-auto">{children}</div>

          <StatusBar isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </div>
      {!isMobile && (!isHomePage || isLargeHeight) && <Footer />}
    </div>
  );
}
