import { SET_DETAILS } from '../types'

export const setDetails = (payload) => {
  return { type: SET_DETAILS, payload }
}

export const getDetails = (detailsId) => {
  return dispatch => {

    const detail = { id: detailsId, name: `Item ${detailsId}`, detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }

    dispatch(setDetails(detail))
  }
}