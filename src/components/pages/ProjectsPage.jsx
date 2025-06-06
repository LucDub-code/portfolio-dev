import Lottie from "lottie-react";
import chevronDown from '../../assets/icons/navigation/nav-full-down.svg';
import jsonIcon from '../../assets/icons/technos/json.svg';
import constructionAnimation from '../../assets/animations/construction-animation.json';
// import mecaAnimation from '../../assets/animations/meca.json';

export default function ProjectsPage() {
  return (
    <div className={`flex flex-col h-full`}>
      {/* En-tête de la page */}
      <div className="hidden max-[769px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="w-4 h-4 mr-2" />
        <img src={jsonIcon} alt="Dossier" className="w-5 h-5 mr-2" />
        <span className="text-text-default text-base">_mes-projets.json</span>
      </div>
      
      <div className="flex-1 flex items-center justify-center max-[769px]:items-start max-[769px]:pt-8">
        <div className="flex flex-col items-center">
          {/* Animation Lottie */}
          <div className="w-96 h-96 max-[769px]:w-72 max-[769px]:h-72">
            <Lottie 
              animationData={constructionAnimation} 
              loop={true}
              autoplay={true}
            />
          </div>
          
          {/* Méssage */}
          <div className="text-center">
            <div className="text-green-comment mb-2 max-[376px]:text-[0.625rem] max-[321px]:text-[0.55rem]">// Projets en cours de développement...</div>
            <div className="text-green-comment mb-4 max-[376px]:text-[0.625rem] max-[321px]:text-[0.55rem] max-[321px]:px-2">// De nouvelles créations seront déployées prochainement !</div>
          </div>
        </div>
      </div>
    </div>
  )
}