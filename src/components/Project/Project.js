import React from 'react';
import './Project.css';
import { addPalette } from '../../actions';
import { connect } from 'react-redux';

const Project = ({props, palettes, addPalette}) => {
  const displayPalettes = palettes.map(palette => {
    const { updated_at, created_at, palette_name, project_id, id, ...newPalette } = palette
    let keys = Object.keys(newPalette);
    return  (
      <ul onClick={() => addPalette(newPalette)}>
        <li>{palette.palette_name}
          { keys.map(key => {
            return <div style={{ backgroundColor: newPalette[key], height: 20, width: 20 }}></div>
          })}
        </li>
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