import TerminalHeader from './TerminalHeader'
import BugSquashGame from '../game/BugSquashGame'
import { useNavigation } from '../context/NavigationContext'
import { useState, useEffect } from 'react'

export default function Terminal({ className }) {
  const { activePage } = useNavigation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [isLargeHeight, setIsLargeHeight] = useState(window.innerHeight > 950);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
      setIsLargeHeight(window.innerHeight > 950);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Déterminer si le header doit être affiché
  const shouldShowHeader = () => {
    if (activePage !== 'hello-world') {
      return true;
    }
    
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