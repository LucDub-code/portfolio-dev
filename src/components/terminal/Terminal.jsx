import TerminalHeader from './TerminalHeader'
import TerminalContent from './TerminalContent'
import DebugControls from './DebugControls'

export default function Terminal() {
  return (
    <div className="flex-1 flex flex-col bg-bg-terminal border-t border-border-ide">
      <TerminalHeader />
      <TerminalContent />
      <DebugControls />
    </div>
  )
}