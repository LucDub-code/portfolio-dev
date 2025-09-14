import { createContext, useContext, useState, useEffect } from "react";
import { API_ENDPOINTS } from "../config/api";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  // État pour stocker la liste des projets
  const [projects, setProjects] = useState([]);

  // États temporaires pour la sélections des filtres mobile
  const [tempPlatformFilters, setTempPlatformFilters] = useState([]);
  const [tempTechnologyFilters, setTempTechnologyFilters] = useState([]);

  // Fonction pour appliquer les filtres temporaires
  const applyFilters = () => {
    setPlatformFilters(tempPlatformFilters);
    setTechnologyFilters(tempTechnologyFilters);
  };

  // États finaux pour appliquer les filtres
  const [platformFilters, setPlatformFilters] = useState([]);
  const [technologyFilters, setTechnologyFilters] = useState([]);

  // Fonction pour récupérer les projets depuis l'API
  const fetchProjects = () => {
    let url = API_ENDPOINTS.PROJECTS;

    // Construction de l'url de la requête
    const params = [];

    if (platformFilters.length > 0) {
      platformFilters.forEach((platform) => {
        params.push(`platforms=${platform}`);
      });
    }

    if (technologyFilters.length > 0) {
      technologyFilters.forEach((tech) => {
        params.push(`tech=${tech}`);
      });
    }

    // Ajout des paramètres à l'URL
    if (params.length > 0) {
      url += "?" + params.join("&");
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  };

  // Déclencher fetchProjects quand les filtres changent
  useEffect(() => {
    fetchProjects();
  }, [platformFilters, technologyFilters]);

  // Objet contenant toutes les valeurs partagées par le contexte
  const value = {
    projects,
    fetchProjects,
    // États finaux
    platformFilters,
    technologyFilters,
    setPlatformFilters,
    setTechnologyFilters,
    // États temporaires
    tempPlatformFilters,
    tempTechnologyFilters,
    setTempPlatformFilters,
    setTempTechnologyFilters,
    // Fonction d'application
    applyFilters,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte des projets
export function useProjectsContext() {
  return useContext(ProjectsContext);
}
