export default function LineNumbers() {
  const lineCount = 21;

  return (
    <div className="w-10 pt-1 pb-1 text-right pr-3 text-line-number select-none text-xs max-[425px]:text-[0.7rem] max-[380px]:text-[0.625rem] max-[320px]:text-[0.5rem] sm:text-sm tracking-wide">
      {Array.from({ length: lineCount }, (_, index) => (
        <div
          key={index + 1}
          className="h-5 max-[425px]:h-3.5 max-[380px]:h-[0.9rem] max-[320px]:h-[0.8rem] flex items-center justify-end"
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
