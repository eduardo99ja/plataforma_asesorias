import * as types from '../types/pupilTypes'
export const pupilRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.PUPIL_REGISTER_REQUEST:
      return { loading: true }
    case types.PUPIL_REGISTER_SUCCESS:
      return { loading: false, pupilInfo: action.payload }
    case types.PUPIL_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
