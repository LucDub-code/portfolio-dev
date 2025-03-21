import { useState, useEffect, useRef } from 'react';

export default function TimeCounter({ timeLimit = 30, isActive = false, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const timerInitializedRef = useRef(false);
  
  // Réinitialiser et démarrer le timer quand isActive change
  useEffect(() => {
    // Si le jeu n'est pas actif, réinitialiser le temps et la référence
    if (!isActive) {
      setTimeLeft(timeLimit);
      timerInitializedRef.current = false;
      return;
    }
    
    // Ne réinitialiser le temps que si le timer n'a pas déjà été initialisé
    if (!timerInitializedRef.current) {
      setTimeLeft(timeLimit);
      timerInitializedRef.current = true;
    }
    
    // Démarrer le compte à rebours immédiatement
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          // Signaler la fin du temps
          if (onTimeUp) {
            setTimeout(() => onTimeUp(), 0);
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    // Nettoyer le timer quand le composant est démonté ou quand isActive change
    return () => clearInterval(timer);
  }, [isActive, timeLimit, onTimeUp]);
  
  // Déterminer la couleur en fonction du temps restant
  const getTimeColor = () => {
    if (timeLeft <= 3) return "text-error-foreground";
    if (timeLeft <= 6) return "text-orange-string";
    return "text-text-default";
  };
  
  return (
    <div className="flex items-center">
      <span className="text-blue-html font-mono font-bold text-base mr-1">Temps:</span>
      <span className={`font-mono text-base ${getTimeColor()}`}>{timeLeft}</span>
    </div>
  );
}