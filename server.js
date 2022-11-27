const express = require('express')
const app = express()
const port = 1005

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/bang', (req, res) => {
    res.send('bangday')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})