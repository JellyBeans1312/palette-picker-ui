import React from 'react';
import './ProjectContainer.css';
import Project from '../../components/Project/Project'
import { connect } from 'react-redux'


const ProjectContainer = ({ allProjects }) =>
 {
  const projectList = allProjects.map(project => {
    return <Project props={{...project}} />
  })
  return (
    <section>
      {projectList}
    </section>
  )
}

const mapStateToProps = state => ({
  allProjects: state.allProjects
})

export default connect(mapStateToProps)(ProjectContainer);