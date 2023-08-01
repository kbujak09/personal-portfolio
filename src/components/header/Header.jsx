import webDevIcon from '../../assets/webDevIcon.svg';
import menuIcon from '../../assets/menuIcon.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={webDevIcon} alt="logo" className="logoIcon" />
      </div>
      <button className='menu'>
        <img src={menuIcon} alt="menu" className='menuIcon'/>
      </button>
    </header>
  )
}

export default Header;