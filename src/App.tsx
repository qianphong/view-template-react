import React from 'react'
import { useScale } from '@/hooks/useScale'
import Header from '@/components/Header'
import Fullscreen from '@/components/Fullscreen'
import Globe from '@/components/Globe'

function App() {
  const root = React.useRef<HTMLDivElement>(null)
  useScale(root)
  return (
    <div ref={root} className="view-container">
      <Fullscreen />
      <Header />
      <Globe />
    </div>
  )
}

export default App
