import React, { Component } from 'react'

export class Row extends Component {
  render() {
    return (
      <div className={`gr ${this.props.className ? this.props.className : ''}`}>
        {this.props.children}
      </div>
    )
  }
}