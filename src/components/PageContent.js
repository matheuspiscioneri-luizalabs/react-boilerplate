import React, { Component } from 'react'

export class PageContent extends Component {
  render() {
    return (
      <div className="page__content">
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}