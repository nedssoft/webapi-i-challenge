const express = require('express')

const { getUsers, createUser, findUser } = require('../controllers')
const router = express.Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.get('/users/:id', findUser)

module.exports = {
  router: router
}