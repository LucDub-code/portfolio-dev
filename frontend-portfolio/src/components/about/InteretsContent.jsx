import TypewriterWrapper from "./TypewriterWrapper";
import Typewriter from "typewriter-effect";
import { typewriterDefaultOptions } from "./TypewriterOptions";

export default function InteretsContent({ isActive = false }) {
  return (
    <TypewriterWrapper isActive={isActive}>
      <Typewriter
        options={typewriterDefaultOptions}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "<h1 class=\"text-blue-html text-xl max-[770px]:text-lg max-[425px]:text-base font-semibold mb-4\">Centres d'intérêt</h1>"
            )
            .typeString(
              '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">Développement web et veille technologique</h2>'
            )
            .typeString(
              '<p class="mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">Curieux de nature, j’aime consacrer du temps à ma veille technologique et à explorer les innovations dans les domaines du développement web et de l’intelligence artificielle. Lire des articles techniques, la documentation, regarder des tutoriels.</p>'
            )
            .typeString(
              '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">Intelligence artificielle appliquée</h2>'
            )
            .typeString(
              "<p class=\"mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm\">L'IA est mon terrain de jeu technologique. J'expérimente avec les LLM, les modèles de génération d'images en local. J'utilise des agents de code et crée des workflows d'automatisation. Je suis convaincu que l’évolution du web passera par l’intégration de ces innovations. L’assistant IA intégré à ce portfolio illustre parfaitement mon désir de maîtriser ces technologies afin de les intégrer à mes projets.</p>"
            )
            .typeString(
              '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">Musique et créativité</h2>'
            )
            .typeString(
              '<p class="mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">Je suis guitariste et j\'aime produire de la musique sur mon temps libre. Mon passé de technicien son m\'a donné certaines aptitudes dans ce domaine. Ma pratique musicale développe ma créativité et m’aide à stimuler mon imagination dans tout ce que j’entreprends.</p>'
            )
            .start();
        }}
      />
    </TypewriterWrapper>
  );
}
