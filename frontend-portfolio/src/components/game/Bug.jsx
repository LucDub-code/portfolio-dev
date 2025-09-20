import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import checkAnimation from "../../assets/animations/check.json";
import "./Bug.css"; // Nous allons créer ce fichier CSS

export default function Bug({
  type,
  position,
  onBugClick,
  removeAfterMs = 1500,
}) {
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
    undefined: { text: "undefined", className: "text-orange-string" },
  };

  const bugStyle = bugTypes[type] || bugTypes.error;

  // Gérer le clic sur le bug
  const handleClick = () => {
    if (isVisible) {
      setShowAnimation(true);
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

  // Ajuster la position Y pour les écrans mobiles
  const adjustedPosition = {
    x: position.x,
    y:
      window.innerWidth <= 770
        ? Math.min(Math.max(position.y, 15), 65)
        : position.y,
  };

  return (
    <div
      className={`absolute cursor-pointer text-lg sm:text-xl md:text-2xl font-mono bug-appear ${bugStyle.className}`}
      style={{
        left: `${adjustedPosition.x}%`,
        top: `${adjustedPosition.y}%`,
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.3s",
        opacity: isVisible ? 1 : 0,
        position: "absolute",
      }}
      onClick={handleClick}
    >
      {showAnimation ? (
        <div
          className="lottie-container"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "70px",
            height: "70px",
          }}
        >
          <Lottie
            animationData={checkAnimation}
            loop={false}
            autoplay={true}
            style={{ width: "110%", height: "110%" }}
          />
        </div>
      ) : (
        <span className="bug-text">{bugStyle.text}</span>
      )}
    </div>
  );
}
