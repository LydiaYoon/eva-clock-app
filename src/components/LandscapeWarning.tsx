export default function LandscapeWarning() {
  return (
    <div className="landscape-warning absolute inset-0 items-center justify-center text-center p-8">
      <div>
        <div className="text-3xl glow font-black tracking-widest mb-4">
          EVA CLOCK
        </div>
        <div className="text-lg text-orange-300 opacity-80">
          !! LANDSCAPE MODE REQUIRED !!
        </div>
      </div>
    </div>
  )
}
