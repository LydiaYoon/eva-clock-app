import type { CSSProperties } from 'react'

interface ClockDisplayProps {
  time: string
  flash: boolean
}

const DIGIT_STYLE: CSSProperties = {
  fontFamily: 'DigitalNumbers, monospace',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  letterSpacing: '-0.1em',
}

const COLON_STYLE: CSSProperties = {
  fontFamily: 'DigitalColon, monospace',
}

const LARGE_STYLE: CSSProperties = {
  fontSize: '16vw',
  lineHeight: 1,
}

const SMALL_STYLE: CSSProperties = {
  fontSize: '10vw',
  lineHeight: 1,
  paddingBottom: '0.35vw',
}

export default function ClockDisplay({ time, flash }: ClockDisplayProps) {
  const cls = `digit glow ${flash ? 'flash' : ''}`

  return (
    <div className="grid grid-cols-[7vw_1fr] items-center overflow-hidden">

      <div className="flex items-start h-full pt-[1vh]">
        <div className="text-[2.5vw] jp glow leading-none">
          あと
        </div>
      </div>

      <div className="flex items-end justify-center overflow-hidden">

        <div className="flex items-end justify-center leading-none overflow-hidden">
          <div className={cls} style={{...DIGIT_STYLE, ...LARGE_STYLE}}>
            {time.slice(0, 2)}
          </div>

          <span style={{...COLON_STYLE, ...LARGE_STYLE}}>
            :
          </span>

          <div className={cls} style={{...DIGIT_STYLE, ...LARGE_STYLE}}>
            {time.slice(3, 5)}
          </div>

          <span style={{...COLON_STYLE, ...SMALL_STYLE}}>
            :
          </span>

          <div className={cls} style={{...DIGIT_STYLE, ...SMALL_STYLE}}>
            {time.slice(6)}
          </div>
        </div>
      </div>
    </div>
  )
}
