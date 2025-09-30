import gitIcon from "../../assets/icons/technos/git.svg";
import figmaIcon from "../../assets/icons/technos/figma.svg";
import htmlIcon from "../../assets/icons/technos/html.svg";
import cssIcon from "../../assets/icons/technos/css.svg";
import jsIcon from "../../assets/icons/technos/js.svg";
import tailwindIcon from "../../assets/icons/technos/tailwind.svg";
import reactIcon from "../../assets/icons/technos/react.svg";
import nodeIcon from "../../assets/icons/technos/node.svg";
import expressIcon from "../../assets/icons/technos/express.svg";
import mongodbIcon from "../../assets/icons/technos/mongo.svg";
import "./CodeEditor.css";
import { useEffect } from "react";

export default function CodeEditor() {
  // Initialiser la variable CSS avec la couleur de bg-bg-ui
  useEffect(() => {
    // Capturer la couleur de fond de l'élément avec la classe bg-bg-ui
    const uiElement = document.querySelector(".bg-bg-ui");
    if (uiElement) {
      const bgColor = window.getComputedStyle(uiElement).backgroundColor;
      document.documentElement.style.setProperty("--bg-ui-color", bgColor);
    }
  }, []);

  // On garantit exactement 22 lignes pour correspondre au LineNumbers
  return (
    <div className="flex-1 pl-1 max-[770px]:pl-0 pt-1 max-[425px]:pt-1.5 pb-1">
      {/* Ligne 1 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-1">
        <span className="text-blue-attr">console</span>
        <span className="text-text-default">.</span>
        <span className="text-gold-function">log</span>
        <span className="text-syntax-punctuation">(</span>
        <span className="text-orange-string">"Hello world ! 👋"</span>
        <span className="text-syntax-punctuation">)</span>
        <span className="text-text-default">;</span>
      </div>
      {/* Ligne 2 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center"></div>
      {/* Ligne 3 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-3">
        <span className="text-green-comment">
          // Bienvenue sur mon portfolio
        </span>
      </div>
      {/* Ligne 4 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center"></div>
      {/* Ligne 5 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-5">
        <span className="text-blue-html">const </span>
        <span className="text-blue-attr">protagonist </span>
        <span className="text-text-default">= </span>
        <span className="text-syntax-punctuation">{"{"}</span>
      </div>
      {/* Ligne 6 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center pl-4 text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-6">
        <span className="text-blue-attr">name: </span>
        <span className="text-orange-string">"Lucas Dubeau"</span>
        <span className="text-text-default">,</span>
      </div>
      {/* Ligne 7 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center pl-4 text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-7">
        <span className="text-blue-attr">role: </span>
        <span className="text-orange-string">"Développeur Web"</span>
        <span className="text-text-default">,</span>
      </div>
      {/* Ligne 8 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center pl-4 text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-8">
        <span className="text-blue-attr">frontendSkills: </span>
        <span className="text-pink-keyword">{"["}</span>
        <span className="inline-flex items-center">
          <img src={gitIcon} alt="Git" className="h-3 w-3 max-[425px]:h-4 max-[425px]:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={figmaIcon} alt="Figma" className="h-4 w-3 max-[425px]:h-5 max-[425px]:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={htmlIcon} alt="HTML" className="h-3 w-3 max-[425px]:h-4 max-[425px]:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={cssIcon} alt="CSS" className="h-3 w-3 max-[425px]:h-4 max-[425px]:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img
            src={jsIcon}
            alt="JavaScript"
            className="h-3 w-3 max-[425px]:h-4 max-[425px]:w-4"
          />
          <span className="text-text-default mx-0.5">,</span>
          <img
            src={tailwindIcon}
            alt="Tailwind"
            className="h-3 w-3 max-[425px]:h-4 max-[425px]:w-4"
          />
          <span className="text-text-default mx-0.5">,</span>
          <img src={reactIcon} alt="React" className="h-3 w-3 max-[425px]:h-4 max-[425px]:w-4" />
          <span className="text-pink-keyword">{"]"}</span>
          <span className="text-text-default">,</span>
        </span>
      </div>
      {/* Ligne 9 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center pl-4 text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-9">
        <span className="text-blue-attr">backendSkills: </span>
        <span className="text-pink-keyword">{"["}</span>
        <span className="inline-flex items-center">
          <img src={nodeIcon} alt="Node.js" className="h-3 w-3 max-[425px]:h-4 max-[425px]:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={expressIcon} alt="Express" className="h-3 w-3 max-[425px]:h-4 max-[425px]:w-4" />
          <span className="text-text-default mx-0.5">,</span>
          <img src={mongodbIcon} alt="MongoDB" className="h-3 w-3 max-[425px]:h-4 max-[425px]:w-4" />
          <span className="text-pink-keyword">{"]"}</span>
          <span className="text-text-default">,</span>
        </span>
      </div>
      {/* Ligne 10 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-10">
        <span className="text-syntax-punctuation">{"}"}</span>
        <span className="text-text-default">;</span>
      </div>
      {/* Ligne 11 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center"></div>
      {/* Ligne 12 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-12">
        <span className="text-green-comment">
          // Découvrez mon univers autrement !!
        </span>
      </div>
      {/* Ligne 13 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center"></div>
      {/* Ligne 14 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-14">
        <span className="text-blue-attr">console</span>
        <span className="text-text-default">.</span>
        <span className="text-gold-function">info</span>
        <span className="text-syntax-punctuation">(</span>
        <span className="text-orange-string">"Interrogez mon assistant IA !"</span>
        <span className="text-syntax-punctuation">)</span>
        <span className="text-text-default">;</span>
      </div>
      {/* Ligne 15 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-15">
        <span className="text-blue-html">function </span>
        <span className="text-gold-function">discoverMyWorld</span>
        <span className="text-syntax-punctuation">{"() {"}</span>
      </div>
      {/* Ligne 16 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center pl-4 text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-16">
        <span className="text-pink-keyword">return </span>
        <span className="text-blue-html">new </span>
        <span className="text-green-class">AI_Assistant</span>
        <span className="text-pink-keyword">{"("}</span>
        <span className="text-blue-html">{"{"}</span>
      </div>
      {/* Ligne 17 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center pl-4 text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-17">
        <span className="text-blue-attr">name: </span>
        <span className="text-orange-string">
          "Vigeo 🤖"
        </span>
        <span className="text-text-default">,</span>
      </div>
      {/* Ligne 18 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center pl-4 text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-18">
        <span className="text-blue-attr">mission: </span>
        <span className="text-orange-string">
          "Répondre à vos questions sur
        </span>
      </div>
      {/* Ligne 19 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center pl-4 text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-19">
        <span className="text-orange-string">
          mon parcours, mes passions et mes projets."
        </span>
        <span className="text-text-default">,</span>
      </div>
      {/* Ligne 20 */}
      <div className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center pl-4 text-sm max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] tracking-wide typing-line typing-line-20">
        <span className="text-blue-html">{"}"}</span>
        <span className="text-pink-keyword">{")"}</span>
        <span className="text-text-default">;</span>
        <span className="text-syntax-punctuation">{"}"}</span>
      </div>
    </div>
  );
}
