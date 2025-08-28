import LineNumbers from './LineNumbers';
import CodeEditor from './CodeEditor';

export default function EditorContainer({ className }) {
  return (
    <div className={`flex ${className}`}>
      <LineNumbers />
      <CodeEditor />
    </div>
  );
}