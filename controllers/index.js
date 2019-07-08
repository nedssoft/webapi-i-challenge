const db = require("../data/db");

function getUsers(req, res) {
  db.find()
    .then(data => {
      res.status(200).json({
        status: "success",
        users: data
      });
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error
      });
    });
}

function createUser(req, res) {
  const { name, bio } = req.body;

  if (!name || !bio) {
    return res.status(400).json({
      errorMessage: "Please provide name and bio for the user."
    });
  }
  db.insert({name, bio})
    .then(data => {
      res.status(201).json({
        status: "success",
        user: data
      });
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: "There was an error while saving the user to the database"
      });
    });
}

module.exports = {
  getUsers,
  createUser
};
