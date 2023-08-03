import webDevIcon from '../../assets/webDevIcon.svg';
import lightMode from '../../assets/light_mode.svg';
import darkMode from '../../assets/dark_mode.svg';
import './Header.scss';

const Header = ({isDark, setIsDark}) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={webDevIcon} alt="logo" className="logoIcon" />
      </div>
      <button className='darkMode'>
        {
         isDark ? 
         <img src={darkMode} alt="darkModeIcon" className='darkModeIcon'/> :
         <img src={lightMode} alt="darkModeIcon" className='darkModeIcon'/>
        }
      </button>
    </header>
  )
}

export default Header;