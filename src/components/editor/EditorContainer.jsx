import LineNumbers from './LineNumbers';
import CodeEditor from './CodeEditor';

export default function EditorContainer() {
  return (
    <div className="flex">
      <LineNumbers />
      <CodeEditor className="pl-1 flex-1" />
    </div>
  );
}