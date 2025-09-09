import { useProjectsContext } from "../../contexts/ProjectsContext";
import modifyIcon from "../../assets/icons/navigation/modify.svg";
import deleteIcon from "../../assets/icons/navigation/delete.svg";

export default function ProjectsTable() {

  const { projects } = useProjectsContext();

  return (
    <div className="flex flex-col items-center pt-16 pb-8">
      <div className="border border-border-ide rounded-lg overflow-hidden">
        <table className="bg-bg-terminal text-text-default max-[425px]:text-xs">
          <tbody>
            {projects.map((project) => (
              <tr key={project._id} className="border-b border-border-ide last:border-b-0">
                <td className="px-4 py-2 max-[425px]:px-3">{project.title}</td>
                <td className="px-4 py-2 max-[425px]:px-3 border-l border-border-ide">
                  <button type="button" className="flex items-center justify-center cursor-pointer">
                    <img src={modifyIcon} alt="Modifier" className="w-6 h-6 hover:brightness-125 max-[425px]:w-5 max-[425px]:h-5" />
                  </button>
                </td>
                <td className="px-4 py-2 max-[425px]:px-3 border-l border-border-ide">
                  <button type="button" className="flex items-center justify-center cursor-pointer">
                    <img src={deleteIcon} alt="Supprimer" className="w-6 h-6 hover:brightness-125 max-[425px]:w-5 max-[425px]:h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}