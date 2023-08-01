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
      <Project title={'Youtube-copy'} src={youtube}/>
      <Project title={'Shopping Cart'} src={cart}/>
      <Project title={'Memory Card'} src={memory}/>
      <Project title={'Battleship'} src={battleship}/>
      <Project title={"Where's Waldo"} src={waldo}/>
    </section>
  )
}

export default Projects;