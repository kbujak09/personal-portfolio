import Name from '../name/Name';
import './Main.scss';
import About from '../about/About';
import Projects from '../projects/Projects';

const Main = () => {
  return (
    <main className='main'>
      <Name />
      <About />
      <Projects />
    </main>
  )
}

export default Main;