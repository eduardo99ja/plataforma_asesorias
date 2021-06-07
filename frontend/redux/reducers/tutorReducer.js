import * as types from '../types/tutorTypes'
export const tutorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.TUTOR_REGISTER_REQUEST:
      return { loading: true }
    case types.TUTOR_REGISTER_SUCCESS:
      return { loading: false, tutorInfo: action.payload }
    case types.TUTOR_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
