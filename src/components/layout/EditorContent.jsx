import { useNavigation } from '../context/NavigationContext';
import FileHeader from '../editor/FileHeader';
import EditorContainer from '../editor/EditorContainer';
import Terminal from '../terminal/Terminal';
import StatusBar from '../statusBar/StatusBar';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';

export default function EditorContent() {
  const { activePage } = useNavigation();
  
  // Rendu conditionnel selon la page active
  const renderPageContent = () => {
    switch(activePage) {
      case 'hello-world':
        return (
          <>
            <FileHeader />
            <EditorContainer className="flex-none max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem]" />
            <Terminal className="flex-1" />
            <StatusBar />
          </>
        );
      case 'a-propos':
        return (
          <>
            <AboutPage className="flex-1 overflow-auto max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] mb-4" />
            <StatusBar />
          </>
        );
        case 'projets':
          return (
            <>
              <ProjectsPage className="flex-1 overflow-auto max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem]" />
              <StatusBar />
            </>
          );
        case 'contact':
          return (
            <>
              <ContactPage className="flex-1 overflow-auto max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem]" />
              <StatusBar />
            </>
          );
      default:
        return (
          <>
            <FileHeader />
            <EditorContainer className="flex-none max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem]" />
            <Terminal className="flex-1" />
            <StatusBar />
          </>
        );
    }
  };
  
  return (
    <div className="flex flex-col h-full w-full bg-bg-ui text-text-default">
      {renderPageContent()}
    </div>
  );
}