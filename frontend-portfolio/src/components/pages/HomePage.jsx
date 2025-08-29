import FileHeader from "../editor/FileHeader";
import EditorContainer from "../editor/EditorContainer";
import Terminal from "../terminal/Terminal";

export default function HomePage() {
  return (
    <div className="flex flex-col h-full">
      {/* FileHeader toujours affiché */}
      <FileHeader />
      <EditorContainer className="flex-none max-[769px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem]" />
      <Terminal className="flex-1" />
      {/* StatusBar supprimé car géré dans Layout */}
    </div>
  );
}
