import React from 'react';
import './ProjectContainer.css';
import Project from '../Project/Project';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProjectContainer = ({ allProjects, allPalettes }) =>
 {
  const projectList = allProjects.map(project => {
    let correspondingPalettes = allPalettes.filter(palette => {
      return palette.project_id === project.id
    }) 
    return <Project key={project.id} props={{...project}} palettes={correspondingPalettes} />
  })
  return (
    <section className='project-container'>
      {projectList}
    </section>
  )
}

const mapStateToProps = state => ({
  allProjects: state.allProjects,
  allPalettes: state.allPalettes
});

export default connect(mapStateToProps)(ProjectContainer);

ProjectContainer.propTypes = {
  allProjects: PropTypes.array,
  allPalettes: PropTypes.array
}