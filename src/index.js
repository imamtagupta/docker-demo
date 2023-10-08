const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log({'message': 'Docker is easy 🐬'})
    res.send({'message': 'Docker is easy 🐬'})
})

const port = process.env.PORT || 8000

app.listen(port, ()=> {
    console.log(`App is listening on ${port}\nhttp://localhost:${port}/`)
})