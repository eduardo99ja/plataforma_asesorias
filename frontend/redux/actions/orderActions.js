import * as types from '../types/orderTypes'
import clienteAxios from '../../axios/client'

export const createOrder = order => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.ORDER_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await clienteAxios.post(`/api/v1/classes`, order, config)

    dispatch({
      type: types.ORDER_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: types.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
