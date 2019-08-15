import MockAdapter from 'axios-mock-adapter'
import api from './api'
import { fetchUsers } from './users'

var apiMock = new MockAdapter(api)

beforeEach(() => {
  apiMock.reset()
})

it('should fetch the users from api', async () => {
  const data = [{ id: 1, firstName: 'john' }]
  apiMock.onGet('/users').reply(200, data)

  const resp = await fetchUsers()

  expect(resp).toEqual(data)
})

it('should not fetch the users from api', async () => {
  apiMock.onGet('/users').reply(400, { success: false })

  const resp = await fetchUsers()

  expect(resp.data.success).toBeFalsy()
})
