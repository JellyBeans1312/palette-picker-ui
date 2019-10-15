import React, { Component } from 'react';
import { createPalette, getAllProjects, getAllPalettes, searchSpecificPalette } from '../../util/apiCalls';
import { addAllProjects, addAllPalettes, addPalette, addProject } from '../../actions/index';
import { connect } from 'react-redux';
import './CreatePaletteForm.css';
import PropTypes from 'prop-types';

export class CreatePaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      paletteName: '',
      searchPaletteName: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  savePalette = async (e) => {
    e.preventDefault();
    const { project, colors, addAllProjects, addAllPalettes } = this.props;
    const newPalette = {
      project_id: project.id,
      palette_name: this.state.paletteName,
      color_one: colors[0].color,
      color_two: colors[1].color,
      color_three: colors[2].color,
      color_four: colors[3].color,
      color_five: colors[4].color
    }
    
    createPalette(newPalette);
    const allProjects = await getAllProjects();
    addAllProjects(allProjects);
    const allPalettes = await getAllPalettes();
    addAllPalettes(allPalettes);
    this.clearInput();
  }

  searchPalette = async (e) => {
    e.preventDefault()
    
    const palette = await searchSpecificPalette(this.state.searchPaletteName)
    const { project_id, ...newPalette } = palette
    this.props.addPalette(newPalette);

    const correspondingProject = this.props.allProjects.filter(project => project.id === palette.project_id)
    this.props.addProject(correspondingProject[0].project_name, correspondingProject[0].id)

    this.clearInput()
  }
  
  clearInput = () => {
    this.setState({paletteName: '', searchPaletteName: ''});
  }

  render() {
    return (
      <form className='palette-form'>
        <input className='form-input'
          type = 'text'
          value = {this.state.paletteName}
          onChange = {this.handleChange}
          placeholder = 'Enter a palette name!'
          name = 'paletteName'
        >
        </input>
        {this.props.project && this.state.paletteName &&
        <button className='palette-button'
          onClick={(e) => this.savePalette(e)}
        >
        Save palette to current project.
        </button>
        }
        <input className='form-input'
          type='text'
          value={this.state.searchPaletteName}
          onChange={this.handleChange}
          placeholder='Search a for a palette'
          name='searchPaletteName'
        />
        <button className='palette-button' onClick={this.searchPalette}>Search!</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addAllProjects: allProjects => dispatch(addAllProjects(allProjects)),
  addAllPalettes: allPalettes => dispatch(addAllPalettes(allPalettes)),
  addPalette: palette => dispatch(addPalette(palette)),
  addProject: (projectName, id) => dispatch(addProject(projectName, id))
});

export const mapStateToProps = state => ({
  colors: state.colors,
  project: state.project,
  allProjects: state.allProjects
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePaletteForm);

CreatePaletteForm.propTypes = {
  addAllProjects: PropTypes.func,
  addAllPalettes: PropTypes.func,
  addPalette: PropTypes.func,
  addProject: PropTypes.func,
  colors: PropTypes.array,
  project: PropTypes.string,
  allProjects: PropTypes.array
}