const express = require('express')

const { getUsers, createUser, findUser, deleteUser, updateUser } = require('../controllers')
const router = express.Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.get('/users/:id', findUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)

module.exports = {
  router: router
}