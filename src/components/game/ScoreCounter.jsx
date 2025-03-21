import { useEffect } from 'react';

export default function ScoreCounter({ score = 0, gameActive = false }) {
  // Le score est passé en prop depuis le composant parent
  
  return (
    <div className="flex items-center">
      <span className="text-green-number font-mono font-bold text-base mr-1">Score:</span>
      <span className="text-text-default font-mono text-base">{score}</span>
    </div>
  );
}