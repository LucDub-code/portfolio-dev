import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import htmlIcon from "../assets/icons/technos/html.svg";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleFormspreeSubmit] = useForm("xpwppjvg");
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace("_", "");
    setFormData({
      ...formData,
      [fieldName]: value,
    });

    // Valider le champ si déjà touché
    if (touched[fieldName]) {
      validateField(fieldName, value);
    }
  };

  // Marquer un champ comme touché lors de la perte de focus
  const handleBlur = (e) => {
    const fieldName = e.target.id.replace("_", "");
    setTouched({
      ...touched,
      [fieldName]: true,
    });
    validateField(fieldName, formData[fieldName]);
  };

  // Valider un champ spécifique
  const validateField = (fieldName, value) => {
    let fieldErrors = { ...errors };

    switch (fieldName) {
      case "nom":
        if (!value.trim()) {
          fieldErrors.nom = "Le nom est requis";
        } else {
          delete fieldErrors.nom;
        }
        break;
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          fieldErrors.email = "L'email est requis";
        } else if (!emailRegex.test(value)) {
          fieldErrors.email = "L'adresse email entrée est incorrecte";
        } else {
          delete fieldErrors.email;
        }
        break;
      }
      case "message":
        if (!value.trim()) {
          fieldErrors.message = "Le message est requis";
        } else {
          delete fieldErrors.message;
        }
        break;
      default:
        break;
    }

    setErrors(fieldErrors);
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Marquer tous les champs comme touchés
    const allTouched = {
      nom: true,
      email: true,
      message: true,
    };
    setTouched(allTouched);

    // Valider tous les champs
    validateField("nom", formData.nom);
    validateField("email", formData.email);
    validateField("message", formData.message);

    // Vérifier s'il y a des erreurs
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Merci de remplir votre nom";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Merci d'entrer votre email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "L'adresse email entrée est incorrecte";
    }

    if (!formData.message.trim())
      newErrors.message = "Merci de me laisser votre message";

    setErrors(newErrors);

    // Si pas d'erreurs, envoyer le formulaire via Formspree
    if (Object.keys(newErrors).length === 0) {
      handleFormspreeSubmit(e);
    }
  };

  // Déterminer la classe de bordure en fonction de la validation
  const getBorderClass = (fieldName) => {
    if (!touched[fieldName]) return "border-border-ide";
    return errors[fieldName]
      ? "border-error-foreground"
      : formData[fieldName].trim() !== ""
      ? "border-success-foreground"
      : "border-error-foreground";
  };

  // Afficher un message de succès si l'envoi a réussi
  if (state.succeeded) {
    return (
      <div className="flex flex-col h-full">
        {/* En-tête mobile (caché sur desktop où FileHeader prend le relais) */}
        <div className="hidden max-[769px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
          <img src={chevronDown} alt="Chevron" className="w-4 h-4 mr-2" />
          <img src={htmlIcon} alt="Dossier" className="w-5 h-5 mr-2" />
          <span className="text-text-default text-base">
            _me-contacter.html
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md p-6 text-center">
            <h2 className="text-xl text-success-foreground mb-4">
              Message envoyé avec succès !
            </h2>
            <p className="text-text-default">
              Merci pour votre message. Je vous répondrai dans les plus brefs
              délais.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full`}>
      {/* En-tête mobile (caché sur desktop où FileHeader prend le relais) */}
      <div className="hidden max-[769px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="w-4 h-4 mr-2" />
        <img src={htmlIcon} alt="Dossier" className="w-5 h-5 mr-2" />
        <span className="text-text-default text-base">_me-contacter.html</span>
      </div>
      {/* Formulaire de contact */}
      <div className="flex-1 flex items-start justify-center p-4 pt-2">
        <form className="w-full max-w-md p-6" onSubmit={handleSubmit}>
          {/* Champ Nom */}
          <div className="mb-4">
            <label htmlFor="_nom" className="block text-text-default mb-2">
              _nom<span className="text-error-foreground">*</span>
            </label>
            <input
              type="text"
              id="_nom"
              name="nom"
              className={`w-full bg-bg-terminal border ${getBorderClass(
                "nom"
              )} rounded p-2 text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Votre nom */"
              value={formData.nom}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.nom && errors.nom && (
              <p className="mt-1 text-error-foreground text-sm">{errors.nom}</p>
            )}
            <ValidationError prefix="Nom" field="nom" errors={state.errors} />
          </div>

          {/* Champ Email */}
          <div className="mb-4">
            <label htmlFor="_email" className="block text-text-default mb-2">
              _email<span className="text-error-foreground">*</span>
            </label>
            <input
              type="email"
              id="_email"
              name="email"
              className={`w-full bg-bg-terminal border ${getBorderClass(
                "email"
              )} rounded p-2 text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Votre email */"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-error-foreground text-sm">
                {errors.email}
              </p>
            )}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Champ Message */}
          <div className="mb-6">
            <label htmlFor="_message" className="block text-text-default mb-2">
              _message<span className="text-error-foreground">*</span>
            </label>
            <textarea
              id="_message"
              name="message"
              rows="6"
              className={`w-full bg-bg-terminal border ${getBorderClass(
                "message"
              )} rounded p-2 text-text-default focus:outline-none focus:border-blue-accent resize-none placeholder:text-gray-inactive`}
              placeholder="/* Écrivez votre message ici... */"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            ></textarea>
            {touched.message && errors.message && (
              <p className="mt-1 text-error-foreground text-sm">
                {errors.message}
              </p>
            )}
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Bouton Envoyer avec état de soumission */}
          <div className="flex">
            <button
              type="submit"
              className="bg-blue-accent hover:bg-focus-hover text-white py-2 px-8 rounded border border-border-ide shadow-md transition-colors cursor-pointer"
              disabled={state.submitting}
            >
              {state.submitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
