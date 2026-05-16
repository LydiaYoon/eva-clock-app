import useClock from '../hooks/useClock'
import ClockDisplay from './ClockDisplay'
import EnergyPanel from './EnergyPanel'
import ModeSelector from './ModeSelector'

export default function ClockUI() {
  const { time, flash } = useClock()

  return (
    <div className="main-ui crt w-screen h-screen overflow-hidden grid grid-rows-[1fr_auto]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,170,0,0.03),transparent_60%)]" />

      <div className="relative w-full h-full overflow-hidden grid grid-rows-[1fr_auto]">
        
        {/* TOP AREA */}
        <div className="grid grid-cols-[1fr_20vw] overflow-hidden px-[4vw] py-[2vh] border border-[#d68c00]">
          
          {/* LEFT */}
          <div className="grid grid-rows-[auto_1fr] overflow-hidden">
            <div className="flex items-end pt-[0.5vh] overflow-hidden gap-[0vw]">
              <div className="text-[4.6vw] jp glow leading-none whitespace-nowrap">
                活動限界まで
              </div>

              <div className="text-[1.9vw] glow whitespace-nowrap">
                ACTIVE TIME REMAINING:
              </div>
            </div>

            <ClockDisplay time={time} flash={flash} />
          </div>

          {/* RIGHT */}
          <EnergyPanel />
        </div>

        {/* BOTTOM */}
        <ModeSelector />
      </div>
    </div>
  )
}
