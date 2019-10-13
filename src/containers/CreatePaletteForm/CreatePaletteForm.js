import React, { Component } from 'react';
import { createPalette, getAllProjects, getAllPalettes } from '../../util/apiCalls';
import { addAllProjects, addAllPalettes } from '../../actions/index';
import { connect } from 'react-redux';
import './CreatePaletteForm.css';

export class CreatePaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      paletteName: ''
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
  
  clearInput = () => {
    this.setState({paletteName: ''});
  }

  render() {
    return (
      <form>
        <input
          type = 'text'
          value = {this.state.paletteName}
          onChange = {this.handleChange}
          placeholder = 'Enter a palette name!'
          name = 'paletteName'
        >
        </input>
        {this.props.project && this.state.paletteName &&
        <button
          onClick={(e) => this.savePalette(e)}
        >
        Save palette to current project.
        </button>
        }
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addAllProjects: allProjects => dispatch(addAllProjects(allProjects)),
  addAllPalettes: allPalettes => dispatch(addAllPalettes(allPalettes))
});

export const mapStateToProps = state => ({
  colors: state.colors,
  project: state.project
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePaletteForm);