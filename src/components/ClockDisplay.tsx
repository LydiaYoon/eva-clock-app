import { ClockState } from '../hooks/useDigitalClock'
import DigitalClock from './DigitClock'

interface ClockDisplayProps {
  time: ClockState
}

export default function ClockDisplay(t: ClockDisplayProps) {

  return (
    <div className="grid grid-cols-[5.2vw_1fr] items-center overflow-hidden">

      <div className="flex items-start h-full pt-[1vh]">
        <div className="text-[2.5vw] jp glow leading-none">
          あと
        </div>
      </div>

      <div className="flex items-end overflow-visible">

        <div className="flex items-end leading-none overflow-visible">
          <DigitalClock />
        </div>
      </div>
    </div>
  )
}
