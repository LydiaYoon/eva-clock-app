import { useEffect, useState } from 'react'

export interface ClockState {
  h1: string
  h2: string
  m1: string
  m2: string
  s1: string
  s2: string
  ampm: 'AM' | 'PM'
}

export function useDigitalClock(): ClockState {
  const [time, setTime] = useState<ClockState>({
    h1: '0',
    h2: '0',
    m1: '0',
    m2: '0',
    s1: '0',
    s2: '0',
    ampm: 'AM',
  })

  useEffect(() => {
    const tick = () => {
      const now = new Date()

      const ampm: 'AM' | 'PM' =
  now.getHours() >= 12 ? 'PM' : 'AM'

      let hours = now.getHours() % 12
      if (hours === 0) hours = 12

      const hh = String(hours).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      const ss = String(now.getSeconds()).padStart(2, '0')

      setTime({
        h1: hh[0],
        h2: hh[1],
        m1: mm[0],
        m2: mm[1],
        s1: ss[0],
        s2: ss[1],
        ampm,
      })
    }

    tick()

    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return time;
}