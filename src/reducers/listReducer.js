import { SET_LIST } from '../types'

const INITIAL_STATE = {
  list: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LIST:
      return { ...state, list: action.payload }
    default:
      return state
  }
}