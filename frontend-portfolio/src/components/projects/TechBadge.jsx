import htmlIcon from "../../assets/icons/technos/html.svg";
import cssIcon from "../../assets/icons/technos/css.svg";
import jsIcon from "../../assets/icons/technos/js.svg";
import reactIcon from "../../assets/icons/technos/react.svg";
import tailwindIcon from "../../assets/icons/technos/tailwind.svg";

export default function TechBadge({ tech }) {
  return (
    <div className="bg-bg-ui border-border-ide rounded-lg p-1 w-7 h-7 flex items-center justify-center">
      {tech === "HTML" && <img src={htmlIcon} alt="HTML" />}
      {tech === "CSS" && <img src={cssIcon} alt="CSS" />}
      {tech === "JavaScript" && <img src={jsIcon} alt="JavaScript" />}
      {tech === "React" && <img src={reactIcon} alt="React" />}
      {tech === "Tailwind" && <img src={tailwindIcon} alt="Tailwind" />}
    </div>
  );
}
