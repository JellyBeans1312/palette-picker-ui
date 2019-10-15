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
    const { id, ...displayPalette } = newPalette
    let keys = Object.keys(displayPalette);
    return  (
      <div className='small-palettes-container'>
        <ul className='small-palettes-ul'>
          <li className='small-palettes'>
            <div>{palette.palette_name}</div>
            { keys.map(key => {          
              return <div className='palette-colors' style={{ backgroundColor: newPalette[key]}}></div>
            })}
          </li>
        </ul>
        <img src={trashcan} alt='trashcan' className='palette-buttons' onClick={() => {deletePalette(palette.id); removePalette(palette.id)}}></img>
        <img src={editIcon} alt='edit' className='palette-buttons' onClick={() => addPalette(newPalette)}/>

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
      <img src={trashcan} className='project-button' style={{ height: 30, width: 30}} onClick={() => {deleteProject(id); removeProject(id)}}></img>
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