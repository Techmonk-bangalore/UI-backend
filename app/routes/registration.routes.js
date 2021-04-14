    var router = require("express").Router();

    const registrations = require("../controllers/registration.controller.js");

    // Create a new User
    router.post("/create", registrations.create);

    // Retrieve a single User with id
    router.get("/get/:id", registrations.findOne);

    // Update a User with id
    router.put("/update/:id", registrations.update);


module.exports = router;