import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import loginIcon from "../assets/icons/navigation/login.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({ 
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Vérifier le format et afficher les erreurs de validation
  const validateField = (fieldName, value) => {
    let fieldErrors = { ...errors };
    let hasError = false;

    switch (fieldName) {
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          fieldErrors.email = "L'email admin est requis";
          hasError = true;
        } else if (!emailRegex.test(value)) {
          fieldErrors.email = "L'adresse email admin entrée est incorrecte";
          hasError = true;
        } else {
          delete fieldErrors.email;
        }
        break;
      }
      case "password":
        if (!value.trim()) {
          fieldErrors.password = "Le mot de passe est requis";
          hasError = true;
        } else {
          delete fieldErrors.password;
        }
        break;
      default:
        break;
    }

    setErrors(fieldErrors);
    return hasError;
  };

  // Déterminer la classe de bordure en fonction de la validation
  const getBorderClass = (fieldName) => {
    if (!touched[fieldName]) {
      return "border-border-ide";
    } else {
      return errors[fieldName]
        ? "border-error-foreground"
        : formData[fieldName].trim() !== ""
        ? "border-success-foreground"
        : "border-error-foreground";
    }
  };

  // Soumission du formulaire vers l'API
  const handleSubmit = (e) => {
    e.preventDefault();

    // Marquer tous les champs comme touchés
    const allTouched = {
      email: true,
      password: true,
    };
    setTouched(allTouched);

    // Valider tous les champs et récupérer les erreurs
    const emailError = validateField("email", formData.email);
    const passwordError = validateField("password", formData.password);

    // Si pas d'erreurs, envoi vers l'API
    if (!emailError && !passwordError) {
      setIsSubmitting(true);
      
      fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Identifiants incorrects');
        }
      })
      .then(data => {
        // Stockage du token et redirection vers la page admin
        localStorage.setItem('token', data.token);
        navigate('/admin');
        console.log('Connexion réussie !', data);
      })
      .catch(error => {
        setErrors({ general: error.message || 'Erreur de connexion' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* En-tête mobile */}
      <div className="hidden max-[1060px]:flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="mr-2 w-4 h-4" />
        <img src={loginIcon} alt="Dossier" className="mr-2 w-5 h-5" />
        <span className="text-base text-text-default">_login.html</span>
      </div>

      {/* Formulaire de connexion */}
      <div className="flex flex-1 justify-center items-start pt-8">
        <form className="p-6 w-full max-w-md" onSubmit={handleSubmit}>
          
          {/* Message d'erreur général */}
          {errors.general && (
            <div className="mb-4 p-3 bg-error-foreground/10 border border-error-foreground rounded text-error-foreground">
              {errors.general}
            </div>
          )}

          {/* Champ Email */}
          <div className="mb-4">
            <label htmlFor="_email" className="block mb-2 text-text-default">
              _email<span className="text-error-foreground">*</span>
            </label>
            <input
              type="email"
              id="_email"
              name="email"
              className={`w-full border bg-bg-terminal ${getBorderClass("email")} p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Email admin */"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-error-foreground">
                {errors.email}
              </p>
            )}
          </div>

          {/* Champ Mot de passe */}
          <div className="mb-4">
            <label htmlFor="_password" className="block mb-2 text-text-default">
              _password<span className="text-error-foreground">*</span>
            </label>
            <input
              type="password"
              id="_password"
              name="password"
              className={`w-full border bg-bg-terminal ${getBorderClass("password")} p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Mot de passe admin */"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.password && errors.password && (
              <p className="mt-1 text-sm text-error-foreground">
                {errors.password}
              </p>
            )}
          </div>

          {/* Bouton Connexion */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="px-8 py-2 text-white rounded border shadow-md transition-colors cursor-pointer bg-blue-accent hover:bg-focus-hover border-border-ide disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Connexion en cours..." : "Se connecter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}