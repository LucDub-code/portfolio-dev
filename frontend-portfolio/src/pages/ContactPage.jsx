import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import htmlIcon from "../assets/icons/technos/html.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

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
    
    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      reset();
    })
    .catch(() => {
      setSubmitError('Erreur lors de l\'envoi');
      setIsSubmitting(false);
    });
  };

  return (
    <div className={`flex flex-col h-full`}>
      {/* En-tête mobile (caché sur desktop où FileHeader prend le relais) */}
      <div className="hidden max-[1060px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="mr-2 w-4 h-4" />
        <img src={htmlIcon} alt="Dossier" className="mr-2 w-5 h-5" />
        <span className="text-base text-text-default">_me-contacter.html</span>
      </div>

      {/* Formulaire de contact */}
      <div className="flex flex-1 justify-center items-start p-4">
        <form className="p-6 w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>

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
              className="px-8 py-2 text-text-selected rounded border shadow-md transition-colors cursor-pointer bg-blue-accent hover:bg-focus-hover border-border-ide"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>

          {/* Message de succès*/}
          {submitSuccess && (
            <div className="mt-8 p-3 bg-success-foreground/10 border border-success-foreground rounded text-success-foreground">
              Message envoyé avec succès
            </div>
          )}

          {/* Message d'erreur*/}
          {submitError && (
            <div className="mt-8 p-3 bg-error-foreground/10 border border-error-foreground rounded text-error-foreground">
              Erreur lors de l'envoi du message
            </div>
          )}

        </form>
      </div>
    </div>
  );
}
