var express = require("express");
var router = express.Router();
const startController = require("../controllers/start");

/* GET home page. */
router.get("/", startController.index);

module.exports = router;
