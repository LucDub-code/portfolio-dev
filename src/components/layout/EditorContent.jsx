import FileHeader from '../editor/FileHeader';
import EditorContainer from '../editor/EditorContainer';
import Terminal from '../terminal/Terminal';
import StatusBar from '../statusBar/StatusBar';

export default function EditorContent() {
  return (
    <div className="flex flex-col h-full w-full bg-bg-ui text-text-default">
      <FileHeader />
      <EditorContainer className="flex-1 overflow-auto" />
      <Terminal className="h-64" />
      <StatusBar />
    </div>
  );
}