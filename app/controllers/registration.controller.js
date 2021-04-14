const db = require("../models");
const Registration = db.registrations;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Create a User
    const tutorial = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      branch: req.body.branch,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
      role:req.body.role
    };
  
    // Save user in the database
    Registration.create(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({            
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });               
      });
  };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Registration.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Registration.findOne({ where: { id: id } })
    .then( Registration => {
      return  Registration
        .update({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          branch: req.body.branch,
          userName: req.body.userName,
          password: req.body.password,
          email: req.body.email,
          phone: req.body.phone,
          role:req.body.role
        })
        .then(() =>
          res.send( Registration))
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};