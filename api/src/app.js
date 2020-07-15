const express = require('express')
const cors = require('cors')
const intrests = require('./../fixtures/interests.json')

const app = express()
const port = 9000

// middleware
app.use(cors())

// routes
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/interests', (req, res) => res.send(intrests))

app.listen(port, () =>
    console.log(`Server listening at http://localhost:${port}`)
)
