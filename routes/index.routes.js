const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET home page */
router.get("/403", (req, res, next) => {
  res.send("You are not authorized to see this page.");
});

module.exports = router;
