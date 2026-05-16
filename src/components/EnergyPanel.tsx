interface HatchPanelProps {
  label: string
  labelEn: string
}

function HatchPanel({ label, labelEn }: HatchPanelProps) {
  return (
    <div className="w-full border border-[#d68c00] flex overflow-hidden min-w-0">
      <div className="flex-1 p-[0.35vw] bg-black overflow-hidden min-w-0 items-center">
        <div className="text-[8.2vw] jp glow leading-none whitespace-nowrap tracking-[-0.12em]">
          {label}
        </div>
        <div className="text-[3vw] leading-none mt-[0.05vh] glow whitespace-nowrap tracking-[-0.04em]">
          {labelEn}
        </div>
      </div>
      <div className="w-[28%] bg-[repeating-linear-gradient(135deg,#c12600_0px,#c12600_14px,#140000_14px,#140000_28px)]" />
    </div>
  )
}

export default function EnergyPanel() {
  return (
    <div className="flex flex-col gap-[1.2vh] overflow-hidden min-w-0 pt-[0.2vh] w-full h-full">
      <HatchPanel label="内部" labelEn="INTERNAL" />

      <div className="w-full border border-[#d68c00] px-[0.5vw] py-[0.35vh] overflow-hidden min-w-0">
        <div className="text-[2.7vw] jp glow leading-none whitespace-nowrap tracking-[-0.055em]">
          主電源供給システム
        </div>
        <div className="text-[1.3vw] mt-[0.06vh] opacity-90 glow leading-none whitespace-nowrap tracking-[-0.02em]">
          MAIN ENERGY SUPPLY SYSTEM
        </div>
      </div>

      <HatchPanel label="外部" labelEn="EXTERNAL" />
    </div>
  )
}
