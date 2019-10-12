import React from 'react';
import './Project.css';

const Project = ({props, palettes}) => {
  const displayPalettes = palettes.map(palette => {
    return <li>{palette.palette_name}</li>
  })
  const { project_name } = props
  console.log(props)
  
  return (
    <div>
      {project_name}
      <ul>{displayPalettes}</ul>
    </div>
  )
}

export default Project;