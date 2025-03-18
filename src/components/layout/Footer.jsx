import xIcon from '../../assets/icons/socials/x.svg'
import linkedinIcon from '../../assets/icons/socials/linkedin.svg'
import githubIcon from '../../assets/icons/socials/github.svg'

export default function Footer() {
  return (
    <div className="border-t border-border-ide w-full bg-bg-terminal text-text-default flex justify-between h-12 relative z-50">
      <div className="flex items-center px-4">
        <p className="text-gray-inactive text-sm max-[376px]:text-xs">retrouvez moi sur :</p>
      </div>
      <div className="flex">
        <a href="#" className="flex items-center justify-center w-16 border-l border-border-ide">
          <img src={xIcon} alt="Icône du réseau X" width="20" height="20" />
        </a>
        <a href="#" className="flex items-center justify-center w-16 border-l border-border-ide">
          <img src={linkedinIcon} alt="Icône du réseau Linkedin" width="20" height="20"/>
        </a>
        <a href="https://github.com/LucDub-code" className="flex items-center justify-center w-16 border-l border-border-ide">
          <img src={githubIcon} alt="Icône du réseau Github" width="20" height="20" />
        </a>
      </div>
    </div>
  )
}