import React, { Component } from 'react';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
import ColorContainer from '../ColorContainer/ColorContainer';
import { connect } from 'react-redux';
import { getAllProjects } from '../../util/apiCalls'
import { addAllProjects, saveColors } from '../../actions'
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
    this.hexCodeGenerator(this.state.colors)
  }

  hexCodeGenerator = (colors) => {
    if (colors.length > 4) {
      return colors;
    }

    let randomColor = { color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16), isLocked: false};
    if (randomColor.color.length < 7) {
      randomColor = { color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16), isLocked: false}
    }
    if(this.state.colors.length < 5) {
      this.setState({colors: [...this.state.colors, randomColor]});
    } 

    return this.hexCodeGenerator(this.state.colors);
  }

  generateNewColors = () => {
    let updatedColors = this.state.colors.map(color => {
      console.log(color.color)
      if(color.isLocked) {

      } else {
        console.log(color.color)
        return { color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16), isLocked: false }
      }
    });
    console.log('UPDATED COLORS', updatedColors)
    this.setState({ colors: updatedColors })
  }

  render() {
    const { allProjects } = this.props;
    return (
      <main>
      {!allProjects && <CreateProjectForm />}
      <ColorContainer generateNewColors={this.generateNewColors} colors={this.state.colors}/>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  allProjects: state.allProjects
});

const mapDispatchToProps = dispatch => ({
  addAllProjects: allProjects => dispatch(addAllProjects(allProjects)),
  saveColors: colors => dispatch(saveColors(colors))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
