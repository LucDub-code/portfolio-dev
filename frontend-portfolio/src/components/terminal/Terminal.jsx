import TerminalHeader from './TerminalHeader'
import AiChat from '../ai-elements/ai-chat'

export default function Terminal() {
  return (
    <div className="flex flex-col bg-bg-terminal border-t border-border-ide relative h-[calc(100%-490px)] max-[425px]:h-[calc(100%-20rem)]">
      <TerminalHeader />
      <div className='pb-8 pt-14 px-8 flex-1 h-full'>
        <AiChat />
      </div>
    </div>
  )
}