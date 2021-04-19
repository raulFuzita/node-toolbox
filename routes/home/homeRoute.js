const express = require('express')
const router = express.Router()

const controller = require('../../controlllers/home/homeController')

router.get('/', controller.get_index)

module.exports = router