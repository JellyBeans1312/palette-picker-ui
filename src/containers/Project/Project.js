import React from 'react';
import './Project.css';
import { addPalette, removePalette, removeProject, addProject } from '../../actions';
import { connect } from 'react-redux';
import trashcan from '../../assets/trashcan.svg';
import editIcon from '../../assets/editIcon.svg'
import { deletePalette, deleteProject } from '../../util/apiCalls'

const Project = ({props, palettes, addPalette, removePalette, removeProject, addProject}) => {
  const displayPalettes = palettes.map(palette => {
    const { updated_at, created_at, palette_name, project_id, ...newPalette } = palette
    let keys = Object.keys(newPalette);
    return  (
      <div className='small-palettes'>
        <ul className='small-palettes-ul'>
          <li className='small-palettes'>{palette.palette_name}
            { keys.map(key => {
              return <div style={{ backgroundColor: newPalette[key], height: 20, width: 20 }}></div>
            })}
          </li>
        </ul>
        <img src={trashcan} style={{ height: 30, width: 30}} onClick={() => {deletePalette(palette.id); removePalette(palette.id)}}></img>
        <img src={editIcon}  style={{ height: 30, width: 30}} onClick={() => addPalette(newPalette)}/>

      </div>
    )
  })

  const { project_name, id } = props    

  return (
    <div>
      <div className='project-header'>
        <div>
          {project_name}
          <button onClick={() => addProject(project_name, id)}>Select this project</button>
        </div>
      <img src={trashcan} style={{ height: 30, width: 30}} onClick={() => {deleteProject(id); removeProject(id)}}></img>
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