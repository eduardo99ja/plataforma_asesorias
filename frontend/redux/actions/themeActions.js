import clienteAxios from '../../axios/client'
import * as types from '../types/themeTypes'

export const listThemes = subject => async dispatch => {
  try {
    let url
    dispatch({ type: types.THEME_LIST_REQUEST })
    if (subject === 'all') {
      url = 'api/v1/themes'
    } else {
      url = `api/v1/subjects/${subject}/themes`
    }
    const { data } = await clienteAxios.get(url)
    console.log(data)
    dispatch({
      type: types.THEME_LIST_SUCCESS,
      payload: data.data,
    })
  } catch (error) {
    dispatch({
      type: types.THEME_LIST_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}

export const listThemeDetails = id => async dispatch => {
  try {
    dispatch({ type: types.THEME_DETAILS_REQUEST })

    const { data } =await clienteAxios.get(`api/v1/themes/${id}`)

    dispatch({
      type: types.THEME_DETAILS_SUCCESS,
      payload: data.data,
    })
  } catch (error) {
    dispatch({
      type: types.THEME_DETAILS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
