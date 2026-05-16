import { useEffect, useState } from 'react'

export function useDigitalClock() {
  const [time, setTime] = useState({
    h1: '0',
    h2: '0',
    m1: '0',
    m2: '0',
    s1: '0',
    s2: '0',
  })

  useEffect(() => {
    const tick = () => {
      const now = new Date()

      const hh = String(now.getHours()).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      const ss = String(now.getSeconds()).padStart(2, '0')

      setTime({
        h1: hh[0],
        h2: hh[1],
        m1: mm[0],
        m2: mm[1],
        s1: ss[0],
        s2: ss[1],
      })
    }

    tick()
    const id = setInterval(tick, 1000)

    return () => clearInterval(id)
  }, [])

  return time
}