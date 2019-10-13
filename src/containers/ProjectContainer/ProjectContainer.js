import React from 'react';
import './ProjectContainer.css';
import Project from '../Project/Project'
import { connect } from 'react-redux'


const ProjectContainer = ({ allProjects, allPalettes }) =>
 {
  const projectList = allProjects.map(project => {
    let correspondingPalettes = allPalettes.filter(palette => {
      return palette.project_id === project.id
    }) 
    return <Project props={{...project}} palettes={correspondingPalettes} />
  })
  return (
    <section>
      {projectList}
    </section>
  )
}

const mapStateToProps = state => ({
  allProjects: state.allProjects,
  allPalettes: state.allPalettes
})

export default connect(mapStateToProps)(ProjectContainer);