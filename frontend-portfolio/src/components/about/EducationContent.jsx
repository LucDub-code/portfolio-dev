import TypewriterWrapper from "./TypewriterWrapper";
import Typewriter from "typewriter-effect";
import { typewriterDefaultOptions } from "./TypewriterOptions";

export default function EducationContent({ isActive = false }) {
  return (
    <TypewriterWrapper isActive={isActive}>
      <Typewriter
        options={typewriterDefaultOptions}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<h1 class="text-blue-html text-xl max-[770px]:text-lg max-[425px]:text-base font-semibold mb-4">Formation et Compétences Techniques</h1>'
            )
            .typeString(
              '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-4">Formation développement web</h2>'
            )
            .typeString(
              `<h3 class="inline text-blue-html min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">Parcours diplômant OpenClassrooms </h3><p class="inline min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">(en cours) - Développeur Web niveau 5 (Bac+2 RNCP). Formation par projets professionnalisants couvrant le développement full-stack avec mentorat.</p><br />`
            )
            .typeString(`<div class="h-4"></div>`)
            .typeString(
              `<h3 class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">Certifications </h3><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">: FreeCodeCamp Responsive Web Design et JavaScript Algorithms & Data Structures.</p><br />`
            )
            .typeString(`<div class="h-4"></div>`)
            .typeString(
              `<h3 class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">Formation autodidacte </h3><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">: Cours de Grafikart et formations Udemy pour approfondir JavaScript, React et Node.</p>`
            )
            .typeString(
              '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">Stack technique maîtrisée</h2>'
            )
            .typeString(
              `<h3 class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">- Frontend </h3><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">: HTML, CSS, JavaScript, React, Sass, Tailwind CSS</p><br />`
            )
            .typeString(
              `<h3 class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">- Backend </h3><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">: Node.js, Express, MongoDB</p><br />`
            )
            .typeString(
              `<h3 class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">- Architecture </h3><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">: API REST, JWT, MVC</p><br />`
            )
            .typeString(
              `<h3 class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">- Versionnement </h3><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">: Git/GitHub</p><br />`
            )
            .typeString(
              `<h3 class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">- Design </h3><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">: Figma, Shadcn UI</p><br />`
            )
            .typeString(
              `<h3 class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">- Animations </h3><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">: Motion, GASP</p><br />`
            )
            .typeString(
              `<h3 class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">- Intégration IA </h3><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">: Vercel AI</p><br />`
            )
            .typeString(
              '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">Formation initiale</h2>'
            )
            .typeString(
              `<span class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">- </span><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">BTS Technicien Son</p><br />`
            )
            .typeString(
              `<span class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">- </span><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">DUT Carrières Sociales</p><br />`
            )
            .typeString(
              `<span class="inline text-blue-html mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">- </span><p class="inline mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">Baccalauréat littéraire</p><br />`
            )
            .start();
        }}
      />
    </TypewriterWrapper>
  );
}
