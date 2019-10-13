import React from 'react';
import './Project.css';
import { addPalette, removePalette, removeProject, addProject } from '../../actions';
import { connect } from 'react-redux';
import trashcan from '../../assets/trashcan.svg';
import xImage from '../../assets/xImage.svg'
import { deletePalette, deleteProject } from '../../util/apiCalls'

const Project = ({props, palettes, addPalette, removePalette, removeProject, addProject}) => {
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

  const { project_name, id } = props    

  return (
    <div>
      <div>
        <div onClick={() => addProject(project_name, id)}>{project_name}</div>
      <img src={xImage} style={{ height: 30, width: 30}} onClick={() => {deleteProject(id); removeProject(id)}}></img>
      </div>
      {displayPalettes}
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
  addPalette: palette => dispatch(addPalette(palette)),
  removePalette: id => dispatch(removePalette(id)),
  removeProject: id => dispatch(removeProject(id)),
  addProject: (project_name, id) => dispatch(addProject(project_name, id))
});

export default connect(null, mapDispatchToProps)(Project);