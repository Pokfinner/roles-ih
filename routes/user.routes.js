const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("user/index");
});


/* GET home page */
router.get("/sales", (req, res, next) => {
    res.render("user/sales");
});


module.exports = router;
