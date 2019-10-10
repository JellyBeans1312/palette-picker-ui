import React, { Component } from 'react';
import { createProject } from '../../util/apiCalls';
import { addProject } from '../../actions/index';
import { connect } from 'react-redux';
import './CreateProjectForm.css';

export class CreateProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      projectName: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  createProject = async (e) => {
    e.preventDefault();
    let newProject = {
      project_name: this.state.projectName
    }
    const createdProjectId = await createProject(newProject);
    this.props.addProject(createdProjectId)
    // this.clearInput()
  }

  // clearInput = () => {
  //   this.setState({projectName: ''})
  // }

  render() {
    return (
      <form>
        <input 
        type='text'
        value={this.state.projectName}
        onChange={this.handleChange}
        name='projectName'
        placeholder='Enter a project name!'
        />
        <button
          className='createProjectFormBtn'
          onClick={(e) => this.createProject(e)}
        >
          Create Project!
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addProject: createdProjectId => dispatch(addProject(createdProjectId))
});

export default connect(null, mapDispatchToProps)(CreateProjectForm);