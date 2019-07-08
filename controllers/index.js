const db = require('../data/db')

function getUsers(req, res) {
  db.find().then(data => {
    res.status(200).json({
      status: 'success',
      users: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      error
    })
  })
}

module.exports = {
  getUsers
}