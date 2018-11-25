import React, { Component } from 'react'

class Overlay extends Component {
  constructor(props) {
    super(props)
    this.state = { classNames: false }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ classNames: true }), 0)
  }

  render() {
    return (
      <div
        onClick={this.props.click}
        className={
          'AW__index__overlay ' +
          (this.state.classNames ? 'AW__index__overlay__open' : '')
        }
      />
    )
  }
}

export default Overlay
