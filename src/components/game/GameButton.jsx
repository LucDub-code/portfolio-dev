import './GameButton.css';
import { useState, useEffect } from 'react';

export default function GameButton({ onGameStart }) {
  const [clicked, setClicked] = useState(false);
  const [debugVisible, setDebugVisible] = useState(false);
  const [debugFadeOut, setDebugFadeOut] = useState(false);

  const handleClick = () => {
    setClicked(true);
    
    // Afficher le message DEBUG après un court délai
    setTimeout(() => {
      setDebugVisible(true);
      
      // Déclencher la disparition du message DEBUG après un délai
      setTimeout(() => {
        setDebugFadeOut(true);
        
        // Attendre que l'animation de disparition soit terminée avant de lancer le jeu
        setTimeout(() => {
          if (onGameStart) onGameStart();
        }, 600);
      }, 1200); // Le message reste visible pendant 1.2s
    }, 400); // Délai avant l'apparition du message
  };

  return (
    <div className="game-button-container">
      <button 
        className={`game-button ${clicked ? 'clicked' : ''}`} 
        onClick={handleClick}
        disabled={clicked}
      >
        START
      </button>
      <div className={`debug-message ${debugVisible ? 'visible' : ''} ${debugFadeOut ? 'fade-out' : ''}`}>
        DEBUG !
      </div>
    </div>
  );
}