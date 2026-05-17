import { useState } from 'react'

type Mode = 'STOP' | 'SLOW' | 'NORMAL' | 'RACING'

const MODES: Mode[] = ['STOP', 'SLOW', 'NORMAL', 'RACING']

interface Props {
  onTriggerDanger: () => void
  dangerFlash: boolean
}

function DangerIndicator({
  flash,
}: {
  flash: boolean
}) {
  return (
     <div
      className={`w-[12vw] min-w-[100px] h-full border-2 border-[#c12600] flex flex-col items-center justify-center overflow-visible px-[0.2vw] transition-all duration-150
        ${
          flash
            ? `
              animate-[dangerFlash_2s_linear_2]
              brightness-150
              shadow-[0_0_6px_rgba(193,38,0,0.7)]
            `
              : ''
              }
            `}
          >
          <div
            className="text-[2.8vw] leading-none whitespace-nowrap transition-all duration-150"
            style={{ color: '#c12600', textShadow: `0 0 10px rgba(255,60,0,0.95)` }}
          >
            DANGER
          </div>
          <div
            className="text-[1.35vw] mt-[0.55vh] tracking-[0.08em] leading-none whitespace-nowrap transition-all duration-150"
            style={{ color: '#c12600', textShadow: `0 0 10px rgba(255,60,0,0.95)` }}
          >
            EMERGENCY
          </div>
      </div>
    )
  } 

export default function ModeSelector({
  onTriggerDanger,
  dangerFlash,
}: Props) {
  const [activeMode, setActiveMode] = useState<Mode>('NORMAL');

  return (
    <div className="flex items-stretch justify-between gap-[1vw] overflow-hidden">
      <div className="flex-1 h-[18vh] bg-[linear-gradient(to_right,#976e19,#a29923,#7d8c1b,#577d1f)] pl-[20vh] pr-[4vh] pt-[2vh] pb-[3vh] flex items-center gap-[4vw] overflow-hidden">
        {MODES.map((mode) => (
          <button
            key={mode}
            onClick={() => {
              setActiveMode(mode)
              onTriggerDanger()
            }}
            className="panel-button flex-1 h-full flex flex-col items-center justify-between py-[0.8vh] px-[0.35vw] overflow-hidden"
          >
            <div className="flex-1 flex items-center justify-center text-[2.8vw] glow whitespace-nowrap overflow-hidden text-ellipsis">
              {mode}
            </div>
            <div className={`panel-light ${activeMode === mode ? 'active' : ''}`} />
          </button>
        ))}
      </div>

      <div className="danger h-[18vh] pl-[2vh] pr-[16vh] py-[2vh] flex items-center overflow-hidden">
       <DangerIndicator flash={dangerFlash} />
      </div>
      
    </div>
  )
}
