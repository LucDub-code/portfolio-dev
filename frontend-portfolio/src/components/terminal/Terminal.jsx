import TerminalHeader from './TerminalHeader'
import BugSquashGame from '../game/BugSquashGame'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Terminal({ className }) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 770);
  const [isLargeHeight, setIsLargeHeight] = useState(window.innerHeight > 950);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
      setIsLargeHeight(window.innerHeight > 950);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Déterminer si le header doit être affiché
  const shouldShowHeader = () => {
    // Si on n'est pas sur la page d'accueil, toujours afficher le header
    if (location.pathname !== '/') {
      return true;
    }
    
    // Si on est sur la page d'accueil, afficher seulement en desktop avec grand écran
    return !isMobile && isLargeHeight;
  };

  return (
    <div className={`flex flex-col bg-bg-terminal border-t border-border-ide ${className || ''}`}>
      {shouldShowHeader() && <TerminalHeader />}
      <div className="flex-1 flex justify-center items-center">
        <BugSquashGame />
      </div>
    </div>
  )
}