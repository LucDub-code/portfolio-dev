import jsIcon from "../assets/icons/technos/js.svg";
import folderIcon from "../assets/icons/navigation/folder.svg";
import jsonIcon from "../assets/icons/technos/json.svg";
import htmlIcon from "../assets/icons/technos/html.svg";
import loginIcon from "../assets/icons/navigation/login.svg";
import adminIcon from "../assets/icons/navigation/admin.svg";
import banIcon from "../assets/icons/navigation/ban.svg";

export const pagesData = {
  "hello-world": {
    id: "hello-world",
    icon: jsIcon,
    title: "_hello-world.js",
  },
  "a-propos": {
    id: "a-propos",
    icon: folderIcon,
    title: "_a-propos-de-moi",
  },
  projets: {
    id: "projets",
    icon: jsonIcon,
    title: "_mes-projets.json",
  },
  contact: {
    id: "contact",
    icon: htmlIcon,
    title: "_me-contacter.html",
  },
  login: {
    id: "login",
    icon: loginIcon,
    title: "_login.html",
  },
  admin: {
    id: "admin",
    icon: adminIcon,
    title: "_admin.html",
  },
  notFound: {
    id: "not-found",
    icon: banIcon,
    title: "_not-found.html",
  },
};
