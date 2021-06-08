import * as types from '../types/tutorTypes'
import clienteAxios from '../../axios/client'

export const register = formData => async dispatch => {
  try {
    dispatch({
      type: types.TUTOR_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await clienteAxios.post('/api/v1/tutors', formData, config)

    dispatch({
      type: types.TUTOR_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: types.TUTOR_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('tutorInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: types.TUTOR_REGISTER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
export const listTutors = () => async dispatch => {
  try {
    dispatch({ type: types.TUTOR_LIST_REQUEST })

    let url = `api/v1/tutors`

    const { data } = await clienteAxios.get(url)
    
    dispatch({
      type: types.TUTOR_LIST_SUCCESS,
      payload: data.data,
    })
  } catch (error) {
    dispatch({
      type: types.TUTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
export const listTutorDetails = id => async dispatch => {
  try {
    dispatch({ type: types.TUTOR_DETAILS_REQUEST })

    const { data } = await clienteAxios.get(`api/v1/tutors/${id}`)

    dispatch({
      type: types.TUTOR_DETAILS_SUCCESS,
      payload: data.data,
    })
  } catch (error) {
    dispatch({
      type: types.TUTOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
