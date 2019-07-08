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

function findUser(req, res) {
  const { id } = req.params
  db.findById(id)
    .then(data => {
      if (data) {
        res.status(200).json({
          status: "success",
          user: data
        });
      }
      else {
        res.status(404).json({
          status: "error",
          message: "The user with the specified ID does not exist." 
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: "The user information could not be retrieved." 
      });
    });
}
function deleteUser(req, res) {
  const { id } = req.params
  db.findById(id)
    .then(data => {
      if (data) {
        db.remove(id)
        .then(data => {
          if (data) {
            res.status(200).json({
              status: "success",
              message: 'User deleted successfully'
            });
          } else {
            res.status(500).json({
              status: "error",
              errorMessage: `An error occurred trying to delete the user with id ${id}` 
            });
          }
        })
      }
      else {
        res.status(404).json({
          status: "error",
          message: "The user with the specified ID does not exist." 
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: "The user information could not be retrieved." 
      });
    });
}
module.exports = {
  getUsers,
  createUser,
  findUser,
  deleteUser
};
