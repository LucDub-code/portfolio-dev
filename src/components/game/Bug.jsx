import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import checkAnimation from '../../assets/animations/check.json';
import './Bug.css'; // Nous allons créer ce fichier CSS

export default function Bug({ type, position, onBugClick, removeAfterMs = 1500 }) {
  const [isVisible, setIsVisible] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  
  // Définir les types de bugs et leurs styles
  const bugTypes = {
    braces: { text: "{ }", className: "text-blue-html" },
    exclamation: { text: "!!", className: "text-pink-keyword" },
    error: { text: "error", className: "text-error-foreground" },
    tag: { text: "</>", className: "text-blue-html" },
    nan: { text: "NaN", className: "text-orange-string" },
    notFound: { text: "404", className: "text-green-number" },
    question: { text: "???", className: "text-gold-css" },
    undefined: { text: "undefined", className: "text-orange-string" }
  };
  
  const bugStyle = bugTypes[type] || bugTypes.error;
  
  // Gérer le clic sur le bug
  const handleClick = () => {
    if (isVisible) {
      setShowAnimation(true);
      setIsVisible(false);
      onBugClick(type);
    }
  };
  
  // Rendre le bug invisible après un certain délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, removeAfterMs);
    
    return () => clearTimeout(timer);
  }, [removeAfterMs]);
  
  // Supprimer l'animation après qu'elle soit jouée
  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 1000); // Durée de l'animation
      
      return () => clearTimeout(timer);
    }
  }, [showAnimation]);

  if (!isVisible && !showAnimation) return null;

  return (
    <div 
      className={`absolute cursor-pointer text-xl sm:text-2xl md:text-3xl font-mono bug-appear ${bugStyle.className}`}
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.3s',
        opacity: isVisible ? 1 : 0
      }}
      onClick={handleClick}
    >
      {showAnimation ? (
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
          <Lottie 
            animationData={checkAnimation} 
            loop={false}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ) : (
        <span className="bug-text">{bugStyle.text}</span>
      )}
    </div>
  );
}