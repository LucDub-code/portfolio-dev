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
              '<h1 class="text-blue-html text-xl max-[770px]:text-lg max-[425px]:text-base font-semibold mb-4">Formation : un itinéraire peu conventionnel</h1>'
            )
            .typeString(
                             '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">Parcours académique officiel</h2>'
            )
            .typeString(
                             "<p class=\"mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm\">BAC Littéraire (2006) — Parce qu'à 18 ans, philosopher sur Nietzsche semblait plus important que d'apprendre à coder. Erreur de jeunesse.</p>"
            )
            .typeString(
                             "<p class=\"mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm\">DUT Carrières Sociales (2008) — Deux ans à essayer de décrypter pourquoi les humains font ce qu'ils font. Conclusion : c'est compliqué.</p>"
            )
            .typeString(
                             "<p class=\"mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm\">BTS Technicien Son (2013) — Premier virage technique de ma vie. J'ai découvert qu'équilibrer des fréquences est plus satisfaisant qu'équilibrer des théories.</p>"
            )
            .typeString(
                             '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">L\'école de la polyvalence</h2>'
            )
            .typeString(
                             "<p class=\"mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm\">Entre 2008 et 2024, j'ai accumulé des expériences qui, bien que sans rapport direct avec le code, m'ont doté d'un arsenal de compétences transversales :</p>"
            )
            .typeString('<ul class="list-disc pl-6 mb-4">')
            .typeString(
                             '<li class="mb-2 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm"><span class="font-semibold">Travail social</span> : Empathie, écoute active, méthodologie de projets</li>'
            )
            .typeString(
                             '<li class="mb-2 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm"><span class="font-semibold">Technique son</span> : Précision, workflow, gestion de projets créatifs</li>'
            )
            .typeString(
                             '<li class="mb-2 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm"><span class="font-semibold">Administratif</span> : Organisation, rigueur, attention aux détails, gestion documentaire, comptabilité</li>'
            )
            .typeString(
                             '<li class="mb-2 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm"><span class="font-semibold">Accompagnement entrepreneurial</span> : Analyse des besoins, connaissances juridiques, comptables et financières</li>'
            )
            .typeString('<li style="display:none"></li></ul>')
            .typeString(
                             '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">La reconversion autodidacte</h2>'
            )
            .typeString(
                             '<p class="mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">Depuis août 2024, mon éducation est devenue intensive et autodirigée :</p>'
            )
            .typeString('<ul class="list-disc pl-6 mb-4">')
            .typeString(
              '<li class="mb-2 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm"><span class="font-semibold">HTML/CSS</span> : Maîtrise solide des fondamentaux, du responsive design et des techniques modernes de mise en page avec Tailwind CSS</li>'
            )
            .typeString(
              '<li class="mb-2 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm"><span class="font-semibold">JavaScript</span> : Des bases aux concepts avancés, je manipule les promesses, l\'asynchrone et les API</li>'
            )
            .typeString(
              '<li class="mb-2 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm"><span class="font-semibold">React</span> : Construction d\'interfaces dynamiques avec hooks et composants fonctionnels</li>'
            )
            .typeString(
              '<li class="mb-2 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm"><span class="font-semibold">Git/GitHub</span> : Parce que coder sans versionner, c\'est comme jongler avec des tronçonneuses</li>'
            )
            .typeString('<li style="display:none"></li></ul>')
            .typeString(
              '<h2 class="text-blue-html text-lg max-[770px]:text-base max-[425px]:text-sm font-semibold mt-6 mb-3">Philosophie d\'apprentissage</h2>'
            )
            .typeString(
              "<p class=\"mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm\">Mon parcours m'a enseigné que l'éducation formelle n'est qu'une partie de l'équation. L'adaptabilité et la capacité à s'autoformer sont mes véritables diplômes.</p>"
            )
            .typeString(
              '<p class="mb-4 min-[425px]:max-[770px]:text-[15px] max-[425px]:text-sm">J\'aborde le développement web comme un domaine à conquérir, un territoire à explorer continuellement. Et je compte bien planter mon drapeau sur quelques sommets techniques dans les mois à venir.</p>'
            )
            .start();
        }}
      />
    </TypewriterWrapper>
  );
}
