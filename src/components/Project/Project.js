import React from 'react';
import './Project.css';

const Project = ({props}) => {
  const { project_name } = props
  console.log(project_name)
  
  return (
    <div>
      {project_name}
    </div>
  )
}

export default Project;