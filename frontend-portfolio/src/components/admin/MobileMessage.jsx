import desktopIcon from "../../assets/icons/platforms/desktop-w.svg";

export default function MobileMessage({ action = "création" }) {
  return (
    <div className="bg-bg-terminal text-text-default border border-border-ide rounded-md text-center p-4">
      <p>La {action} de projet<br />est uniquement<br />disponible sur desktop</p>
      <img src={desktopIcon} alt="Icône de bureau" className="h-6 mx-auto" />
    </div>
  )
}