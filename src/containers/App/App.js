import React, { Component } from 'react';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
import { connect } from 'react-redux';
import { getAllProjects } from '../../util/apiCalls'
import { addAllProjects } from '../../actions'
import './App.css';

class App extends Component {

  componentDidMount = async () => {
    const allProjects = await getAllProjects()
    this.props.addAllProjects(allProjects)
  }

  render() {
    const { allProjects } = this.props;
    return (
      <>
      {!allProjects && <CreateProjectForm />}
      </>
    )
  }
}

const mapStateToProps = state => ({
  allProjects: state.allProjects
});

const mapDispatchToProps = dispatch => ({
  addAllProjects: allProjects => dispatch(addAllProjects(allProjects))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
