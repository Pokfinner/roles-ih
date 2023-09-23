const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("collaborator/index");
});


/* GET home page */
router.get("/sales", (req, res, next) => {
    res.render("collaborator/sales");
});

module.exports = router;
