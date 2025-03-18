import { useNavigation } from '../context/NavigationContext'
import { useState, useEffect } from 'react'

export default function StatusBar() {
  const { activePage } = useNavigation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Fonction pour détecter si l'écran est en mode mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    // Vérifier au chargement
    checkIfMobile()
    
    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', checkIfMobile)
    
    // Nettoyer l'écouteur
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const statusMessages = {
    'hello-world': '// Cliquez sur les bugs pour les corriger',
    'a-propos': '// Utilisez les onglets pour naviguer',
    'projets': '// Revenez bientôt pour découvrir mes nouveaux projets',
    'contact': '// Utilisez ce formulaire pour me contacter'
  }

  // Déterminer les classes CSS à appliquer en fonction de la page active et du mode (mobile/desktop)
  const getTextClasses = () => {
    if (activePage === 'projets' && isMobile) {
      return 'text-xs' // taille de texte plus petite sur mobile pour la page projets
    }
    return 'text-sm' // taille normale pour les autres cas
  }

  return (
    <div className={`h-6 bg-statusBar-background border-t border-border-ide text-text-default px-4 flex items-center justify-center ${getTextClasses()}`}>
      {statusMessages[activePage]}
    </div>
  )
}