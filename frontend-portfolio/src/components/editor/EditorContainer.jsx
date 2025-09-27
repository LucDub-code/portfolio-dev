import LineNumbers from './LineNumbers';
import CodeEditor from './CodeEditor';
import TiltCardContainer from './TiltCardContainer';

export default function EditorContainer({ className }) {
  return (
    <div className={`flex ${className}`}>
      <LineNumbers />
      <CodeEditor />
      <TiltCardContainer />
    </div>
  );
}