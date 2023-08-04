const Project = ({src, title, link, description}) => {
  return (
    <a href={link} target='blank' className="project">
      <div className="projectImageDiv"><img src={src} alt={src} className='projectImage'/></div>
      <div className="projectTitle">{title}</div>
      <div className="projectText">{description}</div>
    </a>
  )
}

export default Project;