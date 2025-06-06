import TypewriterWrapper from './TypewriterWrapper';
import Typewriter from 'typewriter-effect';
import { typewriterDefaultOptions } from './TypewriterOptions';

export default function BioContent({ isActive = true }) {
  return (
    <TypewriterWrapper isActive={isActive}>
      <Typewriter
        options={typewriterDefaultOptions}
        onInit={(typewriter) => {
          typewriter
            .typeString('<h1 class="text-blue-html text-xl max-[769px]:text-lg max-[426px]:text-base font-semibold mb-4">L\'histoire d\'un touche-à-tout qui a fini par toucher au code</h1>')
            .pauseFor(300)
            .typeString('<p class="mb-4 min-[427px]:max-[769px]:text-[15px] max-[426px]:text-sm">Né en 1986 dans l\'Aveyron, j\'ai suivi un parcours qu\'on pourrait qualifier de... diversifié. Ou disons simplement que j\'ai eu plusieurs vies dans une vie.</p>')
            .pauseFor(300)
            .typeString('<h2 class="text-blue-html text-lg max-[769px]:text-base max-[426px]:text-sm font-semibold mt-6 mb-3">Un parcours aux multiples facettes</h2>')
            .pauseFor(300)
            .typeString('<p class="mb-4 min-[427px]:max-[769px]:text-[15px] max-[426px]:text-sm">J\'ai commencé comme travailleur social avec l\'ambition naïve de "changer le monde". Spoiler alert : le monde avait d\'autres projets.</p>')
            .pauseFor(300)
            .typeString('<p class="mb-4 min-[427px]:max-[769px]:text-[15px] max-[426px]:text-sm">Puis, guitare et basse en main, je me suis reconverti dans le son. BTS Technicien Son en poche, j\'ai navigué entre studios d\'enregistrement et MJC, mixant compétences sociales et techniques.</p>')
            .pauseFor(300)
            .typeString('<p class="mb-4 min-[427px]:max-[769px]:text-[15px] max-[426px]:text-sm">En 2019, changement de décor : j\'intègre une association d\'aide à la création d\'entreprise. Pendant 5 ans, j\'accompagne des entrepreneurs dans leurs demandes de financement. C\'est là que la révélation arrive.</p>')
            .pauseFor(300)
            .typeString('<h2 class="text-blue-html text-lg max-[769px]:text-base max-[426px]:text-sm font-semibold mt-6 mb-3">La prise de conscience</h2>')
            .pauseFor(300)
            .typeString('<p class="mb-4 min-[427px]:max-[769px]:text-[15px] max-[426px]:text-sm">En observant le tissu économique local, notamment pendant la période COVID, une évidence s\'impose : les business models à l\'ancienne s\'essoufflent et les entreprises qui se numérisent tirent leur épingle du jeu.</p>')
            .pauseFor(300)
            .typeString('<p class="mb-4 min-[427px]:max-[769px]:text-[15px] max-[426px]:text-sm">Au cœur d\'une pépinière d\'entreprises, j\'observe les start-ups qui placent toutes le numérique au centre de leur stratégie et comprends que ce n\'est plus une option mais une nécessité.</p>')
            .pauseFor(300)
            .typeString('<h2 class="text-blue-html text-lg max-[769px]:text-base max-[426px]:text-sm font-semibold mt-6 mb-3">Le virage vers le code</h2>')
            .pauseFor(300)
            .typeString('<p class="mb-4 min-[427px]:max-[769px]:text-[15px] max-[426px]:text-sm">Été 2024, rupture conventionnelle finalisée, ma décision est prise : apprendre le développement web. J\'ai la conviction que la synergie entre mon parcours professionnel diversifié et ma maîtrise des technologies web me permettra de répondre aux besoins de transformation numérique des entreprises.</p>')
            .pauseFor(300)
            .typeString('<p class="mb-4 min-[427px]:max-[769px]:text-[15px] max-[426px]:text-sm">Cette fois, pas de changement radical ou de volonté de sauver le monde. Juste l\'envie de créer des solutions concrètes, utiles, dans un domaine qui ne cesse d\'évoluer.</p>')
            .pauseFor(300)
            .typeString('<p class="mb-4 min-[427px]:max-[769px]:text-[15px] max-[426px]:text-sm">Après tout, quand on a été travailleur social, technicien son et conseiller en financement d\'entreprise, devenir développeur web semble presque... logique ?</p>')
            .start();
        }}
      />
    </TypewriterWrapper>
  );
}