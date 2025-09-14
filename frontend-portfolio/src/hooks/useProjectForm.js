import { useNavigate } from "react-router-dom";
import { useProjectsContext } from "../contexts/ProjectsContext";
import { API_ENDPOINTS } from "../config/api";

export const useProjectFormHandlers = ({ clearErrors, setError, id, mode }) => {

  const { fetchProjects } = useProjectsContext();
  const navigate = useNavigate();

  // Fonction de création des projets

  const onSubmit = (data) => {
    clearErrors();

    fetch(API_ENDPOINTS.PROJECTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json()
            .then(error => { throw new Error(error.message); });
        }
      })
      .then(() => {
        fetchProjects();
        navigate('/projects');
      })
      .catch((error) => {
        setError('root', { type: 'server', message: error.message || 'Erreur lors de la création du projet' });
      });
  };

  // Fonction de modification des projets

  const onUpdate = (data) => {
    clearErrors();

    fetch(`${API_ENDPOINTS.PROJECTS}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json()
            .then(error => { throw new Error(error.message); });
        }
      })
      .then(() => {
        fetchProjects();
        navigate('/projects');
      })
      .catch((error) => {
        setError('root', { type: 'server', message: error.message || 'Erreur lors de la modification du projet' });
      });
  };

  // Soumission du formulaire selon le mode (création ou modification)

  const submitForm = (data) => {
    if (mode === 'create') {
      onSubmit(data);
    } else {
      onUpdate(data);
    }
  };

  return { submitForm };
};