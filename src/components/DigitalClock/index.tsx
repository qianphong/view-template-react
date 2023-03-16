import React from 'react'
import dayjs from 'dayjs'

import './index.scss'

const DigitalClock = () => {
  const [time, setTime] = React.useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return <span className="font-dseg7">{time}</span>
}

export default DigitalClock
