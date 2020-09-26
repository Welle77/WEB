var express = require("express");
var router = express.Router();
const { index } = require("../controllers/start");

/* GET home page. */
router.get("/", index);

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.render("", { title: "Exerciser" });
});

module.exports = router;
