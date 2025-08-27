export default function LineNumbers() {
  const lineCount = 21;
  
  return (
    <div className="w-10 pt-1 pb-1 text-right pr-3 text-line-number select-none text-xs max-[426px]:text-[0.7rem] max-[376px]:text-[0.625rem] max-[321px]:text-[0.5rem] sm:text-sm tracking-wide">
      {Array.from({ length: lineCount }, (_, index) => (
        <div key={index + 1} className="h-5 max-[426px]:h-3.5 max-[376px]:h-[0.9rem] max-[321px]:h-[0.8rem] flex items-center justify-end">
          {index + 1}
        </div>
      ))}
    </div>
  );
}