import React from 'react';
import './Project.css';
import { addPalette, removePalette } from '../../actions';
import { connect } from 'react-redux';
import trashcan from '../../assets/trashcan2.svg';
import { deletePalette } from '../../util/apiCalls'

const Project = ({props, palettes, addPalette, removePalette}) => {
  const displayPalettes = palettes.map(palette => {
    const { updated_at, created_at, palette_name, project_id, id, ...newPalette } = palette
    let keys = Object.keys(newPalette);
    return  (
      <div>
        <ul onClick={() => addPalette(newPalette)}>
          <li>{palette.palette_name}
            { keys.map(key => {
              return <div style={{ backgroundColor: newPalette[key], height: 20, width: 20 }}></div>
            })}
          </li>
        </ul>
        <img src={trashcan} style={{ height: 30, width: 30}} onClick={() => {deletePalette(palette.id); removePalette(palette.id)}}></img>
      </div>
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
  addPalette: palette => dispatch(addPalette(palette)),
  removePalette: id => dispatch(removePalette(id))
})

export default connect(null, mapDispatchToProps)(Project);