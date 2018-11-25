import React, { Component } from 'react'
import Projects from './projects'
import Project from './Project'

class ProjectsController extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedProject: undefined }
    this.changeProject = this.changeProject.bind(this)
  }

  changeProject(newProject) {
    this.setState({ selectedProject: newProject })
    document.getElementsByClassName('AW__projects_controller')[0].scrollTop = 0
  }

  render() {
    return (
      <div className="AW__projects_controller">
        <Project selectedProject={this.state.selectedProject} />
        <Projects click={this.changeProject} />
      </div>
    )
  }
}

export default ProjectsController
