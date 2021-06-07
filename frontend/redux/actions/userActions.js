import * as types from '../types/userTypes'
import clienteAxios from '../../axios/client'

export const login = formData => async dispatch => {
  try {
    dispatch({
      type: types.USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await clienteAxios.post(
      '/api/v1/auth/login',
      formData,
      config
    )

    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    console.log(error.response)
    console.log(error.message)
    dispatch({
      type: types.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
export const register = formData => async dispatch => {
  try {
    dispatch({
      type: types.USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await clienteAxios.post(
      '/api/v1/auth/register',
      formData,
      config
    )

    dispatch({
      type: types.USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: types.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('pupilInfo')
  localStorage.removeItem('tutorInfo')
  dispatch({ type: types.USER_LOGOUT })
}
