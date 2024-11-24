
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5001/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const user = {
      name,
      email
    }
    console.log(user)
    fetch('http://localhost:5001/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const newUser = [...users, data]
        setUsers(newUser)

      })

  }
  return (
    <>

      <h1>User management system</h1>
      <p>Total user: {users.length}</p>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name='name' /> <br />
        <input type="email" placeholder='Email' name='email' /> <br />
        <input type="submit" value='Add user' />
      </form>
      {
        users.map(user => <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <hr />
        </div>)
      }

    </>
  )
}

export default App
