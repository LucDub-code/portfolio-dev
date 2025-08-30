import githubIcon from "../../assets/icons/socials/github.svg";
import externalLinkIcon from "../../assets/icons/navigation/external-link.svg";

export default function ProjectCard() {
  return (
    <div className="bg-bg-terminal border border-border-ide text-text-default rounded-lg overflow-hidden w-80 h-96 flex flex-col">
      {/* Zone image */}
      <div className="h-1/2 relative">
        <img src="/placeholder.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Zone contenu */}
      <div className="flex-1 p-4">
        <h3 className="text-lg text-text-selected font-bold pb-2">Projet 1</h3>
        <p className="text-sm pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <div className="flex justify-around">
          <button className="bg-text-default text-bg-terminal px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2">
            Le projet
            <img src={externalLinkIcon} alt="External Link" className="w-4" />
          </button>
          <button className="bg-text-default text-bg-terminal px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
            Le code
            <img src={githubIcon} alt="GitHub" className="invert w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
