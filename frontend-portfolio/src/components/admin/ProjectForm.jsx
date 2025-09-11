import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Schema de validation Zod
const projectSchema = z.object({
  title: z
  .string()
  .min(1, { message: "Le titre est requis" }),
});

export default function ProjectForm() {

  // Configuration React Hook Form avec Zod
  const {
    register,
    handleSubmit,
    formState: { errors: reactHookFormErrors, touchedFields },
    watch,
  } = useForm({
    resolver: zodResolver(projectSchema),
    mode: "onBlur",
  });

  return (

    // Formulaire de création/modification des projets
    <div className="flex flex-1 justify-center items-start p-4">
      <form className="p-6 w-full max-w-md">

        {/* Champ Titre */}
        <div className="mb-4">
            <label htmlFor="title" className="block mb-2 text-text-default">
              _titre<span className="text-error-foreground">*</span>
            </label>
            <input
              type="text"
              id="title"
              className={`w-full border bg-bg-terminal ${reactHookFormErrors.title
                ? 'border-error-foreground' 
                : touchedFields.title && !reactHookFormErrors.title && watch('title')?.trim() !== ""
                ? 'border-success-foreground' 
                : 'border-border-ide'         
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Titre du projet, max 25 caractères */"
              {...register("title")}
            />
            {reactHookFormErrors.title && (
              <p className="mt-1 text-sm text-error-foreground">
                {reactHookFormErrors.title.message}</p>
            )}
          </div>

        {/* Champ Description */}
        <div className="mb-4">
            <label htmlFor="description" className="block mb-2 text-text-default">
              _description<span className="text-error-foreground">*</span>
            </label>
            <textarea
              rows="3"
              id="description"
              className={`w-full border bg-bg-terminal ${reactHookFormErrors.description
                ? 'border-error-foreground' 
                : touchedFields.description && !reactHookFormErrors.description && watch('description')?.trim() !== ""
                ? 'border-success-foreground' 
                : 'border-border-ide'         
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Description du projet, max 85 caractères */"
              {...register("description")}
            />
            {reactHookFormErrors.description && (
              <p className="mt-1 text-sm text-error-foreground">
                {reactHookFormErrors.description.message}</p>
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
              className={`w-full border bg-bg-terminal ${reactHookFormErrors.projectUrl
                ? 'border-error-foreground' 
                : touchedFields.projectUrl && !reactHookFormErrors.projectUrl && watch('projectUrl')?.trim() !== ""
                ? 'border-success-foreground' 
                : 'border-border-ide'         
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* URL du projet */"
              {...register("projectUrl")}
            />
            {reactHookFormErrors.projectUrl && (
              <p className="mt-1 text-sm text-error-foreground">
                {reactHookFormErrors.projectUrl.message}</p>
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
              className={`w-full border bg-bg-terminal ${reactHookFormErrors.githubUrl
                ? 'border-error-foreground' 
                : touchedFields.githubUrl && !reactHookFormErrors.githubUrl && watch('githubUrl')?.trim() !== ""
                ? 'border-success-foreground' 
                : 'border-border-ide'         
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* URL du GitHub */"
              {...register("githubUrl")}
            />
            {reactHookFormErrors.githubUrl && (
              <p className="mt-1 text-sm text-error-foreground">
                {reactHookFormErrors.githubUrl.message}</p>
            )}
          </div>


      </form>
    </div>
  )
}