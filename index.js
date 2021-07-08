require('dotenv')
const express = require('express')
const server = express()
PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})