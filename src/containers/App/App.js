import React, { Component } from 'react';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  render() {
    const { project } = this.props;
    return (
      <>
      {!project && <CreateProjectForm />}
      </>
    )
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps)(App);
