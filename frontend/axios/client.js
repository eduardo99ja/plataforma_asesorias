import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: 'http://127.0.0.1:5000',
})

export default clienteAxios
