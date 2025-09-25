import TypewriterWrapper from "./TypewriterWrapper";
import Typewriter from "typewriter-effect";
import { typewriterDefaultOptions } from "./TypewriterOptions";

export default function BioContent({ isActive = true }) {
  return (
    <TypewriterWrapper isActive={isActive}>
      <Typewriter
        options={typewriterDefaultOptions}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "<h1 class=\"text-blue-html text-xl max-[770px]:text-lg max-[425px]:text-base font-semibold mb-4\">Parcours et Vision</h1>"
            )
            .typeString(
              '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">Un parcours diversifié</h2>'
            )
            .typeString(
              '<p class="mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">Développeur web depuis 2024, je vis actuellement à Sète dans l\'Hérault. J\'ai un parcours atypique, avant de devenir développeur, je travaillais dans le secteur du financement à la création d\'entreprise et précédemment dans l\'ingénierie du son et l\'animation socioculturelle. Ce parcours diversifié constitue ma force : j\'ai à la fois une réflexion sur les modèles économiques et une approche centrée sur les besoins réels des utilisateurs.</p>'
            )
            .typeString(
              '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">Mes compétences transversales</h2>'
            )
            .typeString(
              "<p class=\"mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm\">J'ai acquis grâce à mon expérience des compétences qui enrichissent mon profil de développeur : empathie et gestion de projets créatifs acquises en tant que technicien son et animateur socioculturel, rigueur administrative et capacités d'analyse développées dans le conseil en financement d'entreprises.</p>"
            )
            .typeString(
              '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">Ma philosophie de développement</h2>'
            )
            .typeString(
              '<p class="mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">Je privilégie une approche pragmatique centrée sur la lisibilité et la maintenabilité du code. Selon moi un code bien structuré vaut mieux qu\'une optimisation prématurée. J\'apprécie les méthodes agiles avec des cycles itératifs courts permettant un feedback régulier et une adaptation continue. Mon objectif : proposer des solutions adaptées aux problématiques concrètes des clients et des équipes, en veillant aux problématiques de SEO et d\'accessibilité dès le départ.</p>'
            )
            .start();
        }}
      />
    </TypewriterWrapper>
  );
}
