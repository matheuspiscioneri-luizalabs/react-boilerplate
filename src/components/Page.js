import React, { Component } from 'react'

export class Page extends Component {
  render() {
    return (
      <main className="page">
        {this.props.children}
      </main>
    )
  }
}