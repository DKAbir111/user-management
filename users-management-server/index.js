const express = require('express')
const app = express()
const port = process.env.PORT || 5001
const cors = require('cors')

//middleware
app.use(cors())
app.use(express.json())

const user = [
    { id: 1, name: "Abir", email: "abir@gmail.com" },
    { id: 2, name: "John Doe", email: "john@gmail.com" },
    { id: 3, name: "Jane Smith", email: "jane@gmail.com" }

]


app.get('/', (req, res) => {
    res.send("This is a user management application")
})
app.get('/users', (req, res) => {
    res.send(user)
})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = user.length + 1
    user.push(newUser)
    res.status(201).send(newUser)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
