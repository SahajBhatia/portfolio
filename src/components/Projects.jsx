import React from 'react'
import Project from './Cards'
const Projects = () => {
  return (
    <div className='projects'>
      <div className='projects-sec1'>
      <h1>My Recent Projects</h1>
      <p>Here are some of the projects that I have worked on recently</p>
      </div>
      <div className='project-cards'>
       <Project />
      </div>
    </div>
  )
}

export default Projects
