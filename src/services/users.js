import api from './api'

export async function fetchUsers() {
  try {
    const resp = await api.get('/users')
    return resp
  } catch (error) {
    return error
  }
}
