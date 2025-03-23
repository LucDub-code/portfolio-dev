import { useEffect, useState, useLayoutEffect } from 'react';

export default function ScoreCounter({ score = 0, gameActive = false }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Mise à jour de la largeur de fenêtre lors des redimensionnements
  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Déterminer les classes en fonction de la taille de l'écran
  const getTextSizeClasses = () => {
    if (windowWidth <= 321) {
      return 'text-[0.6rem]';
    } else if (windowWidth <= 376) {
      return 'text-[0.75rem]';
    } else if (windowWidth <= 426) {
      return 'text-[0.8rem]';
    } else {
      return 'text-sm sm:text-base';
    }
  };
  
  return (
    <div className="flex items-center mt-0.5">
      <span className={`text-green-number font-mono font-bold ${getTextSizeClasses()} mr-1`}>Score:</span>
      <span className={`text-text-default font-mono ${getTextSizeClasses()}`}>{score}</span>
    </div>
  );
}