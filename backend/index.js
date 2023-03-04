const express = require('express')
const app = express()

const port = 8000 //Port Number

app.get('/', (req, res) => {
  return res.send('Hello There!!!!')
})

app.get('/login', (req, res) => {
  return res.send('Hello login')
})

app.get('/signout', (req, res) => {
  return res.send('Hello sign out')
})

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})

// Get
// Post
// put
// delete
