import htmlIcon from "../../assets/icons/technos/html.svg";
import cssIcon from "../../assets/icons/technos/css.svg";
import jsIcon from "../../assets/icons/technos/js.svg";
import reactIcon from "../../assets/icons/technos/react.svg";
import tailwindIcon from "../../assets/icons/technos/tailwind.svg";
import sassIcon from "../../assets/icons/technos/sass.svg";
import expressIcon from "../../assets/icons/technos/express.svg";
import mongodbIcon from "../../assets/icons/technos/mongo.svg";
import nodeIcon from "../../assets/icons/technos/node.svg";
import postgresqlIcon from "../../assets/icons/technos/postgresql.svg";
import typescriptIcon from "../../assets/icons/technos/typescript.svg";
import nextjsIcon from "../../assets/icons/technos/nextjs.svg";

export default function TechBadge({ tech }) {
  return (
    <div className="flex items-center justify-center p-1 rounded-lg bg-bg-ui border-border-ide w-7 h-7">
      {tech === "HTML" && <img src={htmlIcon} alt="HTML" />}
      {tech === "CSS" && <img src={cssIcon} alt="CSS" />}
      {tech === "JavaScript" && <img src={jsIcon} alt="JavaScript" />}
      {tech === "React" && <img src={reactIcon} alt="React" />}
      {tech === "Tailwind" && <img src={tailwindIcon} alt="Tailwind" />}
      {tech === "Sass" && <img src={sassIcon} alt="Sass" />}
      {tech === "Express" && <img src={expressIcon} alt="Express" />}
      {tech === "MongoDB" && <img src={mongodbIcon} alt="MongoDB" />}
      {tech === "Node.js" && <img src={nodeIcon} alt="Node.js" />}
      {tech === "PostgreSQL" && <img src={postgresqlIcon} alt="PostgreSQL" />}
      {tech === "TypeScript" && <img src={typescriptIcon} alt="TypeScript" />}
      {tech === "Next.js" && <img src={nextjsIcon} alt="Next.js" />}
    </div>
  );
}
