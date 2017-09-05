import { SET_DETAILS } from '../types'

const INITIAL_STATE = {
  details: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return { ...state, details: action.payload }
    default:
      return state
  }
}