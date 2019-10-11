import React, { Component } from 'react';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
import ColorContainer from '../ColorContainer/ColorContainer';
import AddNewProjectForm from '../AddNewProjectForm/AddNewProjectForm'
import { connect } from 'react-redux';
import { getAllProjects } from '../../util/apiCalls';
import { addAllProjects, saveColor } from '../../actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: []
    }
  }

  componentDidMount = async () => {
    const allProjects = await getAllProjects()
    this.props.addAllProjects(allProjects)
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

  render() {
    const { allProjects } = this.props;
    return (
      <main>
      {!allProjects && <CreateProjectForm />}
      <ColorContainer generateNewColors={this.generateNewColors} colors={this.props.colors}/>
      <AddNewProjectForm />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  allProjects: state.allProjects,
  colors: state.colors
});

const mapDispatchToProps = dispatch => ({
  addAllProjects: allProjects => dispatch(addAllProjects(allProjects)),
  saveColor: color => dispatch(saveColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
