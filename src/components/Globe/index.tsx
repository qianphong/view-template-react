import React, { useEffect } from 'react'
import createGlobe from 'cobe'

type GlobeProps = {
  width?: number
  height?: number
}
const Globe = (props: GlobeProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const { width = 800, height = 600 } = props
  useEffect(() => {
    if (canvasRef.current) {
      let phi = 0
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 1,
        width,
        height,
        phi: 0,
        theta: 0,
        dark: 2,
        diffuse: 1.2,
        mapSamples: 10000,
        mapBrightness: 6,
        baseColor: [20 / 255, 31 / 255, 59 / 255],
        markerColor: [230 / 255, 7 / 255, 7 / 255],
        glowColor: [51 / 255, 170 / 255, 255 / 255],
        markers: [{ location: [31.746005, 120.803566], size: 0.15 }],
        onRender: state => {
          state.phi = phi
          phi += 0.01
        },
      })
      return () => {
        globe.destroy()
      }
    }
  }, [])
  return (
    <canvas
      className="absolute top-10 left-0 right-0 mx-auto"
      ref={canvasRef}
      style={{ width, height }}
    />
  )
}

export default Globe
