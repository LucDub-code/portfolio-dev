import xIcon from "../../assets/icons/socials/x.svg";
import linkedinIcon from "../../assets/icons/socials/linkedin.svg";
import githubIcon from "../../assets/icons/socials/github.svg";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobilePage, setIsMobilePage] = useState(window.innerWidth < 770);

  // Effet pour mettre à jour isMobilePage lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setIsMobilePage(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adapter la hauteur en fonction de la page et du support
  const getFooterHeight = () => {
    // En desktop, réduire la hauteur du footer
    if (!isMobilePage) {
      return "h-10";
    }

    // En mobile, garder les hauteurs réactives existantes
    return "h-12 max-[425px]:h-10 max-[380px]:h-9 max-[320px]:h-8";
  };

  return (
    <div
      className={`flex relative z-40 justify-between w-full border-t border-border-ide bg-bg-terminal text-text-default ${getFooterHeight()}`}
    >
      <div className="flex items-center px-4 max-[425px]:px-3 max-[320px]:px-2">
        <p className="text-gray-inactive text-sm max-[425px]:text-xs max-[320px]:text-[10px]">
          retrouvez moi sur {"=>"}
        </p>
      </div>
      <div className="flex">
        <a
          href="#"
          className="flex items-center justify-center w-16 max-[425px]:w-14 max-[380px]:w-12 max-[320px]:w-10 border-l border-border-ide"
        >
          <img
            src={xIcon}
            alt="Icône du réseau X"
            width="20"
            height="20"
            className="max-[425px]:w-[18px] max-[425px]:h-[18px] max-[380px]:w-[16px] max-[380px]:h-[16px] max-[320px]:w-[14px] max-[320px]:h-[14px]"
          />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-16 max-[425px]:w-14 max-[380px]:w-12 max-[320px]:w-10 border-l border-border-ide"
        >
          <img
            src={linkedinIcon}
            alt="Icône du réseau Linkedin"
            width="20"
            height="20"
            className="max-[425px]:w-[18px] max-[425px]:h-[18px] max-[380px]:w-[16px] max-[380px]:h-[16px] max-[320px]:w-[14px] max-[320px]:h-[14px]"
          />
        </a>
        <a
          href="https://github.com/LucDub-code"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 max-[425px]:w-14 max-[380px]:w-12 max-[320px]:w-10 border-l border-border-ide"
        >
          <img
            src={githubIcon}
            alt="Icône du réseau Github"
            width="20"
            height="20"
            className="max-[425px]:w-[18px] max-[425px]:h-[18px] max-[380px]:w-[16px] max-[380px]:h-[16px] max-[320px]:w-[14px] max-[320px]:h-[14px]"
          />
        </a>
      </div>
    </div>
  );
}
