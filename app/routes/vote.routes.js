var router = require("express").Router();
const vote = require("../controllers/vote.controller.js");

// Create candidate
router.post("/createCandidate", vote.create);


// Create candidate
router.put("/updateCandidate", vote.update);

// Get candidate
router.get("/getResults", vote.findAll);


module.exports = router;