import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PageHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  render() {
    return (
      <header className="page__header">
        <div className="container">
          <div className="page__header__heading">
            <h1 className="page__header__title">{this.props.title}</h1>
            <h3 className="page__header__description">{this.props.description}</h3>
          </div>
        </div>
      </header>
    )
  }
}
