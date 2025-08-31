import mobileIcon from "../../assets/icons/platforms/mobile.svg";
import desktopIcon from "../../assets/icons/platforms/desktop.svg";


export default function PlatformBadge({ platform }) {
  return (
    <div className="bg-text-default border border-border-ide rounded-lg p-1 w-7 h-7 flex items-center justify-center">
      {platform === "desktop" && <img src={desktopIcon} alt="Desktop" />}
      {platform === "mobile" && <img src={mobileIcon} alt="Mobile" />}
    </div>
  )
}