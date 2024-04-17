import './Projects.scss';
import Project from './Project';
import battleship from '../../assets/battleship.jpg';
import youtube from '../../assets/youtube.jpg';
import cart from '../../assets/computer-shop.jpg';
import memory from '../../assets/memory-card.jpg';
import waldo from '../../assets/wheres-waldo.jpg';
import club from '../../assets/private-club.jpg';
import blog from '../../assets/blog.jpg';
import chattin from '../../assets/chattin.jpg';



const Projects = () => {

  return (
    <section className="projects">
      <div className="projectsTitle">Projects</div>
        <div className="projectsGrid">
          <Project title={'Chatting app'} description={'Real-time chatting app made in React and Express with Socket.io'} src={chattin} link={'https://kbujak09.github.io/chatting-app/'}/>
          <Project title={'Youtube-copy'} description={'Copy of the most popular video website in the world, able to play videos from homepage or search engine and recommend similar videos next to currently playing. Created with Youtube Data API v3.'} link={'https://kbujak09.github.io/youtube-copy/'} src={youtube}/>
          <Project title={'Blog'} description={'Express and React full stack blog app with user authentication, where you can like and comment posts.'} link={'https://kbujak09.github.io/blog'} src={blog}/>
          <Project title={"Where's Waldo"} description={'Game where you have to find all given characters on image and after that you can save your score with nickname to leaderboard with data stored in Firebase.'} link={'https://kbujak09.github.io/wheres-waldo/'} src={waldo}/>
          <Project title={'Shopping Cart'} description={'Small page of computer parts store with mechanic of sliding out shopping cart.'} link={'https://kbujak09.github.io/shopping-cart/'} src={cart}/>
          <Project title={'Memory Card'} description={'Simple game where you have to click every time a different character to score.'} link={'https://kbujak09.github.io/memory-card/'} src={memory}/>
          <Project title={'Battleship'} description={'Classic battleship game with randomly placed ships versus computer which makes random moves.'} link={'https://kbujak09.github.io/battleship/'} src={battleship}/>
          <Project title={'Private Club'} description={'Simple Express JS app connected with MongoDB, which contains user authentication needed to see created by users messages.'} link={'https://github.com/kbujak09/private-club'} src={club}/>
        </div>
    </section>
  )
}

export default Projects;
