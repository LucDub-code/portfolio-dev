import { useNavigation } from '../context/NavigationContext';
import FileHeader from '../editor/FileHeader';
import EditorContainer from '../editor/EditorContainer';
import Terminal from '../terminal/Terminal';
import StatusBar from '../statusBar/StatusBar';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import { useEffect, useState } from 'react';

export default function EditorContent() {
  const { activePage } = useNavigation();
  const [isDesktop, setIsDesktop] = useState(false);
  // État pour suivre si l'initialisation est terminée
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Effet pour détecter si on est en mode desktop
  useEffect(() => {
    // Fonction pour vérifier la taille de l'écran
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 769);
    };
    
    // Première vérification avec un délai pour s'assurer que le navigateur a bien établi la taille
    const initialCheck = setTimeout(() => {
      checkIfDesktop();
      setIsInitialized(true);
    }, 100);
    
    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', checkIfDesktop);
    
    // Nettoyer
    return () => {
      clearTimeout(initialCheck);
      window.removeEventListener('resize', checkIfDesktop);
    };
  }, []);
  
  // Obtenir la classe pour l'espacement du bas en mode mobile
  const getMobilePaddingClass = () => {
    return !isDesktop ? 'pb-4' : '';
  };
  
  // Si l'initialisation n'est pas terminée, afficher un contenu minimal
  if (!isInitialized) {
    return (
      <div className="flex flex-col flex-1 overflow-hidden relative">
        <div className="flex-1"></div>
      </div>
    );
  }
  
  // Rendu conditionnel selon la page active
  const renderPageContent = () => {
    switch(activePage) {
      case 'hello-world':
        return (
          <>
            {!isDesktop ? (activePage === 'hello-world' && <FileHeader />) : <FileHeader />}
            <EditorContainer className="flex-none max-[769px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem]" />
            <Terminal className="flex-1" />
            <StatusBar />
          </>
        );
      case 'a-propos':
        return (
          <>
            {isDesktop && <FileHeader />}
            <AboutPage className={`flex-1 overflow-auto max-[769px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] mb-4 ${getMobilePaddingClass()}`} />
            <StatusBar />
          </>
        );
        case 'projets':
          return (
            <>
              {isDesktop && <FileHeader />}
              <ProjectsPage className={`flex-1 overflow-auto max-[769px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] ${getMobilePaddingClass()}`} />
              <StatusBar />
            </>
          );
        case 'contact':
          return (
            <>
              {isDesktop && <FileHeader />}
              <ContactPage className={`flex-1 overflow-auto max-[769px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] ${getMobilePaddingClass()}`} />
              <StatusBar />
            </>
          );
      default:
        return (
          <>
            {!isDesktop ? (activePage === 'hello-world' && <FileHeader />) : <FileHeader />}
            <EditorContainer className="flex-none max-[769px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem]" />
            <Terminal className="flex-1" />
            <StatusBar />
          </>
        );
    }
  };
  
  return (
    <div className={`flex flex-col flex-1 overflow-hidden relative ${getMobilePaddingClass()}`}>
      {renderPageContent()}
    </div>
  );
}