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
            <EditorContainer className="flex-1 overflow-auto" />
            <Terminal className="h-64" />
            <StatusBar />
          </>
        );
      case 'a-propos':
        return (
          <>
            <AboutPage className="flex-1 overflow-auto" />
            <StatusBar />
          </>
        );
        case 'projets':
          return (
            <>
              <ProjectsPage className="flex-1 overflow-auto" />
              <StatusBar />
            </>
          );
        case 'contact':
          return (
            <>
              <ContactPage className="flex-1 overflow-auto" />
              <StatusBar />
            </>
          );
      default:
        return (
          <>
            <FileHeader />
            <EditorContainer className="flex-1 overflow-auto" />
            <Terminal className="h-64" />
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