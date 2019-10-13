import React, { Component } from 'react';
import './AddNewProjectForm.css'
import { createProject, getAllProjects } from '../../util/apiCalls';
import { addProject, addAllProjects } from '../../actions';
import { connect } from 'react-redux';

export class AddNewProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      error: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = async e => {
    e.preventDefault();
    const newProject = {
      project_name: this.state.projectName
    }
    try {
      const project = await createProject(newProject);
      console.log('PROJECT', project.id)
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
        {this.state.error && <p>{this.state.error}</p>}
        <input 
          type='text'
          name='projectName'
          placeholder='Enter a new project name!'
          onChange={this.handleChange}
          value={this.state.projectName}
        />
        <button onClick={this.handleSubmit}>Create Project</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addProject: (project_name, id) => dispatch(addProject(project_name, id)),
  addAllProjects: allProjects => dispatch(addAllProjects(allProjects))
})

export default connect(null, mapDispatchToProps)(AddNewProjectForm);