import { useEffect, useState } from 'react'

interface ClockState {
  time: string
  flash: boolean
}

export default function useClock(): ClockState {
  const [time, setTime] = useState<string>('00:00:00')
  const [flash, setFlash] = useState<boolean>(false)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const h = String(now.getHours()).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      const s = String(now.getSeconds()).padStart(2, '0')

      setFlash(true)
      setTime(`${h}:${m}:${s}`)
      setTimeout(() => setFlash(false), 85)
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return { time, flash }
}