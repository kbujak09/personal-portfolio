import webDevIcon from '../../assets/webDevIcon.svg';
import lightMode from '../../assets/light_mode.svg';
import darkMode from '../../assets/dark_mode.svg';
import './Header.scss';

const Header = ({isDark, setIsDark}) => {
  return (
    <header className={`header ${isDark? 'dark-mode' : ''}`}>
      <div className="logo">
        <img src={webDevIcon} alt="logo" className={`logoIcon ${isDark? 'dark-mode-icon' : ''}`} />
      </div>
      <button onClick={() => {
        isDark ? setIsDark(false) : setIsDark(true)
      }} className='darkMode'>
        {
         isDark ? 
         <img src={darkMode} alt="darkModeIcon" className={`darkModeIcon ${isDark? 'dark-mode-icon' : ''}`}/> :
         <img src={lightMode} alt="darkModeIcon" className='darkModeIcon'/>
        }
      </button>
    </header>
  )
}

export default Header;