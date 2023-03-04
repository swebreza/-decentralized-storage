const express = require('express')
const app = express()

const port = 8000
app.get('/login', (req, res) => {
  return res.send('Hello login')
})
app.get('/', (req, res) => {
  return res.send('Hello There!!!')
})
app.get('/home', (req, res) => {
  return res.send('Hello Home')
})

app.listen(port, () => {
  console.log('Server is running....')
})
