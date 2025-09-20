import chevronDown from "../assets/icons/navigation/nav-full-down.svg";
import loginIcon from "../assets/icons/navigation/login.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";

// Schema de validation Zod
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "L'email est requis" })
    .email("L'email est incorrect"),
  password: z
    .string()
    .min(1, { message: "Le mot de passe est requis" }),
});

export default function LoginPage() {
  const { login, loginError } = useAuth();

  const location = useLocation();

  const authError = location.state?.error;

  // Configuration React Hook Form avec Zod
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    login(data.email, data.password);
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
        <form className="p-6 w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-4 min-h-14">
            {/* Message d'erreur général */}
            <div>
              {loginError && (
                <div className="p-3 bg-error-foreground/10 border border-error-foreground rounded text-error-foreground">
                  {loginError}
                </div>
              )}
            </div>
            {/* Message d'erreur authentification */}
            <div>
              {authError && (
                <div className="p-3 bg-error-foreground/10 border border-error-foreground rounded text-error-foreground">
                  {authError}
                </div>
              )}
            </div>
          </div>

          {/* Champ Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-text-default">
              _email<span className="text-error-foreground">*</span>
            </label>
            <input
              type="email"
              id="email"
              className={`w-full border bg-bg-terminal ${
                errors.email
                  ? 'border-error-foreground' 
                  : touchedFields.email && !errors.email && watch('email')?.trim() !== ""
                  ? 'border-success-foreground' 
                  : 'border-border-ide'         
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Email admin */"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error-foreground">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Champ Mot de passe */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-text-default">
              _password<span className="text-error-foreground">*</span>
            </label>
            <input
              type="password"
              id="password"
              className={`w-full border bg-bg-terminal ${
                errors.password 
                  ? 'border-error-foreground' 
                  : touchedFields.password && !errors.password && watch('password')?.trim() !== ""
                  ? 'border-success-foreground'
                  : 'border-border-ide'         
              } p-2 rounded text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Mot de passe admin */"
              {...register("password")}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-error-foreground">
                {errors.password.message}
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