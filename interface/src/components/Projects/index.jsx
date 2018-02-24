import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

/**
 * Pages
 */
import Loading from './Loading'
import Overview from './Overview'
import Console from './Console'
import Data from './Data'
import Config from './Config'

class ProjectScreen extends React.Component {
  render () {
    const { projects, selectedProject } = this.props
    if (selectedProject.index === -1) {
      return (
        <Loading />
      )
    } else {
      const project = projects[selectedProject.index]
      return (
        <Switch>
          <Route path='/projects/*/console' component={project.console ? Console : Loading} />
          <Route path='/projects/*/data' component={project.data ? Data : Loading} />
          <Route path='/projects/*/config' component={project.config ? Config : Loading} />
          <Route path='/projects/*' component={Overview} />
        </Switch>
      )
    }
  }
}

export default connect(({ injectify: {projects, selectedProject} }) => ({ projects, selectedProject }))(ProjectScreen)