import clienteAxios from '../../axios/client'
import * as types from '../types/subjectTypes'

export const listSubjects = (level) => async dispatch => {
  try {
    dispatch({ type: types.SUBJECT_LIST_REQUEST })
    const { data } = await clienteAxios.get(`api/v1/subjects?level=${level}`)
    console.log(data)
    dispatch({
      type: types.SUBJECT_LIST_SUCCESS,
      payload: data.data,
    })
  } catch (error) {
    dispatch({
      type: types.SUBJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
