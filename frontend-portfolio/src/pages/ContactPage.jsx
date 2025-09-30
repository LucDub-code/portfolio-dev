import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import htmlIcon from "../assets/icons/technos/html.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { API_ENDPOINTS } from "../config/api";

// Schema de validation Zod
const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Le nom est requis" }),
  email: z
    .string().min(1, { message: "L'email est requis" })
    .email("L'email est incorrect"),
  message: z
    .string()
    .min(1, { message: "Le message est requis" }),
  website: z
    .string()
    .optional(),
});

export default function ContactPage() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Configuration React Hook Form avec Zod
  const {
    register,
    handleSubmit,
    formState: { errors: reactHookFormErrors, touchedFields },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  // Fonction de soumission du formulaire
  const onSubmit = (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    fetch(API_ENDPOINTS.CONTACT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
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
        setSubmitSuccess(true);
        setIsSubmitting(false);
        reset();
      })
      .catch((error) => {
        setSubmitError(error.message || 'Erreur lors de l\'envoi');
        setIsSubmitting(false);
        reset();
      });
  };

  return (
    <div className={`flex flex-col h-full`}>
      {/* En-tête mobile (caché sur desktop où FileHeader prend le relais) */}
      <div className="hidden max-[1060px]:flex items-center px-3 py-2 h-10 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="w-4 h-4 mr-2" />
        <img src={htmlIcon} alt="Dossier" className="w-5 h-5 mr-2" />
        <span className="text-base text-text-default">_me-contacter.html</span>
      </div>

      {/* Formulaire de contact */}
      <div className="flex items-start justify-center flex-1 p-4">
        <form className="w-full max-w-md p-6" onSubmit={handleSubmit(onSubmit)}>

          {/* Champ Nom */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-text-default">
              _nom<span className="text-error-foreground">*</span>
            </label>
            <input
              type="text"
              id="name"
              className={`w-full border bg-bg-terminal ${reactHookFormErrors.name
                ? 'border-error-foreground'
                : touchedFields.name && !reactHookFormErrors.name && watch('name')?.trim() !== ""
                  ? 'border-success-foreground'
                  : 'border-border-ide'
                } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Votre nom */"
              {...register("name")}
            />
            {reactHookFormErrors.name && (
              <p className="mt-1 text-sm text-error-foreground">
                {reactHookFormErrors.name.message}</p>
            )}
          </div>

          {/* Champ Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-text-default">
              _email<span className="text-error-foreground">*</span>
            </label>
            <input
              type="email"
              id="email"
              className={`w-full border bg-bg-terminal ${reactHookFormErrors.email
                ? 'border-error-foreground'
                : touchedFields.email && !reactHookFormErrors.email && watch('email')?.trim() !== ""
                  ? 'border-success-foreground'
                  : 'border-border-ide'
                } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Votre email */"
              {...register("email")}
            />
            {reactHookFormErrors.email && (
              <p className="mt-1 text-sm text-error-foreground">
                {reactHookFormErrors.email.message}
              </p>
            )}
          </div>

          {/* Champ website */}
          <div className="hidden">
            <label htmlFor="website">Site web</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              {...register("website")}
            />
          </div>

          {/* Champ Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-text-default">
              _message<span className="text-error-foreground">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className={`w-full border bg-bg-terminal ${reactHookFormErrors.message
                ? 'border-error-foreground'
                : touchedFields.message && !reactHookFormErrors.message && watch('message')?.trim() !== ""
                  ? 'border-success-foreground'
                  : 'border-border-ide'
                } p-2 rounded resize-none text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Écrivez votre message ici... */"
              {...register("message")}
            ></textarea>
            {reactHookFormErrors.message && (
              <p className="mt-1 text-sm text-error-foreground">
                {reactHookFormErrors.message.message}
              </p>
            )}
          </div>

          {/* Bouton Envoyer avec état de soumission */}
          <div className="flex">
            <button
              type="submit"
              className="px-8 py-2 transition-colors border rounded shadow-md cursor-pointer text-text-selected bg-blue-accent hover:bg-focus-hover border-border-ide"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>

          {/* Message de succès*/}
          {submitSuccess && !submitError && (
            <div className="p-3 mt-8 border rounded bg-success-foreground/10 border-success-foreground text-success-foreground">
              Message envoyé avec succès
            </div>
          )}

          {/* Message d'erreur*/}
          {submitError && (
            <div className="p-3 mt-8 border rounded bg-error-foreground/10 border-error-foreground text-error-foreground">
              {submitError}
            </div>
          )}

        </form>
      </div>
    </div>
  );
}
