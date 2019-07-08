const express = require('express')

const { getUsers, createUser, findUser, deleteUser } = require('../controllers')
const router = express.Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.get('/users/:id', findUser)
router.delete('/users/:id', deleteUser)

module.exports = {
  router: router
}