import { createContext, useContext, useState, useEffect } from 'react';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  // État des projets
  const [projects, setProjects] = useState([]);
  
  // État des filtres actifs
  const [filters, setFilters] = useState([]);

  // Fonction fetch avec gestion des filtres
  const fetchProjects = (filters = []) => {
    let url = "http://localhost:3000/api/projects";
    
    // Ajouter les filtres à l'URL si présents
    if (filters.length > 0) {
      const techParams = filters.map(tech => `tech=${tech}`).join('&');
      url += `?${techParams}`;
    }
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  };

  // Fonction pour gérer les filtres
  const toggleFilter = (tech) => {
    const newFilters = filters.includes(tech)
      ? filters.filter(f => f !== tech)
      : [...filters, tech];
    
    setFilters(newFilters);
    fetchProjects(newFilters);
  };

  // Charger tous les projets au montage
  useEffect(() => {
    fetchProjects();
  }, []);

  const value = {
    projects,
    filters,
    toggleFilter,
    fetchProjects
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export function useProjectsContext() {
  return useContext(ProjectsContext);
}