import './Projects.scss';
import Project from './Project';
import battleship from '../../assets/battleship.jpg';
import youtube from '../../assets/youtube.jpg';
import cart from '../../assets/computer-shop.jpg';
import memory from '../../assets/memory-card.jpg';
import waldo from '../../assets/wheres-waldo.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Projects = () => {

  return (
    <section className="projects">
      <div className="projectsTitle">Projects</div>
        <div className="projectsGrid">
          <Project title={'Youtube-copy'} src={youtube}/>
          <Project title={'Shopping Cart'} src={cart}/>
          <Project title={'Memory Card'} src={memory}/>
          <Project title={'Battleship'} src={battleship}/>
          <Project title={"Where's Waldo"} src={waldo}/>
        </div>
    </section>
  )
}

export default Projects;