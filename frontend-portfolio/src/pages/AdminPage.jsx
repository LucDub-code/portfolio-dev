import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import adminIcon from "../assets/icons/navigation/admin.svg";

export default function AdminPage() {
  return (
    <div>
      {/* En-tête mobile */}
      <div className="hidden max-[1060px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="mr-2 w-4 h-4" />
        <img src={adminIcon} alt="Dossier" className="mr-2 w-5 h-5" />
        <span className="text-base text-text-default">_admin.html</span>
      </div>

      AdminPage
      
    </div>
  )
}
