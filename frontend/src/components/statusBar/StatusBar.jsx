import { useNavigation } from '../context/NavigationContext'
import { useState, useEffect } from 'react'

export default function StatusBar() {
  const { activePage, isMobileMenuOpen } = useNavigation()
  const [isMobile, setIsMobile] = useState(false)
  const [isVerySmall, setIsVerySmall] = useState(false)
  const [isTinyScreen, setIsTinyScreen] = useState(false)

  useEffect(() => {
    // Fonction pour détecter si l'écran est en mode mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 769)
      setIsVerySmall(window.innerWidth <= 376)
      setIsTinyScreen(window.innerWidth <= 321)
    }
    
    // Vérifier au chargement
    checkIfMobile()
    
    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', checkIfMobile)
    
    // Nettoyer l'écouteur
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Ne pas afficher la barre de statut si le menu mobile est ouvert
  if (isMobile && isMobileMenuOpen) {
    return null;
  }

  const statusMessages = {
    'hello-world': '// Cliquez sur les bugs pour les corriger',
    'a-propos': '// Utilisez les onglets pour naviguer',
    'projets': '// Revenez bientôt pour découvrir mes nouveaux projets',
    'contact': '// Utilisez ce formulaire pour me contacter'
  }

  // Déterminer la classe de taille de texte en fonction de la taille d'écran
  const getTextClass = () => {
    if (isTinyScreen) {
      return 'text-[0.55rem]' // Équivalent à environ 9px, encore plus petit
    }
    if (isVerySmall) {
      return 'text-[0.625rem]' // Équivalent à 10px, plus petit que xs
    }
    return isMobile ? 'text-xs' : 'text-sm'
  }

  // Déterminer la hauteur de la barre de statut en fonction de la taille d'écran
  const getHeightClass = () => {
    if (isTinyScreen) {
      return 'h-3' // 0.75rem ou 12px
    }
    if (isVerySmall || isMobile) {
      return 'h-4' // 1rem ou 16px
    }
    return 'h-5' // 1.25rem ou 20px (taille par défaut)
  }
  
  // Déterminer si on utilise la position fixe en mode mobile
  const getPositionClass = () => {
    return isMobile ? 'fixed bottom-0 left-0 right-0 z-50' : '';
  }

  return (
    <div className={`${getHeightClass()} bg-statusBar-background border-t border-border-ide text-text-default px-4 flex items-center justify-center ${getTextClass()} ${getPositionClass()}`}>
      {statusMessages[activePage]}
    </div>
  )
}