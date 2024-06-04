const Project = ({src, title, link, description, main}) => {
  return (
    <a href={link} target='blank' className={`project ${main ? 'mainProject' : null}`}>
      <div className="projectImageDiv"><img src={src} alt={src} className='projectImage'/></div>
      <div className="projectTitle">{title}</div>
      <div className="projectText">{description}</div>
    </a>
  )
}

export default Project;