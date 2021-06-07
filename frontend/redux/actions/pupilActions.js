import * as types from '../types/pupilTypes'
import clienteAxios from '../../axios/client'

export const register = formData => async dispatch => {
  try {
    dispatch({
      type: types.PUPIL_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await clienteAxios.post(
      '/api/v1/pupils',
      formData,
      config
    )

    dispatch({
      type: types.PUPIL_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: types.PUPIL_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('pupilInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: types.PUPIL_REGISTER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
