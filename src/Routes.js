import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './containers/main'
import List from './containers/list'
import Details from './containers/details'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Route exact path="/" component={List} />
          <Route path="/details/:id" component={Details} />
        </Main>
      </BrowserRouter>
    )
  }
}

export default Routes