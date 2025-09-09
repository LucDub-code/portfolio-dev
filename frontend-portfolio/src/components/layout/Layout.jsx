import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import StatusBar from "../statusBar/StatusBar";
import FileHeader from "../editor/FileHeader";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1060);
  const [isLargeHeight, setIsLargeHeight] = useState(window.innerHeight > 950);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { authLoading } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1060);
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
        {!isMobile && <SideMenu />}

        <div className="flex flex-col flex-1 overflow-hidden">
          {(!isMobile || location.pathname === "/") &&
            !(location.pathname === "/admin" && authLoading) && <FileHeader />}

          <div className="flex-1 overflow-auto">{children}</div>

          <StatusBar isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </div>
      {!isMobile && (!isHomePage || isLargeHeight) && <Footer />}
    </div>
  );
}
