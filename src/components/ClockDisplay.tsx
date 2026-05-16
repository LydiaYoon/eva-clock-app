import type { CSSProperties } from 'react'

interface ClockDisplayProps {
  time: string
  flash: boolean
}

const DIGIT_STYLE_LG: CSSProperties = {
  fontSize: '13.8vw',
  fontFamily: 'DigitalNumbers, monospace',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  letterSpacing: '-0.2em',
  lineHeight: 1,
  textAlign: 'right',
}

const DIGIT_STYLE_SM: CSSProperties = {
  fontSize: '7vw',
  fontFamily: 'DigitalNumbers, monospace',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  letterSpacing: '-0.04em',
  lineHeight: 1,
  paddingBottom: '0.35vw',
  textAlign: 'right',
}

export default function ClockDisplay({ time, flash }: ClockDisplayProps) {
  const cls = `digit glow ${flash ? 'flash' : ''}`

  return (
    <div className="grid grid-cols-[5vw_1fr] items-center overflow-hidden">

      <div className="flex justify-center items-start h-full pt-[1vh]">
        <div className="text-[2.5vw] jp glow leading-none">
          あと
        </div>
      </div>

      <div className="flex items-end justify-end overflow-hidden pr-[1vw]">

        <div className="flex items-end justify-end leading-none overflow-hidden">
          <div className={cls} style={DIGIT_STYLE_LG}>
            {time.slice(0, 5)}
          </div>
          <div className={cls} style={DIGIT_STYLE_SM}>
            {time.slice(5)}
          </div>
        </div>
      </div>
    </div>
  )
}
