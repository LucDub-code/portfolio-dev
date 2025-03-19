import { useEffect, useState, useRef } from 'react';
import Typewriter from 'typewriter-effect';

export default function InteretsContent({ isActive = false }) {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  }, [isActive]);

  return (
    <div 
      ref={contentRef}
      className={`markdown-content text-text-default ${showContent ? '' : 'hidden'}`}
    >
      {showContent && (
        <Typewriter
          options={{
            delay: 20,
            cursor: '',
            autoStart: true,
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<h1 class="text-blue-html text-xl max-[426px]:text-lg font-semibold mb-4">Les passions d\'un développeur junior</h1>')
              .pauseFor(300)
              .typeString('<h2 class="text-blue-html text-lg max-[426px]:text-base font-semibold mt-6 mb-3">Le code comme nouvelle partition</h2>')
              .pauseFor(300)
              .typeString('<p class="mb-4 max-[426px]:text-sm">Après des années à composer des morceaux sur ma guitare, j\'ai troqué les cordes pour les lignes de code. Étrangement, je retrouve dans le développement web la même satisfaction qu\'en musique : créer quelque chose à partir de rien, structurer, harmoniser, et parfois même improviser.</p>')
              .pauseFor(300)
              .typeString('<p class="mb-4 max-[426px]:text-sm">Le HTML et le CSS sont mes nouveaux instruments de base, JavaScript mon amplificateur, et React et Tailwind mes pédales d\'effets préférées.</p>')
              .pauseFor(300)
              .typeString('<h2 class="text-blue-html text-lg max-[426px]:text-base font-semibold mt-6 mb-3">Veille technologique : ma nouvelle playlist</h2>')
              .pauseFor(300)
              .typeString('<p class="mb-4 max-[426px]:text-sm">Autrefois, je passais des heures à découvrir de nouveaux groupes et albums. Aujourd\'hui, je fais défiler les articles techniques et tutoriels avec la même avidité.</p>')
              .pauseFor(300)
              .typeString('<p class="mb-4 max-[426px]:text-sm">Ma liste de lecture ne contient plus des titres d\'albums mais des noms de frameworks, mes artistes préférés sont devenus des développeurs partageant leur expertise. Même passion, nouveau médium.</p>')
              .pauseFor(300)
              .typeString('<h2 class="text-blue-html text-lg max-[426px]:text-base font-semibold mt-6 mb-3">L\'exploration au-delà du code</h2>')
              .pauseFor(300)
              .typeString('<p class="mb-4 max-[426px]:text-sm">Quand je ne suis pas en train de coder, je plonge dans l\'univers fascinant de l\'intelligence artificielle. Expérimenter avec des LLM en local ou générer des images est devenu mon terrain de jeu technologique - comme un laboratoire personnel où je tente de comprendre les outils qui redéfinissent notre monde.</p>')
              .pauseFor(300)
              .typeString('<p class="mb-4 max-[426px]:text-sm">Cette curiosité s\'étend à la littérature, qui me permet de façonner ma pensée, tout comme les langages de programmation structurent ma logique. Entre deux lignes de code, je m\'échappe dans des pages qui ont traversé le temps, ou dans des podcasts qui nourrissent la réflexion.</p>')
              .pauseFor(300)
              .typeString('<p class="mb-4 max-[426px]:text-sm">Côté sport, malgré un passé assez actif, force est de constater que ma souris et mon clavier ont pris le pas sur mes haltères ces derniers temps. Mais si je revenais à la salle avec la même intensité que j\'ai mise à apprendre React, je serais probablement qualifié pour les JO 2028. En attendant, mon seul exercice consiste à sprinter entre le bureau et la cafetière.</p>')
              .start();
          }}
        />
      )}
    </div>
  );
}