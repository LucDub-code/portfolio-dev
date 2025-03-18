import chevronDown from '../../assets/icons/navigation/nav-full-down.svg';
import htmlIcon from '../../assets/icons/technos/html.svg';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace('_', '');
    setFormData({
      ...formData,
      [fieldName]: value
    });
    
    // Valider le champ si déjà touché
    if (touched[fieldName]) {
      validateField(fieldName, value);
    }
  };

  // Marquer un champ comme touché lors de la perte de focus
  const handleBlur = (e) => {
    const fieldName = e.target.id.replace('_', '');
    setTouched({
      ...touched,
      [fieldName]: true
    });
    validateField(fieldName, formData[fieldName]);
  };

  // Valider un champ spécifique
  const validateField = (fieldName, value) => {
    let fieldErrors = { ...errors };
    
    switch(fieldName) {
      case 'nom':
        if (!value.trim()) {
          fieldErrors.nom = 'Le nom est requis';
        } else {
          delete fieldErrors.nom;
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          fieldErrors.email = 'L\'email est requis';
        } else if (!emailRegex.test(value)) {
          fieldErrors.email = 'L\'adresse email entrée est incorrecte';
        } else {
          delete fieldErrors.email;
        }
        break;
      case 'message':
        if (!value.trim()) {
          fieldErrors.message = 'Le message est requis';
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
      message: true
    };
    setTouched(allTouched);
    
    // Valider tous les champs
    validateField('nom', formData.nom);
    validateField('email', formData.email);
    validateField('message', formData.message);
    
    // Vérifier s'il y a des erreurs
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = 'Merci de remplir votre nom';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Merci d\'entrer votre email';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'L\'adresse email entrée est incorrecte';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Merci de me laisser votre message';
    
    setErrors(newErrors);
    
    // Si pas d'erreurs, envoyer le formulaire
    if (Object.keys(newErrors).length === 0) {
      console.log('Formulaire envoyé:', formData);
      // Logique d'envoi du formulaire
    }
  };

  // Déterminer la classe de bordure en fonction de la validation
  const getBorderClass = (fieldName) => {
    if (!touched[fieldName]) return 'border-border-ide';
    return errors[fieldName] 
      ? 'border-error-foreground' 
      : formData[fieldName].trim() !== '' 
        ? 'border-success-foreground' 
        : 'border-error-foreground';
  };

  return (
    <div className={`flex flex-col h-full`}>
      {/* En-tête de la page */}
      <div className="flex items-center px-3 py-2 bg-bg-terminal border-b border-border-ide">
        <img src={chevronDown} alt="Chevron" className="w-4 h-4 mr-2" />
        <img src={htmlIcon} alt="Dossier" className="w-5 h-5 mr-2" />
        <span className="text-text-default text-base">_me-contacter.html</span>
      </div>
      {/* Formulaire de contact */}
      <div className="flex-1 flex items-center justify-center p-4">
        <form className="w-full max-w-md p-6" onSubmit={handleSubmit}>
          {/* Champ Nom */}
          <div className="mb-4">
            <label htmlFor="_nom" className="block text-text-default mb-2">_nom<span className="text-error-foreground">*</span></label>
            <input 
              type="text" 
              id="_nom" 
              className={`w-full bg-bg-terminal border ${getBorderClass('nom')} rounded p-2 text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Votre nom */"
              value={formData.nom}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.nom && errors.nom && (
              <p className="mt-1 text-error-foreground text-sm">{errors.nom}</p>
            )}
          </div>
          
          {/* Champ Email */}
          <div className="mb-4">
            <label htmlFor="_email" className="block text-text-default mb-2">_email<span className="text-error-foreground">*</span></label>
            <input 
              type="email" 
              id="_email" 
              className={`w-full bg-bg-terminal border ${getBorderClass('email')} rounded p-2 text-text-default focus:outline-none focus:border-blue-accent placeholder:text-gray-inactive`}
              placeholder="/* Votre email */"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-error-foreground text-sm">{errors.email}</p>
            )}
          </div>
          
          {/* Champ Message */}
          <div className="mb-6">
            <label htmlFor="_message" className="block text-text-default mb-2">_message<span className="text-error-foreground">*</span></label>
            <textarea 
              id="_message" 
              rows="6" 
              className={`w-full bg-bg-terminal border ${getBorderClass('message')} rounded p-2 text-text-default focus:outline-none focus:border-blue-accent resize-none placeholder:text-gray-inactive`}
              placeholder="/* Écrivez votre message ici... */"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            ></textarea>
            {touched.message && errors.message && (
              <p className="mt-1 text-error-foreground text-sm">{errors.message}</p>
            )}
          </div>
          
          {/* Bouton Envoyer avec effet Hover */}
          <div className="flex">
            <button 
              type="submit" 
              className="bg-blue-accent hover:bg-focus-hover text-white py-2 px-8 rounded border border-border-ide shadow-md transition-colors"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}