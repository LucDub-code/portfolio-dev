import xIcon from '../../assets/icons/socials/x.svg'
import linkedinIcon from '../../assets/icons/socials/linkedin.svg'
import githubIcon from '../../assets/icons/socials/github.svg'

export default function Footer() {
  return (
    <div className="border-t border-border-ide w-full bg-bg-terminal text-text-default flex justify-between h-12 max-[426px]:h-10 max-[376px]:h-9 max-[321px]:h-8 relative z-50">
      <div className="flex items-center px-4 max-[426px]:px-3 max-[321px]:px-2">
        <p className="text-gray-inactive text-sm max-[426px]:text-xs max-[321px]:text-[10px]">retrouvez moi sur {"=>"}</p>
      </div>
      <div className="flex">
        <a href="#" className="flex items-center justify-center w-16 max-[426px]:w-14 max-[376px]:w-12 max-[321px]:w-10 border-l border-border-ide">
          <img src={xIcon} alt="Icône du réseau X" width="20" height="20" className="max-[426px]:w-[18px] max-[426px]:h-[18px] max-[376px]:w-[16px] max-[376px]:h-[16px] max-[321px]:w-[14px] max-[321px]:h-[14px]" />
        </a>
        <a href="#" className="flex items-center justify-center w-16 max-[426px]:w-14 max-[376px]:w-12 max-[321px]:w-10 border-l border-border-ide">
          <img src={linkedinIcon} alt="Icône du réseau Linkedin" width="20" height="20" className="max-[426px]:w-[18px] max-[426px]:h-[18px] max-[376px]:w-[16px] max-[376px]:h-[16px] max-[321px]:w-[14px] max-[321px]:h-[14px]"/>
        </a>
        <a href="https://github.com/LucDub-code" className="flex items-center justify-center w-16 max-[426px]:w-14 max-[376px]:w-12 max-[321px]:w-10 border-l border-border-ide">
          <img src={githubIcon} alt="Icône du réseau Github" width="20" height="20" className="max-[426px]:w-[18px] max-[426px]:h-[18px] max-[376px]:w-[16px] max-[376px]:h-[16px] max-[321px]:w-[14px] max-[321px]:h-[14px]" />
        </a>
      </div>
    </div>
  )
}