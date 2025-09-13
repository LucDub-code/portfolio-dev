import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { filtersData } from "../../data/filtersData";
import starEmpty from "../../assets/icons/star-empty.svg";
import starFull from "../../assets/icons/star-full.svg";
import { useDropzone } from 'react-dropzone';
import { useState, useEffect } from "react";
import { useProjectFormHandlers } from "../../hooks/useProjectForm";
import { useParams } from "react-router-dom";
import { useProjectsContext } from "../../contexts/ProjectsContext";

// Schema de validation Zod
const projectSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "Le titre est requis" }),
  description: z
    .string()
    .trim()
    .min(1, { message: "La description est requise" }),
  projectUrl: z
    .string()
    .trim()
    .min(1, { message: "L'URL du projet est requise" }),
  githubUrl: z
    .string()
    .trim()
    .min(1, { message: "L'URL du GitHub est requise" }),
  platforms: z
    .array(z.string())
    .min(1, { message: "Les plateformes sont requises" }),
  technologies: z
    .array(z.string())
    .min(1, { message: "Les technologies sont requises" }),
  mainTechnologies: z
    .array(z.string())
    .min(1, { message: "Les technologies principales sont requises" }),
  imageUrl: z
    .string()
    .min(1, { message: "L'URL de l'image est requise" }),
  order: z.coerce // transforme la valeur en nombre
    .number()
    .min(0, { message: "L'ordre doit être positif" })
    .max(100, { message: "L'ordre doit être inférieur à 100" })
    .optional(),
});

export default function ProjectForm() {

  // Adaptation du formulaire selon le mode (création ou modification)
  const { id } = useParams();
  const mode = id ? "edit" : "create";
  const { projects } = useProjectsContext();
  const projectToEdit = mode === "edit" ? projects.find(project => project._id === id) : null;

  // Configuration React Hook Form avec Zod
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      touchedFields,
      isSubmitting,
    },
    watch,
    setValue,
    setError,
    clearErrors,
  } = useForm({
    resolver: zodResolver(projectSchema),
    mode: "onBlur",
    defaultValues: {
      platforms: [],
      technologies: [],
      mainTechnologies: [],
      imageUrl: "",
    },
  });

  // Pré-remplissage du formulaire en mode modification

  useEffect(() => {
    if (mode === "edit" && projectToEdit) {
      setValue("title", projectToEdit.title);
      setValue("description", projectToEdit.description);
      setValue("projectUrl", projectToEdit.projectUrl);
      setValue("githubUrl", projectToEdit.githubUrl);
      setValue("platforms", projectToEdit.platforms);
      setValue("technologies", projectToEdit.technologies);
      setValue("mainTechnologies", projectToEdit.mainTechnologies);
      setValue("imageUrl", projectToEdit.imageUrl);
      setValue("order", projectToEdit.order);
    }
  }, [mode, projectToEdit, setValue]);

  // Configuration React Dropzone avec Cloudinary

  const [fileStatus, setFileStatus] = useState(null);

  const urlOptimizer = (url) =>
          url
            .replace('/upload/', '/upload/f_webp,q_80,c_fill,g_auto/')
            .replace(/\.[a-z0-9]+$/i, '');

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'] },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) return;

      setFileStatus('uploading');

      fetch('http://localhost:3000/api/cloudinary/sign', {
        method: 'POST',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((response) => {
          if (!response.ok) return response.json()
            .then((data) => { throw new Error(data.error || 'Erreur signature serveur'); });
          return response.json();
        })
        .then(({ timestamp, signature, folder, cloudName, apiKey }) => {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('api_key', apiKey);
          formData.append('timestamp', timestamp);
          formData.append('signature', signature);
          formData.append('folder', folder);

          return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData
          })
            .then((response) => {
              if (!response.ok) return response.json()
                .then((data) => { throw new Error(data.error?.message || 'Erreur upload Cloudinary'); });
              return response.json();
            });
        })
        .then((uploadData) => {
          setValue('imageUrl', urlOptimizer(uploadData.secure_url));
          setFileStatus('success');
          clearErrors('imageUrl');
        })
        .catch((err) => {
          console.error(err);
          setFileStatus('error');
          setError('imageUrl', { message: err.message || 'Erreur upload' });
        });
    },
    onDropRejected: () => {
      setFileStatus('error');
    }
  });

  const { submitForm } = useProjectFormHandlers({ clearErrors, setError, id, mode });

  return (

    // Formulaire de création/modification des projets
    <div className="flex flex-1 justify-center items-start p-4">
      <form className="p-6 w-full max-w-lg" onSubmit={handleSubmit(submitForm)}>

        {/* Titre du projet */}
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-text-default">
            _titre<span className="text-error-foreground">*</span>
          </label>
          <input
            type="text"
            id="title"
            className={`w-full border bg-bg-terminal ${errors.title
              ? 'border-error-foreground'
              : touchedFields.title && !errors.title && watch('title')?.trim() !== ""
                ? 'border-success-foreground'
                : 'border-border-ide'
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
            placeholder="/* Titre du projet, max 25 caractères */"
            {...register("title")}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-error-foreground">
              {errors.title.message}</p>
          )}
        </div>

        {/* Description du projet */}
        <div className="mb-2">
          <label htmlFor="description" className="block mb-2 text-text-default">
            _description<span className="text-error-foreground">*</span>
          </label>
          <textarea
            rows="3"
            id="description"
            className={`w-full border bg-bg-terminal ${errors.description
              ? 'border-error-foreground'
              : touchedFields.description && !errors.description && watch('description')?.trim() !== ""
                ? 'border-success-foreground'
                : 'border-border-ide'
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
            placeholder="/* Description du projet, max 85 caractères */"
            {...register("description")}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-error-foreground">
              {errors.description.message}</p>
          )}
        </div>

        {/* URL du projet */}
        <div className="mb-4">
          <label htmlFor="projectUrl" className="block mb-2 text-text-default">
            _url-du-projet<span className="text-error-foreground">*</span>
          </label>
          <input
            type="text"
            id="projectUrl"
            className={`w-full border bg-bg-terminal ${errors.projectUrl
              ? 'border-error-foreground'
              : touchedFields.projectUrl && !errors.projectUrl && watch('projectUrl')?.trim() !== ""
                ? 'border-success-foreground'
                : 'border-border-ide'
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
            placeholder="/* URL du projet */"
            {...register("projectUrl")}
          />
          {errors.projectUrl && (
            <p className="mt-1 text-sm text-error-foreground">
              {errors.projectUrl.message}</p>
          )}
        </div>

        {/* URL du GitHub */}
        <div className="mb-4">
          <label htmlFor="githubUrl" className="block mb-2 text-text-default">
            _url-du-github<span className="text-error-foreground">*</span>
          </label>
          <input
            type="text"
            id="githubUrl"
            className={`w-full border bg-bg-terminal ${errors.githubUrl
              ? 'border-error-foreground'
              : touchedFields.githubUrl && !errors.githubUrl && watch('githubUrl')?.trim() !== ""
                ? 'border-success-foreground'
                : 'border-border-ide'
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
            placeholder="/* URL du GitHub */"
            {...register("githubUrl")}
          />
          {errors.githubUrl && (
            <p className="mt-1 text-sm text-error-foreground">
              {errors.githubUrl.message}</p>
          )}
        </div>

        {/* Plateformes */}
        <div className="mb-6">
          <p id="platforms" className="block mb-2 text-text-default">
            _plateformes<span className="text-error-foreground">*</span>
          </p>
          <div className="flex gap-20 pl-8" role="group" aria-labelledby="platforms">
            {filtersData.platforms.map((platform) => (
              <div key={platform.id} className="flex items-center pt-2">
                <input
                  className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative cursor-pointer"
                  type="checkbox"
                  id={platform.id}
                  checked={watch("platforms") && watch("platforms").includes(platform.id) ? true : false}
                  onChange={(e) => {
                    const currentPlatforms = watch("platforms") || [];
                    if (e.target.checked) {
                      setValue("platforms", [...currentPlatforms, platform.id]);
                    } else {
                      setValue("platforms", currentPlatforms.filter((p) => p !== platform.id));
                    }
                  }}
                />
                <div className="flex gap-2 items-center pl-6">
                  <img src={platform.icon} alt={platform.name} className="w-6 h-6" />
                  <span className="text-text-default">{platform.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <p className="block mb-4 text-text-default">
            _technologies<span className="text-error-foreground">*</span>
          </p>
          <div className="grid grid-cols-2 gap-4 pl-8" role="group" aria-labelledby="technologies">
            {filtersData.technologies.map((technology) => (
              <div key={technology.id} className="flex items-center pt-2">
                <input
                  className="w-5 h-5 rounded bg-bg-terminal border border-text-default appearance-none checked:bg-btn-hover checked:border-text-selected checked:after:content-['✓'] checked:after:text-text-selected checked:after:text-xl checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center relative cursor-pointer"
                  type="checkbox"
                  id={technology.id}
                  checked={watch("technologies") && watch("technologies").includes(technology.id) ? true : false}
                  onChange={(e) => {
                    const currentTechnologies = watch("technologies") || [];
                    if (e.target.checked) {
                      setValue("technologies", [...currentTechnologies, technology.id]);
                    } else {
                      setValue("technologies", currentTechnologies.filter((t) => t !== technology.id));
                    }
                  }}
                />
                <div className="flex gap-2 items-center pl-6">
                  <img src={technology.icon} alt={technology.name} className="w-6 h-6" />
                  <span className="text-text-default">{technology.name}</span>
                </div>
                {/* mainTechnologies */}
                <div className="flex items-center pl-4">
                  <img
                    src={watch("mainTechnologies") && watch("mainTechnologies").includes(technology.id) ? starFull : starEmpty}
                    alt={watch("mainTechnologies") && watch("mainTechnologies").includes(technology.id) ? "Star Full" : "Star Empty"}
                    className={`w-6 h-6 ${watch("mainTechnologies") && watch("mainTechnologies").includes(technology.id)
                      ? 'cursor-pointer'
                      : (watch("mainTechnologies") && watch("mainTechnologies").length >= 3)
                        ? 'opacity-30 cursor-not-allowed'
                        : 'cursor-pointer'
                      }`}
                    onClick={() => {
                      const currentMainTechnologies = watch("mainTechnologies") || [];
                      if (currentMainTechnologies.includes(technology.id)) {
                        setValue("mainTechnologies", currentMainTechnologies.filter(t => t !== technology.id));
                      } else if (currentMainTechnologies.length < 3) { // Limite de 3
                        setValue("mainTechnologies", [...currentMainTechnologies, technology.id]);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image du projet */}
        <div className="mb-4">
          <label htmlFor="project-image" className="block mb-4 text-text-default">
            _image-du-projet<span className="text-error-foreground">*</span>
          </label>

          {/* Zone de drop */}
          <div
            {...getRootProps()}
            className={`w-full p-6 h-32 border-2 border-dashed rounded cursor-pointer transition-colors ${fileStatus === 'uploading'
              ? 'border-blue-accent bg-blue-accent/10'
              : fileStatus === 'success'
                ? 'border-success-foreground bg-success-foreground/10'
                : fileStatus === 'error'
                  ? 'border-error-foreground bg-error-foreground/10'
                  : isDragReject
                    ? 'border-error-foreground bg-error-foreground/10'
                    : isDragActive
                      ? 'border-blue-accent bg-blue-accent/10'
                      : 'border-border-ide hover:border-blue-accent'
              }`}
          >
            <input {...getInputProps({ id: 'project-image' })} />
            <div className="text-center flex items-center justify-center h-full">
              {fileStatus === 'uploading' ? (
                <p className="text-blue-accent">Upload en cours...</p>
              ) : fileStatus === 'success' ? (
                <p className="text-success-foreground">Fichier validé <span className="text-xl">✓</span></p>
              ) : fileStatus === 'error' ? (
                <p className="text-error-foreground">Erreur upload</p>
              ) : isDragReject ? (
                <p className="text-error-foreground">Fichier non supporté</p>
              ) : isDragActive ? (
                <p className="text-blue-accent">Déposez l'image ici...</p>
              ) : (
                <div>
                  <p className="text-text-default mb-2">
                    Glisser-déposer l'image <br /> ou cliquer pour sélectionner
                  </p>
                  <p className="text-sm text-gray-inactive">
                    PNG, JPG, GIF, WebP (max 5MB)
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Input caché pour stocker l'URL de l'image */}
          <input type="hidden" {...register('imageUrl')} />
        </div>

        {/* Ordre du projet (optionnel / de 100 à 0 par ordre décroissant) */}
        <div className="mb-4">
          <label htmlFor="order" className="block mb-4 text-text-default">
            _ordre<span className="text-error-foreground">* </span><span className="text-gray-inactive">(optionnel)</span>
          </label>
          <input
            type="number"
            id="order"
            className={`w-full border bg-bg-terminal ${errors.order
              ? 'border-error-foreground'
              : touchedFields.order && !errors.order && watch('order') !== undefined
                ? 'border-success-foreground'
                : 'border-border-ide'
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
            placeholder="/* Ordre du projet, de 100 à 0 */"
            {...register("order")}
          />
          {errors.order && (
            <p className="mt-1 text-sm text-error-foreground">
              {errors.order.message}</p>
          )}
        </div>

        {/* Bouton de création/modification */}
        <div className="flex justify-center pt-8">
          <button
            type="submit"
            className="px-8 py-2 text-white rounded border shadow-md transition-colors cursor-pointer bg-blue-accent hover:bg-focus-hover border-border-ide disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? (mode === 'edit' ? "Modification..." : "Création...")
              : (mode === 'edit' ? "Modifier" : "Créer")
            }
          </button>
        </div>
      </form>
    </div>
  )
}