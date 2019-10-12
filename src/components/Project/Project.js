import React from 'react';
import './Project.css';

const Project = ({props, palettes}) => {
  const displayPalettes = palettes.map(palette => {
    return (
      <li>{palette.palette_name}</li>,
      <div style={{ backgroundColor: palette.color_one, height: 20, width: 20 }}></div>,
      <div style={{ backgroundColor: palette.color_two, height: 20, width: 20 }}></div>,
      <div style={{ backgroundColor: palette.color_three, height: 20, width: 20 }}></div>,
      <div style={{ backgroundColor: palette.color_four, height: 20, width: 20 }}></div>,
      <div style={{ backgroundColor: palette.color_five, height: 20, width: 20 }}></div>
    )
  })
  const { project_name } = props
  
  return (
    <div>
      {project_name}
      <ul>{displayPalettes}</ul>
    </div>
  )
}

export default Project;