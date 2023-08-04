import './Techs.scss';
import react from '../../assets/react.svg'
import js from '../../assets/js.svg'
import github from '../../assets/github.svg'
import css from '../../assets/css.svg'
import html from '../../assets/html.svg'
import git from '../../assets/git.svg'

const Techs = () => {

  return (
    <div className="techs">
      <div className="tech"><img className='techImage' src={react} alt='react'/></div>
      <div className="tech"><img className='techImage' src={js} alt='js'/></div>
      <div className="tech"><img className='techImage' src={css} alt='css'/></div>
      <div className="tech"><img className='techImage' src={html} alt='html'/></div>
      <div className="tech black"><img className='techImage' src={github} alt='github'/></div>
      <div className="tech black"><img className='techImage' src={git} alt='git'/></div>
    </div>
  )
}

export default Techs;