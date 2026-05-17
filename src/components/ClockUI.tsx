import { useEffect, useRef, useState } from 'react';
import { useDigitalClock } from '../hooks/useDigitalClock'
import ClockDisplay from './ClockDisplay'
import EnergyPanel from './EnergyPanel'
import ModeSelector from './ModeSelector'

export default function ClockUI() {
  const t = useDigitalClock();
  const [dangerFlash, setDangerFlash] = useState(false)

const prevAmpm = useRef(t.ampm)

useEffect(() => {
  if (prevAmpm.current !== t.ampm) {
    triggerDanger()
    prevAmpm.current = t.ampm
  }
}, [t.ampm])

const triggerDanger = () => {
  setDangerFlash(false)

  requestAnimationFrame(() => {
    setDangerFlash(true)

    setTimeout(() => {
      setDangerFlash(false)
    }, 220)
  })
}

  return (
    <div className="main-ui crt w-screen h-dvh overflow-hidden grid grid-rows-[1fr_auto]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,170,0,0.03),transparent_60%)]" />
      <div className="tv-glitch" />
      <div className="relative w-full h-full overflow-hidden grid grid-rows-[1fr_auto]">
        
        {/* TOP AREA */}
        <div className="grid grid-cols-[1fr_22vw] overflow-hidden px-[4vw] pt-[3vh] pb-[2vh] border border-[#d68c00]">
          
          {/* LEFT */}
          <div className="grid grid-rows-[auto_1fr] overflow-hidden">
            {/* <div className="flex items-end pt-[0.5vh] overflow-hidden gap-[0vw]"> */}
            <div className="grid grid-cols-[23vw_1fr] items-end pt-[0.5vh] overflow-hidden gap-[0vw]">
              <div className="text-[4.8vw] jp jp-title jp-bold glow leading-none whitespace-nowrap">
                活動限界まで
              </div>

              <div className="text-[1.9vw] glow whitespace-nowrap -left-10">
                ACTIVE TIME REMAINING:
              </div>
            </div>

            <ClockDisplay time={t} />
          </div>

          {/* RIGHT */}
          <EnergyPanel ampm={t.ampm} />
        </div>

        {/* BOTTOM */}
        <ModeSelector
          onTriggerDanger={triggerDanger}
          dangerFlash={dangerFlash}
        />
      </div>
    </div>
  )
}
