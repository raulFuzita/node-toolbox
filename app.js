const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config()
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.locals.path = req.path
    next()
})

app.use('/index', require('./routes/home/homeRoute'))
app.get('/', (req, res) => res.redirect('/index'))

app.use((req, res) => res.status(404).render('404'))


const port = process.env.PORT || 5000
const address = process.env.HOST_NAME || '0.0.0.0'
app.listen(port, () => {
    console.log(`Server running at ${address}:${port}`)
})