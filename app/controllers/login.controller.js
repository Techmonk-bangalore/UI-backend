const db = require("../models");
const Registration = db.registrations;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.login = (req, res) => {
    console.log("req");
    console.log(req.body);
    
    Registration.findAll({where:{userName:req.body.username, password:req.body.password}})
    .then(data => {
        var credentials = JSON.parse(JSON.stringify(data));        
       if((credentials[0].userName == req.body.username) && (credentials[0].password == req.body.password)){           
        res.send({
            message:"Login success"
        });
       }
    })
    .catch(err => {
      res.status(500).send({
        message: "Invalid credentials"
      });
    });
  
};