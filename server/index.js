const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hellow World')
})

app.get('/api/avatars', (req, res) => {
  res.send('avatars URL')
})

app.listen(port, () => console.log('Listening in port :' + port))


