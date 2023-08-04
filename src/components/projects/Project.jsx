const Project = ({src, title, link}) => {
  return (
    <a href={link} target='blank' className="project">
      <div className="projectImageDiv"><img src={src} alt={src} className='projectImage'/></div>
      <div className="projectTitle">{title}</div>
      <div className="projectText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui non nobis quo, rerum molestias libero at atque voluptatem sit, harum hic, ab ut laudantium corrupti fuga dolor. Corporis, cum assumenda.</div>
    </a>
  )
}

export default Project;