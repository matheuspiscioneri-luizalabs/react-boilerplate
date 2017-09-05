import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import Reducers from './reducers'
import Routes from './Routes'

import 'proa/dist/css/proa.min.css'
import 'proa/dist/js/proa.min.js'

class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    )
  }
}

export default App
