const db = require("../models");
const Vote = db.vote;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {

    // Create candidate
    const tutorial = {
        name: req.body.name,
        initialVote: req.body.initialVote,
        currentVote: req.body.currentVote,
    };

    // Save Tutorial in the database
    Vote.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Candidate."
            });
        });
};

exports.update = (req, res) => {
    Vote.findOne({ where: { name: req.body.name } })
        .then(Vote => {
            var candidateData = JSON.parse(JSON.stringify(Vote));
            if (candidateData.name == req.body.name) {
                return Vote
                    .update({
                        currentVote: candidateData.currentVote + 1,
                    })
                    .then(() =>
                        res.send(Vote))
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Invalid credentials"
            });
        });

};

// Retrieve all Candidate results from the database.
exports.findAll = (req, res) => {
    Vote.findAll()
    .then(Vote => {
         res.send(Vote)
    })
};

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Registration.findByPk(id)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving Tutorial with id=" + id
//         });
//       });
//   };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//     const id = req.params.id;
//     Registration.findOne({ where: { id: id } })
//     .then( Registration => {
//       return  Registration
//         .update({
//           firstName: req.body.firstName,
//           lastName: req.body.lastName,
//           branch: req.body.branch,
//           userName: req.body.userName,
//           password: req.body.password,
//           email: req.body.email,
//           phone: req.body.phone,
//           role:req.body.role
//         })
//         .then(() =>
//           res.send( Registration))
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Tutorial with id=" + id
//       });
//     });
//   };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {

// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {

// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {

// };