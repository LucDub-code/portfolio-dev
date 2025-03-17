import gitIcon from '../../assets/icons/technos/git.svg'
import figmaIcon from '../../assets/icons/technos/figma.svg'
import htmlIcon from '../../assets/icons/technos/html.svg'
import cssIcon from '../../assets/icons/technos/css.svg'
import jsIcon from '../../assets/icons/technos/js.svg'
import tailwindIcon from '../../assets/icons/technos/tailwind.svg'
import reactIcon from '../../assets/icons/technos/react.svg'

export default function CodeEditor() {
  return (
    <div className="flex-1 pl-1">
      <div className="h-5"></div>
      <div className="h-5">
        <span className="text-blue-attr">console</span>
        <span className="text-text-default">.</span>
        <span className="text-gold-function">log</span>
        <span className="text-syntax-punctuation">(</span>
        <span className="text-orange-string">"Hello world ! 👋"</span>
        <span className="text-syntax-punctuation">)</span>
        <span className="text-text-default">;</span>
      </div>
      <div className="h-5"></div>
      <div className="h-5">
        <span className="text-green-comment">// Bienvenue sur mon portfolio</span>
      </div>
      <div className="h-5"></div>
      <div className="h-5">
        <span className="text-blue-html">const </span>
        <span className="text-blue-attr">protagonist </span>
        <span className="text-text-default">= </span>
        <span className="text-syntax-punctuation">{'{'}</span>
      </div>
      <div className="h-5 pl-4">
        <span className="text-blue-attr">name: </span>
        <span className="text-orange-string">"Lucas Dubeau"</span>
        <span className="text-text-default">,</span>
      </div>
      <div className="h-5 pl-4">
        <span className="text-blue-attr">role: </span>
        <span className="text-orange-string">"Développeur Frontend"</span>
        <span className="text-text-default">,</span>
      </div>
      <div className="h-5 pl-4">
        <span className="text-blue-attr">skills: </span>
        <span className="text-pink-keyword">{'['}</span>
        <div className="inline-flex items-center h-5">
          <img src={gitIcon} alt="Git" className="h-4 w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={figmaIcon} alt="Figma" className="h-5 w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={htmlIcon} alt="HTML" className="h-4 w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={cssIcon} alt="CSS" className="h-4 w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={jsIcon} alt="JavaScript" className="h-4 w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={tailwindIcon} alt="Tailwind" className="h-4 w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={reactIcon} alt="React" className="h-4 w-4" />
          <span className="text-pink-keyword">{']'}</span>
          <span className="text-text-default">,</span>
        </div>
      </div>
      <div className="h-5 pl-4">
        <span className="text-blue-attr">github: </span>
        <span className="text-orange-string">"LucDub-code"</span>
      </div>
      <div className="h-5">
        <span className="text-syntax-punctuation">{'}'}</span>
        <span className="text-text-default">;</span>
      </div>
      <div className="h-5"></div>
      <div className="h-5">
        <span className="text-green-comment">// J’ai besoin de votre aide !!</span>
      </div>
      <div className="h-5"></div>
      <div className="h-5">
        <span className="text-blue-html">function </span>
        <span className="text-gold-function">releveLeDefi</span>
        <span className="text-syntax-punctuation">{'() {'}</span>
      </div>
      <div className="h-5 pl-4">
        <span className="text-blue-attr">console</span>
        <span className="text-text-default">.</span>
        <span className="text-gold-function">warn</span>
        <span className="text-pink-keyword">{'('}</span>
        <span className="text-orange-string">"⚠️ Alerte: bugs détectés!"</span>
        <span className="text-pink-keyword">{'}'}</span>
        <span className="text-text-default">;</span>
      </div>
      <div className="h-5 pl-4">
        <span className="text-pink-keyword">return </span>
        <span className="text-blue-html">new </span>
        <span className="text-green-class">BugSquashGame</span>
        <span className="text-pink-keyword">{'('}</span>
        <span className="text-blue-html">{'{'}</span>
      </div>
      <div className="h-5 pl-4">
        <span className="text-blue-attr">message: </span>
        <span className="text-orange-string">"Votre mission: corriger mon code</span>
      </div>
      <div className="h-5 pl-4">
        <span className="text-orange-string">avant qu'il ne soit trop tard !"</span>
        <span className="text-text-default">,</span>
      </div>
      <div className="h-5 pl-4">
        <span className="text-blue-attr">timeLimit: </span>
        <span className="text-green-number">30</span>
      </div>
      <div className="h-5 pl-4">
        <span className="text-blue-html">{'}'}</span>
        <span className="text-pink-keyword">{')'}</span>
        <span className="text-text-default">;</span>
      </div>
      <div className="h-5">
        <span className="text-syntax-punctuation">{'}'}</span>
      </div>
    </div>
  )
}