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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
  
  // Effet pour détecter si on est en mode desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 769);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Obtenir la classe pour l'espacement du bas en mode mobile
  const getMobilePaddingClass = () => {
    return !isDesktop ? 'pb-4' : '';
  };
  
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