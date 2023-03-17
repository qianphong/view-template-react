import DigitalClock from '@/components/DigitalClock'
import { Decorator1 } from '@/components/Decorator'

import './header.scss'

const title = import.meta.env.VITE_APP_TITLE || 'View Template'

const Header = () => {
  return (
    <header className="view-header">
      <div className="view-header-left">
        <DigitalClock />
      </div>
      <div className="view-header-middle">
        <Decorator1 />
        {title}
        <Decorator1 />
      </div>
      <div className="view-header-right">因网络等因素，数据可能延迟！</div>
    </header>
  )
}
export default Header
