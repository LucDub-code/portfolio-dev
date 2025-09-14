import { useProjectsContext } from "../../contexts/ProjectsContext";
import modifyIcon from "../../assets/icons/navigation/modify.svg";
import deleteIcon from "../../assets/icons/navigation/delete.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_ENDPOINTS } from "../../config/api";

export default function ProjectsTable() {

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const { projects, fetchProjects } = useProjectsContext();

  const navigate = useNavigate();

  // Fonction de suppression des projets

  const deleteProject = (id) => {
    fetch(`${API_ENDPOINTS.PROJECTS}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
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
        setShowDeleteModal(false);
        setProjectToDelete(null);
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du projet :', error);
      });
  }

  return (
    <div className="flex flex-col items-center pt-16 pb-8">

      {/* Table des projets */}
      <div className="border border-border-ide rounded-lg overflow-hidden">
        <table className="bg-bg-terminal text-text-default max-[425px]:text-xs">
          <tbody>
            {projects.map((project) => (
              <tr key={project._id} className="border-b border-border-ide last:border-b-0">
                <td className="px-4 py-2 min-w-2xs max-[425px]:px-3">{project.title}</td>
                <td className="px-4 py-2 max-[425px]:px-3 border-l border-border-ide">
                  <button type="button" className="flex items-center justify-center cursor-pointer" onClick={() => navigate(`/admin/projets/${project._id}`)}>
                    <img src={modifyIcon} alt="Modifier" className="w-6 h-6 hover:brightness-125 max-[425px]:w-5 max-[425px]:h-5" />
                  </button>
                </td>
                <td className="px-4 py-2 max-[425px]:px-3 border-l border-border-ide">
                  <button type="button" className="flex items-center justify-center cursor-pointer" onClick={() => { setShowDeleteModal(true); setProjectToDelete(project._id); }}>
                    <img src={deleteIcon} alt="Supprimer" className="w-6 h-6 hover:brightness-125 max-[425px]:w-5 max-[425px]:h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de confirmation de suppression avec overlay */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="bg-bg-terminal border border-border-ide p-6 rounded relative top-50 left-130 max-w-xs text-center">
            <p className="text-text-default">Êtes-vous sûr de vouloir supprimer ce projet ?</p>
            <div className="flex justify-center mt-4">
              <button className="bg-red-500 hover:brightness-125 text-white px-4 py-2 rounded mr-2 cursor-pointer" onClick={() => deleteProject(projectToDelete)}>Supprimer</button>
              <button className="bg-text-default hover:brightness-125 text-black px-4 py-2 rounded cursor-pointer" onClick={() => setShowDeleteModal(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}