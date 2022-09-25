const express = require('express')
const app = express()
app.get('/', (req, res) => /*arrow function*/{
    res.send('hello world')
})

app.listen(3000)