const router = require('express').Router();
const passport = require("../config/passport");
const checkAuth = require('../config/auth');
router.post('/login', passport.authenticate("local"), async (req, res) => {
    res.json(req.user)
})
router.get('/check', checkAuth, (req, res) => {
    console.log(req.user)
    res.json(req.user)
})
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});


module.exports = router;