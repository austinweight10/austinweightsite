import React, { Component } from 'react'
import Layout from '../components/layout'
import ProjectsController from '../components/projectsController'
import Weight from '../components/weight'
import PageContainer from '../components/pageContainer'
import BioText from '../components/bioText'
import WorkLink from '../components/workLink'

// todos
// recreate paint splodges and fade on scroll
// hover effect for project thumbs

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = { workInView: false }
    this.showWork = this.showWork.bind(this)
  }

  showWork() {
    this.setState({ workInView: !this.state.workInView })
  }

  render() {
    return (
      <Layout>
        <ProjectsController />
        <PageContainer click={this.showWork} showWork={this.state.workInView}>
          <Weight pdp={true} />
          <WorkLink click={this.showWork} />
          <BioText />
        </PageContainer>
      </Layout>
    )
  }
}

export default IndexPage
