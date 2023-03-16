import React from 'react'
import classNames from 'classnames'
import { useFullscreen } from 'ahooks'

import './index.scss'

type FullscreenProps = {
  target?: HTMLElement | React.MutableRefObject<HTMLElement>
}

const Fullscreen = (props: FullscreenProps) => {
  const { target = document.body } = props
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(target)
  const iconClass = classNames('fullscreen-icon', {
    'i-ant-design-fullscreen-exit-outlined': isFullscreen,
    'i-ant-design-fullscreen-outlined': !isFullscreen,
  })
  return (
    <button className="fullscreen-toggle" onClick={toggleFullscreen}>
      <span className={iconClass} />
      {isFullscreen ? '退出全屏' : '全屏显示'}
    </button>
  )
}

export default Fullscreen
