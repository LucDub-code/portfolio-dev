import { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import ScoreCounter from './ScoreCounter'
import TimeCounter from './TimeCounter'
import GameButton from './GameButton'
import Bug from './Bug'
import './BugSquashGame.css'

export default function BugSquashGame() {
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [bugs, setBugs] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [buttonKey, setButtonKey] = useState(0); // Clé pour forcer le remontage
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const gameAreaRef = useRef(null);
  
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
  
  // Obtenir les classes appropriées en fonction de la taille d'écran
  const getTitleSizeClass = () => {
    if (windowWidth <= 321) return "text-lg";
    if (windowWidth <= 376) return "text-xl";
    if (windowWidth <= 426) return "text-xl";
    return "text-2xl";
  };
  
  const getTextSizeClass = () => {
    if (windowWidth <= 321) return "text-xs";
    if (windowWidth <= 376) return "text-sm";
    if (windowWidth <= 426) return "text-sm";
    return "text-base";
  };
  
  const getScoreSizeClass = () => {
    if (windowWidth <= 321) return "text-sm";
    if (windowWidth <= 376) return "text-base";
    if (windowWidth <= 426) return "text-base";
    return "text-lg";
  };
  
  const getButtonSizeClass = () => {
    if (windowWidth <= 321) return "text-xs py-1 px-3";
    if (windowWidth <= 376) return "text-sm py-1.5 px-3";
    if (windowWidth <= 426) return "text-sm py-2 px-4";
    return "py-2 px-4";
  };
  
  // Types de bugs
  const bugTypes = [
    'braces',
    'exclamation',
    'error',
    'tag',
    'nan',
    'notFound',
    'question',
    'undefined'
  ];
  
  // Démarrer le jeu
  const handleGameStart = useCallback(() => {
    setGameActive(true);
    setGameOver(false);
    setScore(0);
    setBugs([]);
  }, []);
  
  // Gérer la fin du jeu
  const handleTimeUp = useCallback(() => {
    setGameActive(false);
    setGameOver(true);
    setFinalScore(score);
    setBugs([]);
    setButtonKey(prevKey => prevKey + 1); // Incrémenter la clé pour forcer le remontage
  }, [score]);
  
  // Gérer le clic sur un bug
  const handleBugClick = useCallback((bugId) => {
    setScore(prevScore => prevScore + 1);
    // Délai avant de supprimer le bug pour permettre à l'animation de se jouer
    setTimeout(() => {
      setBugs(prevBugs => prevBugs.filter(bug => bug.id !== bugId));
    }, 1000);
  }, []);
  
  // Générer une position aléatoire dans la zone de jeu centrée
  const getRandomPosition = () => {
    // Limiter la zone de spawn à une zone centrale de 60% x 60% de l'écran
    return {
      x: Math.random() * 60 + 20, // entre 20% et 80% de la largeur
      y: Math.random() * 60 + 20  // entre 20% et 80% de la hauteur
    };
  };
  
  // Créer un nouveau bug avec un ID unique et un type aléatoire
  const createBug = () => {
    return {
      id: Date.now() + Math.random(),
      type: bugTypes[Math.floor(Math.random() * bugTypes.length)],
      position: getRandomPosition(),
      // Temps de vie aléatoire entre 1.2 et 2.5 secondes
      lifespan: Math.random() * 1300 + 1200
    };
  };
  
  // Générer des bugs pendant que le jeu est actif
  useEffect(() => {
    if (!gameActive) return;
    
    // Générer un bug toutes les 0.5 à 1 seconde
    const generateInterval = setInterval(() => {
      // Limiter le nombre de bugs simultanés à 6 pour éviter de surcharger l'écran
      if (bugs.length < 6) {
        setBugs(prevBugs => [...prevBugs, createBug()]);
      }
    }, Math.random() * 500 + 500);
    
    return () => clearInterval(generateInterval);
  }, [gameActive, bugs.length]);
  
  return (
    <div className="relative w-full h-full" ref={gameAreaRef}>
      <div className="absolute top-4 left-4">
        <TimeCounter 
          isActive={gameActive} 
          onTimeUp={handleTimeUp}
          timeLimit={20}
        />
      </div>
      <div className="absolute top-4 right-4">
        <ScoreCounter score={score} gameActive={gameActive} />
      </div>
      
      {/* Zone de jeu centrale */}
      <div className="game-area absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Bouton START */}
        {!gameActive && !gameOver && (
          <div className="game-button-wrapper absolute flex items-center justify-center" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <GameButton key={buttonKey} onGameStart={handleGameStart} />
          </div>
        )}
        
        {/* Écran de fin de jeu */}
        {gameOver && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm">
            <h2 className={`text-green-number font-mono ${getTitleSizeClass()} mb-2 sm:mb-3`}>Bravo !</h2>
            <div className={`text-text-default font-mono ${getTextSizeClass()} mb-3 sm:mb-5 w-full`}>
              <div>Vous m'avez aidé</div>
              <div className={getScoreSizeClass()}>
                à corriger <span className="text-orange-string">{finalScore}</span> bugs !
              </div>
            </div>
            <button 
              className={`${getButtonSizeClass()} bg-bg-terminal border border-blue-html text-text-default font-mono hover:bg-blue-html hover:bg-opacity-20 transition-colors`}
              onClick={() => {
                setGameOver(false);
                setScore(0);
                setBugs([]);
                setButtonKey(prevKey => prevKey + 1);
              }}
            >
              REJOUER
            </button>
          </div>
        )}
        
        {/* Bugs du jeu */}
        {bugs.map(bug => (
          <Bug 
            key={bug.id}
            type={bug.type}
            position={bug.position}
            removeAfterMs={bug.lifespan}
            onBugClick={() => handleBugClick(bug.id)}
          />
        ))}
      </div>
    </div>
  )
}