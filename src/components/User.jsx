import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User = () => {

  const [users, setUsers] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    const response = await axios.get(url)
    setUsers(response.data)
  }

  async function deleteUser(userId) {
    const request = await axios.delete(`${url}/${userId}`)
    setUsers(users.filter(user => user.id !== userId))
  }

  async function postUser() {
    const newUser = {
      id: Date.now(),
      name: 'Nuru',
      surname: 'Sultanov'
    }

    const request = await axios.post(url, newUser)
    setUsers([...users, newUser])
  }

  return (
    <div>
      {users.map(user => (
        <div onClick={() => deleteUser(user.id)} key={user.id}>{user.name}</div>
      ))}

      <button onClick={postUser}>post</button>
    </div>
  )
}

export default User