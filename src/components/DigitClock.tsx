import { useDigitalClock } from '../hooks/useDigitalClock';
import '../clock.css';

function Digit({ value }: { value: string }) {
  return (
    <svg className={`digit num-${value} w-[7.8vw] h-auto`} viewBox="0 0 260 480">
      <use href="#unit-h" className="segment a" x="30" y="0" />
      <use href="#unit-v" className="segment b" x="220" y="30" />
      <use href="#unit-v" className="segment c" x="220" y="250" />
      <use href="#unit-h" className="segment d" x="30" y="440" />
      <use href="#unit-v" className="segment e" x="0" y="250" />
      <use href="#unit-v" className="segment f" x="0" y="30" />
      <use href="#unit-h" className="segment g" x="30" y="220" />
    </svg>
  )
}

export default function DigitalClock() {
  const t = useDigitalClock();

  return (
    <div className="digital-watch glow-bold">
      {/* SVG defs (한 번만) */}
      <svg width="0" height="0">
        <defs>
          <g id="unit-h">
            <path d="M0 20 L20 40 L180 40 L200 20 L180 0 L20 0 Z" />
          </g>
          <g id="unit-v">
            <path d="M20 0 L0 20 L0 180 L20 200 L40 180 L40 20 Z" />
          </g>
        </defs>
      </svg>

      <div className="hour">
        <Digit value={t.h1} />
        <Digit value={t.h2} />
      </div>

      <div className="minute">
        <Digit value={t.m1} />
        <Digit value={t.m2} />
      </div>

      <div className="second">
        <Digit value={t.s1} />
        <Digit value={t.s2} />
      </div>
    </div>
  )
}