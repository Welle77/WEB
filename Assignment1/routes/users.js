var express = require("express");
var router = express.Router();
const { index, auth } = require("../controllers/start");

/* GET home page. */
router.get("/", index);

router.post("/submit", (req, res) => {
  console.log(req);
  //res.render("workouts", { title: "Exerciser" });
});

module.exports = router;
