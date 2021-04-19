const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

const port = process.env.PORT || 5000
const address = process.env.HOST_NAME || '0.0.0.0'
app.listen(port, () => {
    console.log(`Server running at ${address}:${port}`)
})