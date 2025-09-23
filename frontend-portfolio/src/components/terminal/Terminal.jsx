import TerminalHeader from './TerminalHeader'
import AiChat from '../ai-elements/ai-chat'

export default function Terminal() {
  return (
    <div className="flex flex-col bg-bg-terminal border-t border-border-ide relative h-[calc(100%-450px)] max-[425px]:h-[calc(100%-20rem)]">
      <TerminalHeader />
      <div className='pb-8 pt-14 max-[425px]:pb-5 max-[425px]:pt-2 px-8 max-[425px]:px-2 flex-1 h-full'>
        <AiChat />
      </div>
    </div>
  )
}