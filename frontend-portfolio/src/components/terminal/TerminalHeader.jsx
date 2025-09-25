import { TextShimmer } from './text-shimmer'

export default function TerminalHeader() {
  return (
    <div className="max-[425px]:hidden absolute top-0 left-0 right-0 z-10 w-full border-b border-border-ide bg-bg-terminal
  h-6 flex items-center justify-center">
      <TextShimmer className="text-[0.8rem]" duration={3}>
        || Vigeo ||
      </TextShimmer>
    </div>
  );
}