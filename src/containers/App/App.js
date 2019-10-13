import React, { Component } from 'react';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
import ColorContainer from '../ColorContainer/ColorContainer';
import AddNewProjectForm from '../AddNewProjectForm/AddNewProjectForm';
import CreatePaletteForm from '../CreatePaletteForm/CreatePaletteForm';
import { connect } from 'react-redux';
import { getAllProjects, getAllPalettes, patchProject } from '../../util/apiCalls';
import { addAllProjects, saveColor, addAllPalettes, addProject, updateProjectName } from '../../actions';
import editIcon from '../../assets/editIcon.svg'
import './App.css';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      editedProjectName: ''
    }
  }

  componentDidMount = async () => {
    const allProjects = await getAllProjects()
    const allPalettes = await getAllPalettes()
    this.props.addAllProjects(allProjects)
    this.props.addAllPalettes(allPalettes)
    this.hexCodeGenerator(this.props.colors)
  }

  hexCodeGenerator = (colors) => {
    if (colors.length > 4) {
      return colors;
    }
    let randomColor = { color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16), isLocked: false };
    if (randomColor.color.length < 7) {
      randomColor = { color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16), isLocked: false }
    }
    if(this.props.colors.length < 5) {
      this.props.saveColor(randomColor)
    } 

    return this.hexCodeGenerator(this.props.colors);
  }

  generateNewColors = () => {
    let updatedColors = this.props.colors.map(color => {
      if(color.isLocked) {
        return color
      } else {
        return { color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16), isLocked: false }
      }
    });
    this.props.saveColor(updatedColors)
  }

  // savePalette = (colors) => {

  // }

  updateProjectName = async () => {
    const { name } = this.state.editedProjectName
    const { id } = this.props.project.id
    patchProject(name,id)
  }

  handleChange = e => {
    this.setState({editedProjectName: e.target.value})
    console.log(this.state.editedProjectName)
  }
  render() {
    const { allProjects, project } = this.props;
    console.log('project', project)
    return (
      <main>
      {!allProjects && <CreateProjectForm />}
      {project &&  
        <div>
            <p>{project.project_name}</p> 
            <img src={editIcon} style={{ height: 30, width: 30}} onClick={() => this.props.updateProjectName(true)} />
          { this.props.editingProjectName &&
          <div>
            <input type='text' placeholder={project.project_name} value={this.state.editedProjectName} onChange={this.handleChange}/>
            <button onClick={() => {this.props.addProject(this.state.editedProjectName, project.id); this.updateProjectName()}}>Update Project Name</button> 
          </div>
          }
        </div>
        }
      <ColorContainer generateNewColors={this.generateNewColors} colors={this.props.colors} />
      <CreatePaletteForm />
      <AddNewProjectForm />
      <ProjectContainer/>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  project: state.project,
  allProjects: state.allProjects,
  colors: state.colors,
  editingProjectName: state.editingProjectName
});

const mapDispatchToProps = dispatch => ({
  addAllProjects: allProjects => dispatch(addAllProjects(allProjects)),
  saveColor: color => dispatch(saveColor(color)),
  addAllPalettes: allPalettes => dispatch(addAllPalettes(allPalettes)),
  addProject: (project, id) => dispatch(addProject(project, id)),
  updateProjectName: status => dispatch(updateProjectName(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
