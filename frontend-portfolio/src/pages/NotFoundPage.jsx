import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import banIcon from "../assets/icons/navigation/ban.svg";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col h-full">
      {/* En-tête mobile */}
      <div className="hidden max-[1060px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="mr-2 w-4 h-4" />
        <img src={banIcon} alt="Dossier" className="mr-2 w-5 h-5" />
        <span className="text-base text-text-default">_not-found.html</span>
      </div>

      {/* Contenu 404 */}
      <div className="flex flex-1 justify-center items-center">
        <div className="text-center transform -translate-y-1/16">
          <h1 className="text-8xl font-bold text-text-default pb-4">404</h1>
          <p className="text-xl text-text-default pb-12">Page introuvable</p>
          <a 
            href="/" 
            className="px-6 py-3 bg-blue-accent text-text-selected rounded hover:bg-focus-hover transition-colors"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  )
}