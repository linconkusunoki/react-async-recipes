import React from 'react'
import { render, wait } from '@testing-library/react'
import Async from './'
import { fetchUsers } from '../../services/users'

jest.mock('../../services/users')

it('should render a list of users from api', async () => {
  const users = [{ id: 1, firstName: 'john' }]
  fetchUsers.mockResolvedValueOnce({ data: users })

  const { getByText, container } = render(<Async />)

  expect(getByText('Loading Users...'))
  await wait(() => expect(getByText('john')).toBeTruthy())
  expect(fetchUsers).toHaveBeenCalled()
  expect(container.firstChild).toMatchSnapshot()
})
