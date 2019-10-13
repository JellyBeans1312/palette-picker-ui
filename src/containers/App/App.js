import React, { Component } from 'react';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
import ColorContainer from '../ColorContainer/ColorContainer';
import AddNewProjectForm from '../AddNewProjectForm/AddNewProjectForm';
import CreatePaletteForm from '../CreatePaletteForm/CreatePaletteForm';
import { connect } from 'react-redux';
import { getAllProjects, getAllPalettes } from '../../util/apiCalls';
import { addAllProjects, saveColor, addAllPalettes } from '../../actions';
import './App.css';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: []
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

  savePalette = (colors) => {

  }

  render() {
    const { allProjects } = this.props;
    return (
      <main>
      {!allProjects && <CreateProjectForm />}
      {this.props.project && <p>Selected project: {this.props.project.project_name}</p>}
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
  colors: state.colors
});

const mapDispatchToProps = dispatch => ({
  addAllProjects: allProjects => dispatch(addAllProjects(allProjects)),
  saveColor: color => dispatch(saveColor(color)),
  addAllPalettes: allPalettes => dispatch(addAllPalettes(allPalettes))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
