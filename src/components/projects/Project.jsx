const Project = ({src, title}) => {
  return (
    <div className="project">
      <div className="projectImageDiv"><img src={src} alt={src} className='projectImage'/></div>
      <div className="projectTitle">{title}</div>
    </div>
  )
}

export default Project;