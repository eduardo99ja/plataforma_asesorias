import clienteAxios from '../../axios/client'
import * as types from '../types/topicTypes'

export const listTopics = () => async dispatch => {
  try {
    dispatch({ type: types.TOPIC_LIST_REQUEST })

    dispatch({
      type: types.TOPIC_LIST_SUCCESS,
      payload: { name: 'integrales' },
    })
  } catch (error) {
    dispatch({
      type: types.TOPIC_LIST_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
