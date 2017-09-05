import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Col extends Component {
  static propTypes = {
    size: PropTypes.number.isRequired
  }

  render() {
    return (
      <div className={`gr-${this.props.size}`}>
        {this.props.children}
      </div>
    )
  }
}