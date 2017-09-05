import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Strips } from '../'

export class Navbar extends Component {
  static propTypes = {
    home: PropTypes.string,
    logo: PropTypes.string,
  }

  render() {
    return (
      <div>
        <Strips />
        <header className="navbar">
          <div className="container">
            <Link to={this.props.home} title="brand" className="navbar__brand">
              <img src={this.props.logo} alt="Magazine Luiza - Administrativo" className="navbar__brand__logo" />
            </Link>
          </div>
        </header>
      </div>
    )
  }
}