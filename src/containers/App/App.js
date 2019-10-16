import React, { Component } from 'react';
import ColorContainer from '../../components/ColorContainer/ColorContainer';
import AddNewProjectForm from '../AddNewProjectForm/AddNewProjectForm';
import CreatePaletteForm from '../CreatePaletteForm/CreatePaletteForm';
import { connect } from 'react-redux';
import { getAllProjects, getAllPalettes, patchProject, patchPalette } from '../../util/apiCalls';
import { addAllProjects, saveColor, addAllPalettes, addProject, updateProjectName, removeCurrentProject } from '../../actions';
import editIcon from '../../assets/editIcon.svg';
import xImage from '../../assets/xImage.svg';
import './App.css';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      editedProjectName: '',
      error: ''
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


  findSpecificPalette = () => {
    const { allPalettes, colors } = this.props
    const specificPalette = allPalettes.filter(palette => {
      const color = colors.map(color => {
        return color.id
      })
      return palette.id === color[0]
    });
    this.updatePalette(specificPalette)    
  } 

  updatePalette = async (specificPalette) => {
    const { colors } = this.props;
    const palette = {
      id: specificPalette[0].id,
      palette_name: specificPalette[0].palette_name,
      project_id: specificPalette[0].project_id,
      color_one: colors[0].color,
      color_two:colors[1].color,
      color_three:colors[2].color,
      color_four: colors[3].color,
      color_five: colors[4].color
    }
    patchPalette(palette)
    const allProjects = await getAllProjects()
    const allPalettes = await getAllPalettes()
    this.props.addAllProjects(allProjects)
    this.props.addAllPalettes(allPalettes)
  }

  renameProject = async (name, id) => {
    try {
      patchProject(name,id)
      this.props.updateProjectName(false)
    } catch (error) {
      this.setState({ error })
    }

  }

  handleChange = e => {
    this.setState({editedProjectName: e.target.value})
  }

  render() {
    const { project } = this.props;
    return (
      <main className='main'>
      <header className='header'>
        <h1>Welcome to Palette Picker</h1>
      {project &&  
        <div className='update-project-name'>
            <p>{project.project_name}</p> 
            <img src={editIcon} alt='edit' className='edit-button' style={{ height: 30, width: 30}} onClick={() => this.props.updateProjectName(true)} />
            <img src={xImage} alt='delete' className='delete-button'style={{ height: 30, width: 30 }} onClick={() => this.props.removeCurrentProject()} />
          { this.props.editingProjectName &&
          <div>
            <input type='text' placeholder={project.project_name} value={this.state.editedProjectName} onChange={this.handleChange}/>
            <button onClick={() => {this.props.addProject(this.state.editedProjectName, project.id); this.renameProject(this.state.editedProjectName, project.id)}}>Update Project Name</button> 
          </div>
          }
        </div>
        }
      </header>
      <ColorContainer generateNewColors={this.generateNewColors} colors={this.props.colors} updatePalette={this.findSpecificPalette} />
      <ProjectContainer/>
      <div className='form-container'>
        <AddNewProjectForm />
        <CreatePaletteForm />
      </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  project: state.project,
  allProjects: state.allProjects,
  colors: state.colors,
  editingProjectName: state.editingProjectName,
  allPalettes: state.allPalettes
});

const mapDispatchToProps = dispatch => ({
  addAllProjects: allProjects => dispatch(addAllProjects(allProjects)),
  saveColor: color => dispatch(saveColor(color)),
  addAllPalettes: allPalettes => dispatch(addAllPalettes(allPalettes)),
  addProject: (project, id) => dispatch(addProject(project, id)),
  updateProjectName: status => dispatch(updateProjectName(status)),
  removeCurrentProject: () => dispatch(removeCurrentProject())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  project: PropTypes.string,
  allProjects: PropTypes.array,
  colors: PropTypes.array,
  editingProjectName: PropTypes.bool,
  allPalettes: PropTypes.array,
  addAllProjects: PropTypes.func,
  saveColor: PropTypes.func,
  addAllPalettes: PropTypes.func,
  addProject: PropTypes.func,
  updateProjectName: PropTypes.func,
  removeCurrentProject: PropTypes.func
}
