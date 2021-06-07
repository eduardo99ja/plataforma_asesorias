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
export const tutorListReducer = (state = { tutors: [] }, action) => {
  switch (action.type) {
    case types.TUTOR_LIST_REQUEST:
      return { loading: true, tutors: [] }
    case types.TUTOR_LIST_SUCCESS:
      return {
        loading: false,
        tutors: action.payload,
      }
    case types.TUTOR_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const tutorDetailsReducer = (state = { tutor: {} }, action) => {
  switch (action.type) {
    case types.TUTOR_DETAILS_REQUEST:
      return { loading: true, ...state }
    case types.TUTOR_DETAILS_SUCCESS:
      return { loading: false, tutor: action.payload }
    case types.TUTOR_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case types.TUTOR_DETAILS_RESET:
      return { tutor: {} }
    default:
      return state
  }
}
