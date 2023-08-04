import Name from '../name/Name';
import './Main.scss';
import About from '../about/About';
import Projects from '../projects/Projects';
import Techs from '../techs/Techs';

const Main = ({isDark}) => {
  return (
    <main className={`main ${isDark? 'dark-mode' : ''}`}>
      <Name />
      <About />
      <Techs />
      <Projects isDark={isDark}/>
    </main>
  )
}

export default Main;