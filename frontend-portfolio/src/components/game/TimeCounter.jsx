import { useState, useEffect, useRef, useLayoutEffect } from 'react';

export default function TimeCounter({ timeLimit = 30, isActive = false, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const timerInitializedRef = useRef(false);
  const lastUpdateTimeRef = useRef(0);
  const requestAnimationFrameRef = useRef(null);
  
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
    if (windowWidth <= 320) {
      return 'text-[0.6rem]';
    } else if (windowWidth <= 380) {
      return 'text-[0.75rem]';
    } else if (windowWidth <= 425) {
      return 'text-[0.8rem]';
    } else {
      return 'text-sm sm:text-base';
    }
  };
  
  // Fonction de mise à jour du timer basée sur requestAnimationFrame
  const updateTimer = (currentTime) => {
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = currentTime;
    }
    
    // Mise à jour du temps toutes les secondes (1000ms)
    if (currentTime - lastUpdateTimeRef.current >= 1000) {
      lastUpdateTimeRef.current = currentTime;
      
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          // Signaler la fin du temps
          if (onTimeUp) {
            setTimeout(() => onTimeUp(), 0);
          }
          return 0;
        }
        return prevTime - 1;
      });
    }
    
    // Continue la boucle d'animation si le jeu est toujours actif
    if (isActive) {
      requestAnimationFrameRef.current = requestAnimationFrame(updateTimer);
    }
  };
  
  // Réinitialiser et démarrer le timer quand isActive change
  useEffect(() => {
    // Si le jeu n'est pas actif, réinitialiser le temps et la référence
    if (!isActive) {
      setTimeLeft(timeLimit);
      timerInitializedRef.current = false;
      lastUpdateTimeRef.current = 0;
      
      // Annuler toute animation en cours
      if (requestAnimationFrameRef.current) {
        cancelAnimationFrame(requestAnimationFrameRef.current);
        requestAnimationFrameRef.current = null;
      }
      return;
    }
    
    // Ne réinitialiser le temps que si le timer n'a pas déjà été initialisé
    if (!timerInitializedRef.current) {
      setTimeLeft(timeLimit);
      timerInitializedRef.current = true;
    }
    
    // Démarrer le compte à rebours avec requestAnimationFrame
    requestAnimationFrameRef.current = requestAnimationFrame(updateTimer);
    
    // Nettoyer l'animation quand le composant est démonté ou quand isActive change
    return () => {
      if (requestAnimationFrameRef.current) {
        cancelAnimationFrame(requestAnimationFrameRef.current);
        requestAnimationFrameRef.current = null;
      }
    };
  }, [isActive, timeLimit, onTimeUp]);
  
  // Déterminer la couleur en fonction du temps restant
  const getTimeColor = () => {
    if (timeLeft <= 3) return "text-error-foreground";
    if (timeLeft <= 6) return "text-orange-string";
    return "text-text-default";
  };
  
  return (
    <div className="flex items-center mt-0.5">
      <span className={`text-blue-html font-mono font-bold ${getTextSizeClasses()} mr-1`}>Temps:</span>
      <span className={`font-mono ${getTextSizeClasses()} ${getTimeColor()}`}>{timeLeft}</span>
    </div>
  );
}