import { createContext, useContext, useState, useEffect } from "react";

// Création du contexte pour partager les données des projets
const ProjectsContext = createContext();

// Provider qui enveloppe l'application et fournit les données
export const ProjectsProvider = ({ children }) => {
  // État pour stocker la liste des projets
  const [projects, setProjects] = useState([]);

  // États pour gérer les filtres sélectionnés
  const [platformFilters, setPlatformFilters] = useState([]);
  const [technologyFilters, setTechnologyFilters] = useState([]);

  // Fonction pour récupérer les projets depuis l'API
  const fetchProjects = () => {
    let url = "http://localhost:3000/api/projects";

    // Construction de l'url de la requête
    const params = [];

    if (platformFilters.length > 0) {
      params.push(`platform=${platformFilters.join(",")}`);
    }

    if (technologyFilters.length > 0) {
      params.push(`tech=${technologyFilters.join(",")}`);
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
    platformFilters,
    technologyFilters,
    setPlatformFilters,
    setTechnologyFilters,
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
