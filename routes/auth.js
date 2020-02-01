const express = require('express');
const router = express.Router();
const usersQueries = require('../db/queries/users');
const passport = require('../auth/passport');

router.post('/signup', async (req, res, next) => {
  try {
    const user = req.body;
    const newUser = await usersQueries.createUser(user)
    res.send({
      payload: newUser,
      msg: "New user signup success",
      err: false
    })
  } catch (err) {
    next(err)
  }
});

router.post('/login', passport.authenticate('local'), async (req, res, next) => {
  res.send({
    payload: req.user,
    msg: "New user signup success",
    err: false
  })
});

module.exports = router;
