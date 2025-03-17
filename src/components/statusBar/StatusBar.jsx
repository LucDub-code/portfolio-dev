import { useNavigation } from '../context/NavigationContext'

export default function StatusBar() {
  const { activePage } = useNavigation()

  const statusMessages = {
    'hello-world': '// Cliquez sur les bugs pour les corriger',
    'a-propos': '// Utilisez les onglets pour naviguer',
    'projets': '// Revenez bientôt pour découvrir mes nouveaux projets',
    'contact': '// Utilisez ce formulaire pour me contacter'
  }

  return (
    <div className="h-6 bg-statusBar-background border-t border-border-ide text-text-default text-sm px-4 flex items-center justify-center">
      {statusMessages[activePage]}
    </div>
  )
}