import LandscapeWarning from './components/LandscapeWarning'
import ClockUI from './components/ClockUI'

export default function App() {
  return (
    <div className="w-screen h-dvh bg-black overflow-hidden flex items-center justify-center text-[#e79a00] select-none">
      <LandscapeWarning />
      <ClockUI />
    </div>
  )
}
