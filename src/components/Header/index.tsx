import DigitalClock from '@/components/DigitalClock'

import './header.scss'

const Header = () => {
  return (
    <header className="view-header">
      <div className="view-header-left">
        <DigitalClock />
      </div>
      <div className="view-header-middle">
        {/* <Decorator />
        {{ title }}
        <Decorator /> */}
      </div>
      <div className="view-header-right">因网络等因素，数据可能延迟！</div>
    </header>
  )
}
export default Header
