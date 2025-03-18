import gitIcon from '../../assets/icons/technos/git.svg'
import figmaIcon from '../../assets/icons/technos/figma.svg'
import htmlIcon from '../../assets/icons/technos/html.svg'
import cssIcon from '../../assets/icons/technos/css.svg'
import jsIcon from '../../assets/icons/technos/js.svg'
import tailwindIcon from '../../assets/icons/technos/tailwind.svg'
import reactIcon from '../../assets/icons/technos/react.svg'

export default function CodeEditor() {
  // On garantit exactement 23 lignes pour correspondre au LineNumbers
  return (
    <div className="flex-1 pl-1">
      {/* Ligne 1 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center"></div>
      {/* Ligne 2 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-attr">console</span>
        <span className="text-text-default">.</span>
        <span className="text-gold-function">log</span>
        <span className="text-syntax-punctuation">(</span>
        <span className="text-orange-string">"Hello world ! 👋"</span>
        <span className="text-syntax-punctuation">)</span>
        <span className="text-text-default">;</span>
      </div>
      {/* Ligne 3 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center"></div>
      {/* Ligne 4 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-green-comment">// Bienvenue sur mon portfolio</span>
      </div>
      {/* Ligne 5 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center"></div>
      {/* Ligne 6 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-html">const </span>
        <span className="text-blue-attr">protagonist </span>
        <span className="text-text-default">= </span>
        <span className="text-syntax-punctuation">{'{'}</span>
      </div>
      {/* Ligne 7 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center pl-4 text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-attr">name: </span>
        <span className="text-orange-string">"Lucas Dubeau"</span>
        <span className="text-text-default">,</span>
      </div>
      {/* Ligne 8 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center pl-4 text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-attr">role: </span>
        <span className="text-orange-string">"Développeur Frontend"</span>
        <span className="text-text-default">,</span>
      </div>
      {/* Ligne 9 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center pl-4 text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-attr">skills: </span>
        <span className="text-pink-keyword">{'['}</span>
        <span className="inline-flex items-center">
          <img src={gitIcon} alt="Git" className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={figmaIcon} alt="Figma" className="h-4 w-3 sm:h-5 sm:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={htmlIcon} alt="HTML" className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={cssIcon} alt="CSS" className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={jsIcon} alt="JavaScript" className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={tailwindIcon} alt="Tailwind" className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={reactIcon} alt="React" className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="text-pink-keyword">{']'}</span>
          <span className="text-text-default">,</span>
        </span>
      </div>
      {/* Ligne 10 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center pl-4 text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-attr">github: </span>
        <span className="text-orange-string">"LucDub-code"</span>
      </div>
      {/* Ligne 11 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-syntax-punctuation">{'}'}</span>
        <span className="text-text-default">;</span>
      </div>
      {/* Ligne 12 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center"></div>
      {/* Ligne 13 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-green-comment">// J'ai besoin de votre aide !!</span>
      </div>
      {/* Ligne 14 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center"></div>
      {/* Ligne 15 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-html">function </span>
        <span className="text-gold-function">releveLeDefi</span>
        <span className="text-syntax-punctuation">{'() {'}</span>
      </div>
      {/* Ligne 16 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center pl-4 text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-attr">console</span>
        <span className="text-text-default">.</span>
        <span className="text-gold-function">warn</span>
        <span className="text-pink-keyword">{'('}</span>
        <span className="text-orange-string">"⚠️ Alerte: bugs détectés!"</span>
        <span className="text-pink-keyword">{')'}</span>
        <span className="text-text-default">;</span>
      </div>
      {/* Ligne 17 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center pl-4 text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-pink-keyword">return </span>
        <span className="text-blue-html">new </span>
        <span className="text-green-class">BugSquashGame</span>
        <span className="text-pink-keyword">{'('}</span>
        <span className="text-blue-html">{'{'}</span>
      </div>
      {/* Ligne 18 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center pl-4 text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-attr">message: </span>
        <span className="text-orange-string">"Votre mission: corriger mon code</span>
      </div>
      {/* Ligne 19 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center pl-4 text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-orange-string">avant qu'il ne soit trop tard !"</span>
        <span className="text-text-default">,</span>
      </div>
      {/* Ligne 20 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center pl-4 text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-attr">timeLimit: </span>
        <span className="text-green-number">30</span>
      </div>
      {/* Ligne 21 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center pl-4 text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-blue-html">{'}'}</span>
        <span className="text-pink-keyword">{')'}</span>
        <span className="text-text-default">;</span>
      </div>
      {/* Ligne 22 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm">
        <span className="text-syntax-punctuation">{'}'}</span>
      </div>
      {/* Ligne 23 */}
      <div className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center"></div>
    </div>
  )
}