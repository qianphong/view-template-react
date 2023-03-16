import React from 'react'

export type ScaleConfig = {
  h: number
  w: number
}
export function useScale(
  ele: React.MutableRefObject<HTMLElement | null>,
  config: ScaleConfig = { h: 1080, w: 1920 },
) {
  React.useEffect(() => {
    const { h, w } = config

    const root = ele.current
    if (!root) return
    root.style.position = 'absolute'
    root.style.left = '50%'
    root.style.top = '50%'
    root.style.overflow = 'hidden'

    root.style.width = `${w}px`
    root.style.height = `${h}px`

    const resize = () => {
      const { innerHeight, innerWidth } = window
      const scale = Math.min(innerWidth / w, innerHeight / h)
      root.style.transform = `translate(-50%, -50%) scale(${scale})`
    }
    resize()
    window.addEventListener('resize', resize)
  }, [])
}
