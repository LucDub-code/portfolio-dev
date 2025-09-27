import mobileIcon from "../../assets/icons/platforms/mobile.svg";
import desktopIcon from "../../assets/icons/platforms/desktop.svg";


export default function PlatformBadge({ platform }) {
  return (
    <div className="flex items-center justify-center p-1 border rounded-lg bg-text-default border-border-ide w-7 h-7">
      {platform === "desktop" && <img src={desktopIcon} alt="Desktop" />}
      {platform === "mobile" && <img src={mobileIcon} alt="Mobile" />}
    </div>
  )
}