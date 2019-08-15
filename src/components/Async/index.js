import React from 'react'
import { fetchUsers } from '../../services/users'
import useFetch from '../../hooks/useFetch'

function Async() {
  const users = useFetch(fetchUsers)

  if (users.isLoading) {
    return <p>Loading Users...</p>
  }

  if (users.error) {
    return <p>Error while loading users!</p>
  }

  return (
    <ul>
      {users.response.data.map(user => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </ul>
  )
}

export default Async
