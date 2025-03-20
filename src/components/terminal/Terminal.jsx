import TerminalHeader from './TerminalHeader'
import BugSquashGame from '../game/BugSquashGame'

export default function Terminal({ className }) {
  return (
    <div className={`flex flex-col bg-bg-terminal border-t border-border-ide ${className || ''}`}>
      <TerminalHeader />
      <div className="flex-1 flex justify-center items-center">
        <BugSquashGame />
      </div>
    </div>
  )
}