import React, { Component } from 'react';
import './AddNewProjectForm.css'
import { createProject, getAllProjects } from '../../util/apiCalls';
import { addProject, addAllProjects } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class AddNewProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      error: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async e => {
    e.preventDefault();
    const newProject = {
      project_name: this.state.projectName
    }
    try {
      const project = await createProject(newProject);
      this.props.addProject(this.state.projectName, project.id);
    } catch (error) {
      this.setState({ error: error.message })
    }
    const allProjects =  await getAllProjects();
    this.props.addAllProjects(allProjects);
    this.setState({projectName: ''});
  }

  render() {
    return (
      <form className='new-project-form'> 
        <div className='align-form-items'>
          <input 
            type='text'
            name='projectName'
            placeholder='Enter a new project name!'
            onChange={this.handleChange}
            value={this.state.projectName}
            className='project-name'
            />
          <button 
          onClick={this.handleSubmit}
          className='create-project-button'
          >Create Project
          </button>
          {this.state.error && <p>{this.state.error}</p>}
        </div>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addProject: (project_name, id) => dispatch(addProject(project_name, id)),
  addAllProjects: allProjects => dispatch(addAllProjects(allProjects))
})

export default connect(null, mapDispatchToProps)(AddNewProjectForm);

AddNewProjectForm.propTypes = {
  addProject: PropTypes.func,
  addAllProjects: PropTypes.func
}