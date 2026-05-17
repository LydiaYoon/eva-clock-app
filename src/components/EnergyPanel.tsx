interface HatchPanelProps {
  label: string
  labelEn: string
  active: boolean
}

interface EnergyPanelProps {
  ampm: 'AM' | 'PM'
}

function HatchPanel({ label, labelEn, active }: HatchPanelProps) {
  return (
    <div className={`w-full border border-[#d68c00] flex overflow-visible min-w-0 glow-pannel 
    ${active
      ? `
        opacity-100
        brightness-125
        shadow-[0_0_12px_rgba(231,154,0,0.18)]
      `
      : `
        opacity-25
        brightness-75
      `
    }`}>
      <div className="flex-1 p-[0.35vw] overflow-visible min-w-0 flex flex-col items-center justify-center">
        <div className="text-[7.6vw] pb-[1vh] jp jp-bold glow leading-none whitespace-nowrap" style={{ transformOrigin: 'center' }}>
          {label}
        </div>
        <div className="text-[3vw] leading-none mt-[0.05vh] glow whitespace-nowrap">
          {labelEn}
        </div>
      </div>
      <div className={`
    w-[28%]
    bg-[repeating-linear-gradient(135deg,#c12600_0px,#c12600_15px,transparent_15px,transparent_30px)]
    transition-all
    duration-500
    shadow-[0_0_12px_rgba(193,38,0,0.18)]
    ${
      active
        ? 'brightness-125'
        : 'brightness-50'
    }
  `} />
    </div>
  )
}

export default function EnergyPanel({
  ampm,
}: EnergyPanelProps) {
  return (
    <div className="flex flex-col gap-[2vh] overflow-visible min-w-0 w-full h-full justify-center">
      <HatchPanel label="内部" labelEn="INTERNAL" active={ampm === 'AM'}/>

      <div className="w-full border border-[#d68c00] px-[0.5vw] py-[0.35vh] overflow-visible min-w-0 glow-pannel flex flex-col items-center justify-center">
        <div className="text-[2.4vw] jp glow leading-none whitespace-nowrap tracking-[-0.055em]" style={{ transformOrigin: 'center' }}>
          主電源供給システム
        </div>
        <div className="text-[1.3vw] mt-[0.06vh] opacity-90 glow leading-none whitespace-nowrap tracking-[-0.02em]">
          MAIN ENERGY SUPPLY SYSTEM
        </div>
      </div>

      <HatchPanel label="外部" labelEn="EXTERNAL" active={ampm === 'PM'}/>
    </div>
  )
}
