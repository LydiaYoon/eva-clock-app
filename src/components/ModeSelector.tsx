import { useState } from 'react'

type Mode = 'STOP' | 'SLOW' | 'NORMAL' | 'RACING'

const MODES: Mode[] = ['STOP', 'SLOW', 'NORMAL', 'RACING']

export default function ModeSelector() {
  const [activeMode, setActiveMode] = useState<Mode>('NORMAL')

  return (
    <div className="flex items-stretch justify-between gap-[1vw] overflow-hidden">
      <div className="flex-1 h-[14vh] bg-[linear-gradient(to_right,#976e19,#a29923,#7d8c1b,#577d1f)] pl-[20vh] pr-[1vh] py-[2vh] flex items-center gap-[1vw] overflow-hidden">
        {MODES.map((mode) => (
          <button
            key={mode}
            onClick={() => setActiveMode(mode)}
            className="panel-button flex-1 h-full flex flex-col justify-between py-[0.8vh] px-[0.35vw] overflow-hidden"
          >
            <div className="flex-1 flex items-center justify-center text-[2.8vw] glow whitespace-nowrap overflow-hidden text-ellipsis">
              {mode}
            </div>
            <div className={`panel-light ${activeMode === mode ? 'active' : ''}`} />
          </button>
        ))}
      </div>

      <div className="h-[14vh] pl-[1vh] pr-[7vh] py-[2vh] flex items-center gap-[1vw] overflow-hidden">
        <div
          className="w-[12vw] min-w-[170px] h-full border-2 border-[#c12600] bg-black flex flex-col items-center justify-center overflow-hidden px-[0.2vw]"
        >
          <div className="text-[2.8vw] leading-none glow whitespace-nowrap"
          style={{ color: '#c12600' }}>
            DANGER
          </div>
          <div className="text-[1.35vw] mt-[0.55vh] tracking-[0.08em] leading-none glow whitespace-nowrap"
          style={{ color: '#c12600' }}>
            EMERGENCY
          </div>
        </div>
      </div>
      
    </div>
  )
}
