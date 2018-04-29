const path = require('path')
const express = require('express')
const app = express()

const PORT = 3000

app.use(express.static(path.join(__dirname, 'docs')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs/index.html'))
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))