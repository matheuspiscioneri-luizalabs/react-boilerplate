import React, { Component } from 'react'

import { Navbar } from '../components'
import Logo from '../images/logo-admin-ml.png'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar home="/" logo={Logo} />
        {this.props.children}
      </div>
    )
  }
}