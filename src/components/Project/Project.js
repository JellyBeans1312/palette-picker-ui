import React from 'react';
import './Project.css';
import { addPalette } from '../../actions';
import { connect } from 'react-redux';

const Project = ({props, palettes, addPalette}) => {
  const displayPalettes = palettes.map(palette => {
    const { updated_at, created_at, palette_name, project_id, id, ...newPalette } = palette
    return (
      <ul onClick={() => addPalette(newPalette)}>
        <li>{palette.palette_name}</li>
        <div style={{ backgroundColor: palette.color_one, height: 20, width: 20 }}></div>
        <div style={{ backgroundColor: palette.color_two, height: 20, width: 20 }}></div>
        <div style={{ backgroundColor: palette.color_five, height: 20, width: 20 }}></div>
        <div style={{ backgroundColor: palette.color_three, height: 20, width: 20 }}></div>
        <div style={{ backgroundColor: palette.color_four, height: 20, width: 20 }}></div>
      </ul>
    )
  })
  const { project_name } = props
  
  return (
    <div>
      {project_name}
      {displayPalettes}
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
  addPalette: palette => dispatch(addPalette(palette))
})

export default connect(null, mapDispatchToProps)(Project);