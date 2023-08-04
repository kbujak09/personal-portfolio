import './Projects.scss';
import Project from './Project';
import battleship from '../../assets/battleship.jpg';
import youtube from '../../assets/youtube.jpg';
import cart from '../../assets/computer-shop.jpg';
import memory from '../../assets/memory-card.jpg';
import waldo from '../../assets/wheres-waldo.jpg';



const Projects = () => {

  return (
    <section className="projects">
      <div className="projectsTitle">Projects</div>
        <div className="projectsGrid">
          <Project title={'Youtube-copy'} link={'https://kbujak09.github.io/youtube-copy/'} src={youtube}/>
          <Project title={'Shopping Cart'} link={'https://kbujak09.github.io/shopping-cart/'} src={cart}/>
          <Project title={'Memory Card'} link={'https://kbujak09.github.io/memory-card/'} src={memory}/>
          <Project title={'Battleship'} link={'https://kbujak09.github.io/battleship/'} src={battleship}/>
          <Project title={"Where's Waldo"} link={'https://kbujak09.github.io/wheres-waldo/'} src={waldo}/>
        </div>
    </section>
  )
}

export default Projects;