import TerminalHeader from './TerminalHeader'
import TerminalContent from './TerminalContent'
import BugSquashGame from '../game/BugSquashGame'

export default function Terminal({ className }) {
  return (
    <div className={`flex flex-col bg-bg-terminal border-t border-border-ide ${className || ''}`}>
      <TerminalHeader />
      <TerminalContent />
      <BugSquashGame />
    </div>
  )
}