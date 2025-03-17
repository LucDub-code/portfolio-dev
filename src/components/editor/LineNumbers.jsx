export default function LineNumbers() {
  const lineCount = 23;
  
  return (
    <div className="w-10 text-right pr-3 text-line-number select-none text-xs">
      {Array.from({ length: lineCount }, (_, index) => (
        <div key={index + 1} className="h-5 flex items-center justify-end">
          {index + 1}
        </div>
      ))}
    </div>
  );
}