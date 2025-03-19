import ScoreCounter from './ScoreCounter'
import TimeCounter from './TimeCounter'
import GameButton from './GameButton'
import Bug from './Bug'

export default function BugSquashGame() {
  return (
    <div>
      <ScoreCounter />
      <TimeCounter />
      <GameButton />
      <Bug />
    </div>
  )
}