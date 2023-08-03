import Name from '../name/Name';
import './Main.scss';
import About from '../about/About';
import Projects from '../projects/Projects';

const Main = ({isDark}) => {
  return (
    <main className={`main ${isDark? 'dark-mode' : ''}`}>
      <Name />
      <About />
      <Projects isDark={isDark}/>
    </main>
  )
}

export default Main;