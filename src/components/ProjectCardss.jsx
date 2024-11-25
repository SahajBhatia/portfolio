import React from 'react'
const ProjectCardss = ({data}) => {
  console.log(data);
  
  return (
    <div className='cards'>
      <div>
          <h2>{data.title}</h2>
          <img src={data.img} alt={data.title} />
          <p>{data.description}</p>
          <a href={data.link}>View Project</a>
      </div>
    </div>
  )
}

export default ProjectCardss
