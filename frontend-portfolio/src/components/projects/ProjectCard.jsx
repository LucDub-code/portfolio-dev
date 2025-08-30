import githubIcon from "../../assets/icons/socials/github.svg";
import externalLinkIcon from "../../assets/icons/navigation/external-link.svg";

export default function ProjectCard() {
  return (
    <div className="bg-bg-terminal border border-border-ide text-text-default rounded-lg overflow-hidden w-80 h-96 max-[1280px]:w-64 max-[1280px]:h-80 max-[880px]:w-56 max-[880px]:h-72 flex flex-col">
      {/* Zone image */}
      <div className="relative h-1/2">
        <img
          src="/placeholder.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      {/* Zone contenu */}
      <div className="flex-1 p-4 max-[1280px]:p-3 max-[880px]:p-3">
        <h3 className="text-lg max-[1280px]:text-base max-[880px]:text-sm text-text-selected font-bold pb-2 max-[1280px]:pb-1.5 max-[880px]:pb-1">
          Projet 1
        </h3>
        <p className="text-sm max-[1280px]:text-xs max-[880px]:text-[10px] pb-4 max-[1280px]:pb-3 max-[880px]:pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <div className="flex justify-around">
          <button className="bg-text-default text-bg-terminal px-4 py-2 max-[1280px]:px-3 max-[1280px]:py-1.5 max-[1280px]:text-sm max-[880px]:px-2 max-[880px]:py-1 max-[880px]:text-xs rounded-lg cursor-pointer flex items-center gap-2 max-[1280px]:gap-1.5 max-[880px]:gap-1">
            Le projet
            <img
              src={externalLinkIcon}
              alt="External Link"
              className="w-4 max-[1280px]:w-3 max-[880px]:w-3"
            />
          </button>
          <button className="bg-text-default text-bg-terminal px-4 py-2 max-[1280px]:px-3 max-[1280px]:py-1.5 max-[1280px]:text-sm max-[880px]:px-2 max-[880px]:py-1 max-[880px]:text-xs rounded-lg flex items-center gap-2 max-[1280px]:gap-1.5 max-[880px]:gap-1 cursor-pointer">
            Le code
            <img
              src={githubIcon}
              alt="GitHub"
              className="invert w-5 max-[1280px]:w-4 max-[880px]:w-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
