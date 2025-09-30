import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import banIcon from "../assets/icons/navigation/ban.svg";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col h-full">
      {/* En-tête mobile */}
      <div className="hidden max-[1060px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="w-4 h-4 mr-2" />
        <img src={banIcon} alt="Dossier" className="w-5 h-5 mr-2" />
        <span className="text-base text-text-default">_not-found.html</span>
      </div>

      {/* Contenu 404 */}
      <div className="flex items-center justify-center flex-1">
        <div className="text-center transform -translate-y-1/16">
          <h1 className="pb-4 font-bold text-8xl text-text-default">404</h1>
          <p className="pb-12 text-xl text-text-default">Page introuvable</p>
          <a
            href="/"
            className="px-6 py-3 transition-colors rounded bg-blue-accent text-text-selected hover:bg-focus-hover"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  )
}